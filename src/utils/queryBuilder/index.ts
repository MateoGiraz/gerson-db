class QueryBuilder {
  create(tableName: string, keys: string[], values: string[]): string {
    const formatedKeys = keys.map((key) => key).join(',');
    const formatedValues = values.map((value) => value).join("','");

    return `INSERT INTO ${tableName} (${formatedKeys}) VALUES ('${formatedValues}')`
  }

  fetch(tableName: string, columns : string[], conditions : {key : string, value : string}[]) : string {
    const cols = columns.join(',');
    
    if (conditions.length > 0) { 
      const conds = Object.values(conditions)
        .map((cond, index) => `${Object.keys(cond)} = $${index + 1}`)
        .join(' AND ');
      
      return `SELECT ${cols} FROM ${tableName} WHERE ${conds}`
    }

    return `SELECT ${cols} FROM ${tableName}`
  }
}

export { QueryBuilder };

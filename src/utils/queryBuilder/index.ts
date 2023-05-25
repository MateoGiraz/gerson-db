class QueryBuilder {
  create(tableName: string, keys: string[], values: string[]): string {
    const formatedKeys = keys.map((key) => key).join(',');
    const formatedValues = values.map((value) => value).join(',');

    return `INSERT INTO ${tableName} (${formatedKeys}) VALUES ('${formatedValues}')`
  }

  fetch(tableName: string, columns : string[]): string {
    const cols = columns.join(',');
    
    return `SELECT ${cols} FROM ${tableName}`
  }
}

export { QueryBuilder };
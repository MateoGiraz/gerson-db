abstract class QueryBuilder {
  create(tableName: string, data: [string,string][]): string {
    const keys = data.map((item) => item[0]);
    const values = data.map((item) => item[1]);

    const formatedKeys = keys.join(",")
    const formatedValues = values.join("','")

    return `INSERT INTO ${tableName} (${formatedKeys}) VALUES ('${formatedValues}')`
  }
  
  delete(tableName: string, conditions: [string,string][]): string {
    const formatedConditions = conditions.map((item) => `${item[0]}='${item[1]}'`).join(" AND ")
    return `DELETE FROM ${tableName} WHERE ${formatedConditions}`
  }

  update(tableName: string, data: [string,string][], conditions: [string,string][]): string {
    const formatedData = data.map((item) => `${item[0]}='${item[1]}'`).join(",")
    const formatedConditions = conditions.map((item) => `${item[0]}='${item[1]}'`).join(" AND ")
    
    return `UPDATE ${tableName} SET ${formatedData} WHERE ${formatedConditions}`
  }

  abstract fetch(tableName: string, columns : string[], conditions : [string,string][]) : string
}

export { QueryBuilder };

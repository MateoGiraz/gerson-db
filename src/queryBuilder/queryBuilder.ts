abstract class QueryBuilder {
  create(tableName: string, data: [string,string][]): string {
    const keys = data.map((item) => item[0]);
    const values = data.map((item) => item[1]);

    const formatedKeys = keys.join(",")
    const formatedValues = values.join("','")

    return `INSERT INTO ${tableName} (${formatedKeys}) VALUES ('${formatedValues}')`
  }
  
  abstract fetch(tableName: string, columns : string[], conditions : [string,string][]) : string
}

export { QueryBuilder };

import { QueryBuilder } from "./queryBuilder";

class PostgresQueryBuilder extends QueryBuilder {
  create(tableName: string, data: {key : string, value : string}[]): string {
    const items = Object.values(data);

    const formatedKeys = items.map((item) => Object.keys(item)).join(',');
    const formatedValues = items.map((item) => Object.values(item)).join("','");

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

export { PostgresQueryBuilder };

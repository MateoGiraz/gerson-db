import { QueryBuilder } from "./queryBuilder";

class PostgresQueryBuilder extends QueryBuilder {
  fetch(tableName: string, columns : string[], conditions : [string,string][]) : string {
    const cols = columns.join(',');

    if (conditions.length > 0) { 
      const conds = conditions
        .map((cond, index) => `${cond[0]} = $${index + 1}`)
        .join(' AND ');
      
      return `SELECT ${cols} FROM ${tableName} WHERE ${conds}`
    }

    return `SELECT ${cols} FROM ${tableName}`
  }
}

export { PostgresQueryBuilder };

import { QueryBuilder } from "./queryBuilder";

class MysqlQueryBuilder extends QueryBuilder {
  fetch(tableName: string, columns: string[], conditions: [string,string][]): string {
    const cols = columns.join(',');

    if (conditions.length > 0) {
      const conds = conditions
        .map((cond) => `${cond[0]} = '${cond[1]}'`)
        .join(' AND ');

      return `SELECT ${cols} FROM ${tableName} WHERE ${conds}`;
    }

    return `SELECT ${cols} FROM ${tableName}`;
  }

}

export { MysqlQueryBuilder };

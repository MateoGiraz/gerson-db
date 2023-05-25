import { QueryBuilder } from "./queryBuilder";

class MysqlQueryBuilder extends QueryBuilder {
  create(tableName: string, data: { key: string, value: string }[]): string {
    const columns = data.map(item => Object.keys(item)).join(',');
    const values = data.map(item => `'${Object.values(item)}'`).join(',');

    return `INSERT INTO ${tableName} (${columns}) VALUES (${values})`;
  }

  fetch(tableName: string, columns: string[], conditions: { key: string, value: string }[]): string {
    const cols = columns.join(',');

    if (conditions.length > 0) {
      const conds = conditions
        .map((cond, index) => `${Object.keys(cond)} = '${Object.values(cond)}'`)
        .join(' AND ');

      return `SELECT ${cols} FROM ${tableName} WHERE ${conds}`;
    }

    return `SELECT ${cols} FROM ${tableName}`;
  }
}

export { MysqlQueryBuilder };

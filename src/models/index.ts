import { QueryBuilder } from "../utils/queryBuilder";
import { client } from "../config/db";

class DBOperations {
  tableName: string; 
  queryBuilder: QueryBuilder;

  constructor(tableName: string) {
    this.tableName = tableName;
    this.queryBuilder = new QueryBuilder();
  }

  get(columns: string[], conditions : {key : string, value : string}[]) {
    const sql = this.queryBuilder.fetch(this.tableName, columns, conditions);
    return new Promise((resolve, reject) => {
      client.query(sql, Object.values(conditions).map(cond => Object.values(cond)[0]), (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res.rows)
      })
    })
  }

  push(data : {key : string, value : string}[]) {
    const sql = this.queryBuilder.create(this.tableName, data);
    return new Promise((resolve, reject) => {
      client.query(sql, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res.rows)
      })
    })
  }
}

export { DBOperations }
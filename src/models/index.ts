import { QueryBuilder } from "../utils/queryBuilder";
import { client } from "../config/db";

class DBOperations {
  tableName: string; 
  queryBuilder: QueryBuilder;

  constructor(tableName: string) {
    this.tableName = tableName;
    this.queryBuilder = new QueryBuilder();
  }

  get(columns: string[]) {
    const sql = this.queryBuilder.fetch(this.tableName, columns);
    return new Promise((resolve, reject) => {
      client.query(sql, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res.rows)
      })
    })
  }

  push(keys : string[], values : string[]) {
    const sql = this.queryBuilder.create(this.tableName, keys, values);
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
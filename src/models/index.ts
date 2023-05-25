import { QueryBuilder } from "../utils/queryBuilder";
import { ClientAdapter } from "../db/clientAdapter/clientAdapter";
import { PostgresClient } from "../db/postgres/postgresClient";

class DBOperations {
  tableName: string; 
  queryBuilder: QueryBuilder;
  client : ClientAdapter;

  constructor(tableName: string) {
    this.tableName = tableName;
    this.queryBuilder = new QueryBuilder();
    this.client = new PostgresClient();
  }

  get(columns: string[], conditions : {key : string, value : string}[]) {
    const sql = this.queryBuilder.fetch(this.tableName, columns, conditions);
    return new Promise((resolve, reject) => {
      this.client.query(sql, Object.values(conditions).map(cond => Object.values(cond)[0]), (err, res) => {
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
      this.client.query(sql, [], (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res.rows)
      })
    })
  }
}

export { DBOperations }
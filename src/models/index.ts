import { PostgresQueryBuilder } from "../queryBuilder/postgresQueryBuilder";
import { QueryBuilder } from "../queryBuilder/queryBuilder";
import { ClientAdapter } from "../db/clientAdapter/clientAdapter";
import { PostgresClient } from "../db/postgres/postgresClient";
import { MysqlQueryBuilder } from "../queryBuilder/mysqlQueryBuilder";
import { MysqlClient } from "../db/mysql/mysqlClient";

class DBOperations {
  tableName: string; 
  queryBuilder: QueryBuilder;
  client : ClientAdapter;

  constructor(tableName: string) {
    this.tableName = tableName;
    this.queryBuilder = new MysqlQueryBuilder();
    this.client = new MysqlClient();
  }

  get(columns: string[], conditions : {key : string, value : string}[]) {
    const sql = this.queryBuilder.fetch(this.tableName, columns, conditions);
    return new Promise((resolve, reject) => {
      this.client.query(sql, Object.values(conditions).map(cond => Object.values(cond)[0]), (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res.rows ? res.rows : res)
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
        resolve(res.rows ? res.rows : res)
      })
    })
  }
}

export { DBOperations }
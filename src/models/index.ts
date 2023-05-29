import { PostgresQueryBuilder } from "../queryBuilder/postgresQueryBuilder";
import { QueryBuilder } from "../queryBuilder/queryBuilder";
import { ClientAdapter } from "../db/clientAdapter";
import { PostgresClient } from "../db/postgresClient";
import { MysqlQueryBuilder } from "../queryBuilder/mysqlQueryBuilder";
import { MysqlClient } from "../db/mysqlClient";
import { MariadbClient } from "../db/mariadbClient";



class DBOperations {
  tableName: string; 
  model: string[];
  
  queryBuilder: QueryBuilder;
  client : ClientAdapter;

  constructor(tableName: string, model : string[]) {
    this.tableName = tableName;
    this.model = model;
    this.queryBuilder = new PostgresQueryBuilder();
    this.client = new PostgresClient();
  }

  get(conditions: { key: string, value: string }[], columns: string[] = this.model) {
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
  
  getAll(columns: string[] = this.model) {
    return this.get([], columns);
  }
}

export { DBOperations }
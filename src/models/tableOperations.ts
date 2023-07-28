import { Database } from "./database";

class TableOperations {
  tableName: string; 
  db: Database;

  constructor(tableName: string, db: Database) {
    this.db = db;
    this.tableName = tableName;
  }

  get(columns: string[], conditions : {key : string, value : string}[]) {
    const sql = this.db.queryBuilder.fetch(this.tableName, columns, conditions);
    return new Promise((resolve, reject) => {
      this.db.client.query(sql, Object.values(conditions).map(cond => Object.values(cond)[0]), (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res.rows ? res.rows : res)
      })
    })
  }

  push(data : {key : string, value : string}[]) {
    const sql = this.db.queryBuilder.create(this.tableName, data);
    return new Promise((resolve, reject) => {
      this.db.client.query(sql, [], (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res.rows ? res.rows : res)
      })
    })
  }
}

export { TableOperations }
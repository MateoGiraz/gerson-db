import { Database } from "./database";

class TableOperations {
  model: string[];
  tableName: string;
  db: Database;

  constructor(tableName: string, model: string[], db: Database) {
    this.db = db;
    this.model = model;
    this.tableName = tableName;
  }

  get(conditions: [string, string][], columns: string[] = this.model) {
    const sql = this.db.queryBuilder.fetch(this.tableName, columns, conditions);
    return new Promise((resolve, reject) => {
      this.db.client.query(sql, conditions.map(cond => cond[1]), (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res.rows ? res.rows : res)
      })
    })
  }

  push(data: [string, string][]) {
    const sql = this.db.queryBuilder.create(this.tableName, data);
    return new Promise((resolve, reject) => {
      this.db.client.query(sql, [], (err, res) => {
        if (err) {
          reject(err)
        }
        resolve('ok')
      })
    })
  }

  delete(conditions: [string, string][]) {
    const sql = this.db.queryBuilder.delete(this.tableName, conditions);
    return new Promise((resolve, reject) => {
      this.db.client.query(sql, [], (err, res) => {
        if (err) {
          reject(err)
        }
        resolve('ok')
      })
    })
  }

  update(data: [string, string][], conditions: [string, string][]) {
    const sql = this.db.queryBuilder.update(this.tableName, data, conditions);
    return new Promise((resolve, reject) => {
      this.db.client.query(sql, [], (err, res) => {
        if (err) {
          reject(err)
        }
        resolve('ok')
      })
    })
  }

  updateById(id: string, data: [string, string][]) {
    return this.update(data, [['id', id]]);
  }
  
  deleteById(id: string) {
    return this.delete([['id', id]]);
  }

  getAll(columns : string[]) {
    return this.get([], columns);
  }

  async getById(id: string, columns: string[]) {
    const retArr = await this.get([['id', id]], columns);
    return retArr[0] ?? null;
  }
}

export { TableOperations }
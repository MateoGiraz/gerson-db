const mysql = require('mysql2');
import { ClientAdapter } from "../clientAdapter/clientAdapter";

class MysqlClient extends ClientAdapter {
  client : any;

  constructor(connectionString : string) {
    super();
    this.client = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'secret',
      database: 'testDB',
    });
  }

  query(sql: string, params: string[], cb: (err, res) => void) {
    this.client.query(sql, params, cb);
  }
}

export { MysqlClient }
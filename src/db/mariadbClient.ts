const mariadb = require('mariadb');
import { ClientAdapter } from "./clientAdapter";

class MariadbClient extends ClientAdapter {
  client : any;

  constructor() {
    super();
    this.client = mariadb.createPool({
      host: 'localhost', 
      user:'root', 
      password: 'secret',
      connectionLimit: 5,
      database: 'testDB'
    });
  }

  async query(sql: string, params: string[], cb: (err, res) => void) {
    const conn = await this.client.getConnection();
    conn.query(sql, params, cb); 
  }
}

export { MariadbClient }
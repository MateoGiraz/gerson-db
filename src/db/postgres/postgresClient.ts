import { ClientAdapter } from "../clientAdapter/clientAdapter";
import { Client } from 'pg'

class PostgresClient extends ClientAdapter {
  client: Client;

  constructor(connectionString : string) {
    super();
    this.client = new Client({
      user: 'postgres',
      host: 'localhost',
      database: 'testDB',
      password: 'secret',
      port: 5432,
    })

    this.client.connect(function (err) {
      if (err) throw err
      console.log('Connected!')
    })
    
  }

  query(sql: string, params: string[], cb: (err, res) => void) {
    this.client.query(sql, params, cb);
  }
}

export { PostgresClient }
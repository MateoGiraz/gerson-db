import { MysqlClient } from "./mysql/mysqlClient";
import { PostgresClient } from "./postgres/postgresClient";

class ClientFactory{
    public static factory(client : string, connectionString : string): any{
      switch (client) {
        case 'mysql':
          return new MysqlClient(connectionString);
        case 'postgresql':
          return new PostgresClient(connectionString);
        default:
          throw new Error('Invalid db');
      }
    }
}

export { ClientFactory }
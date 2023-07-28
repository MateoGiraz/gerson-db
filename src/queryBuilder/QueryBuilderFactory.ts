import { MysqlQueryBuilder } from "./mysqlQueryBuilder";
import { PostgresQueryBuilder } from "./postgresQueryBuilder";

class QueryBuilderFactory{
    public static factory(client : string): any{
      switch (client) {
        case 'mysql':
          return new MysqlQueryBuilder();
        case 'postgres':
          return new PostgresQueryBuilder();
        default:
          throw new Error('Invalid db');
      }
    }
}

export { QueryBuilderFactory }
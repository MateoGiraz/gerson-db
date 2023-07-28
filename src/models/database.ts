import { ClientAdapter } from "../db/clientAdapter/clientAdapter";
import { ClientFactory } from "../db/clientFactory";
import { QueryBuilderFactory } from "../queryBuilder/QueryBuilderFactory";
import { QueryBuilder } from "../queryBuilder/queryBuilder";

class Database{
  client: ClientAdapter;
  queryBuilder: QueryBuilder;
  constructor(connectionString: string) {
      const client = this.getClientFromConnectionString(connectionString);  

      this.client = ClientFactory.factory(client, connectionString);
      this.queryBuilder = QueryBuilderFactory.factory(client);
  }
  
  getClientFromConnectionString(connectionString: string) {
    const client = connectionString.split(':')[0];
    return client;
  }
}

export { Database }
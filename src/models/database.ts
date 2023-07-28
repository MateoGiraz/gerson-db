import { ClientAdapter } from "../db/clientAdapter/clientAdapter";
import { ClientFactory } from "../db/clientFactory";
import { QueryBuilderFactory } from "../queryBuilder/QueryBuilderFactory";
import { QueryBuilder } from "../queryBuilder/queryBuilder";

class Database{
  client: ClientAdapter;
  queryBuilder: QueryBuilder;
    constructor(client: string, connectionString : string) {
      this.client = ClientFactory.factory(client, connectionString);
      this.queryBuilder = QueryBuilderFactory.factory(client);
    }
}

export { Database }
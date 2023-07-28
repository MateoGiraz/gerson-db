import { Database } from "./database";
import { TableOperations } from "./tableOperations";

class Table extends TableOperations {
  constructor(tableName: string, model: string[], db: Database) {
    super(tableName, model, db);
  }

}

export { Table };
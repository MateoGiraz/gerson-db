import { Database } from "./database";
import { TableOperations } from "./tableOperations";

class Table extends TableOperations {
  constructor(tableName: string, db: Database) {
    super(tableName, db);
  }

}

export { Table };
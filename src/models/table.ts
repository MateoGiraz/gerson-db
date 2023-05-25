import { DBOperations } from ".";

class Table extends DBOperations {
  constructor(tableName: string) {
    super(tableName);
  }

}

export { Table };
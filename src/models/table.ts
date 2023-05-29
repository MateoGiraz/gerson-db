import { DBOperations } from ".";

class Table extends DBOperations {
  constructor(tableName: string, model: string[]) {
    super(tableName, model);
  }

}

export { Table };
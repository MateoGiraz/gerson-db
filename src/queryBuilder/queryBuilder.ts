abstract class QueryBuilder {
  abstract create(tableName: string, data: {key : string, value : string}[]): string
  abstract fetch(tableName: string, columns : string[], conditions : {key : string, value : string}[]) : string
}

export { QueryBuilder };

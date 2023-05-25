abstract class ClientAdapter {
  query(sql: string, params : string[], cb : (err: any, res: any) => void) {}
}

export { ClientAdapter }
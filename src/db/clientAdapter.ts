abstract class ClientAdapter {
  abstract query(sql: string, params : string[], cb : (err: any, res: any) => void)
}

export { ClientAdapter }
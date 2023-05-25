import { Client } from 'pg'

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'testDB',
  password: 'secret',
  port: 5432,
})

client.connect(function (err) {
  if (err) throw err
  console.log('Connected!')
})

export { client }

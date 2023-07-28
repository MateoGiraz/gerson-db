const { Table } = require('../../dist/lib/es5/index.js')
const { Database } = require('../../dist/lib/es5/index.js')

const database = new Database('postgres', '')
const users = new Table('users', database)

users.push([{ 'name': 'mategz' }, { 'email': 'gzoficial@gmail.com' }])

users
  .get(['name', 'email'], [{ 'name': 'mategz' }])
  .then((user) => console.log(user))

//users.get(['name'], []).then((user) => console.log(user))

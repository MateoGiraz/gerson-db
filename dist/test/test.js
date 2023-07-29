const { Table } = require('../../dist/lib/es5/index.js')
const { Database } = require('../../dist/lib/es5/index.js')

const postgresConString = 'postgresql://postgres:secret@localhost:5432/testDB'
const mysqlConString = 'mysql://root:secret@localhost:3306/testDB'

const database = new Database(postgresConString)

const users = new Table('users', ['name', 'email'], database)

users.push([
  ['name', 'frank'],
  ['email', 'frank@gmail.com'],
])

users.get([['name', 'frank']]).then((user) => console.log(user))

users.getById('1').then((users) => console.log(users))

users.getAll(['name']).then((users) => console.log(users))

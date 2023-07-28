const { Table } = require('../../dist/lib/es5/index.js')
const { Database } = require('../../dist/lib/es5/index.js')

const postgresConString = 'postgresql://postgres:secret@localhost:5432/testDB'
const mysqlConString = 'mysql://root:secret@localhost:3306/testDB'

const database = new Database(mysqlConString)

const users = new Table('users', ['name', 'email'], database)

//users.push([{ 'name': 'mategz' }, { 'email': 'gzoficial@gmail.com' }])

//users.get([{ 'name': 'mategz' }], ['email']).then((user) => console.log(user))

users.getAll(['name']).then((users) => console.log(users))

//users.get(['name'], []).then((user) => console.log(user))

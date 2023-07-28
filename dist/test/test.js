const { Table } = require('../../dist/lib/es5/index.js')
const { Database } = require('../../dist/lib/es5/index.js')

const database = new Database('postgres', '')
const users = new Table('users', ['name', 'email'], database)

//users.push([{ 'name': 'mategz' }, { 'email': 'gzoficial@gmail.com' }])

//users.get([{ 'name': 'mategz' }], ['email']).then((user) => console.log(user))

users.getAll(['name']).then((users) => console.log(users))

//users.get(['name'], []).then((user) => console.log(user))

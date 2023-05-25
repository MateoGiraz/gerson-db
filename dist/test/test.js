const { Table } = require('../../dist/lib/es5/index.js')

const Users = new Table('users')
const queryCols = ['name']

Users.push(['name'], ['bonington'])
Users.get(queryCols).then((user) => console.log(user))

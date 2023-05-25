const { Table } = require('../../dist/lib/es5/index.js')

const Users = new Table('users')

Users.push(['name'], ['bonington'])
Users.get(['name'], [{ 'name': 'bonington' }]).then((user) => console.log(user))

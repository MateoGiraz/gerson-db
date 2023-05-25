const { Table } = require('../../dist/lib/es5/index.js')

const Users = new Table('users')

//Users.push([{ 'name': 'mategz' }, { 'email': 'gzoficial@gmail.com' }])

//Users.get(['name', 'email'], [{ 'name': 'mategz' }]).then((user) =>
//  console.log(user),
//)

Users.get(['name'], []).then((user) => console.log(user))

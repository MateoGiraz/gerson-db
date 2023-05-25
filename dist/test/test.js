const { Table } = require('../../dist/lib/es5/index.js')

const Users = new Table('users')

//Users.push(['name', 'email'], ['bonington', 'bonington@gmail.com'])
Users.get(['name', 'email'], [{ 'name': 'bonington' }]).then((user) =>
  console.log(user),
)

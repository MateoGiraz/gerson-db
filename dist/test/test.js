const { Table, Database } = require('../../dist/lib/es5/index.js')

const postgresConString = 'postgresql://postgres:secret@localhost:5432/testDB'
const mysqlConString = 'mysql://root:secret@localhost:3306/testDB'

const database = new Database(postgresConString)

const Users = new Table('users', ['name', 'email'], database)

Users.push([
  ['name', 'frank'],
  ['email', 'frank@gmail.com'],
]).then((res) => console.log(res))

/*Users.get(
  [
    ['name', 'frank'],
    ['email', 'frank@gmail.com'],
  ],
  ['name', 'email'],
).then((user) => console.log(user))*/

//Users.getById('3').then((res) => console.log(res))

//Users.getAll().then((res) => console.log(res))

Users.updateById('4', [
  ['name', 'john'],
  ['email', 'aaa@gmail.com'],
]).then((res) => console.log(res))

Users.delete([['name', 'john']]).then((res) => console.log(res))

/*users
  .update(['name', 'frank'], ['email', 'frank@gmail.com'], [['id', '3']])
  .then((users) => console.log(users))*/

/*Users.updateById(1, [
  ['name', 'john'],
  ['email', 'frank@gmail.com'],
])*/

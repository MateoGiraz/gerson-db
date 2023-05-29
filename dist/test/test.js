const { Table } = require('../../dist/lib/es5/index.js')

const Users = new Table('users', ['name', 'email'])

Users.push([{ 'name': 'mategz' }, { 'email': 'gzoficial@gmail.com' }])

const fun = async () => {
  const filteredUser = await Users.get(
    [{ 'name': 'mategz' }],
    ['name', 'email'],
  )

  const user = await Users.get([{ 'id': 1 }])
  const users = await Users.getAll()
  console.log(filteredUser)
  console.log(user)
  console.log(users)
}

fun()

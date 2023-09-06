# gerson-db
## About the project:
Gerson db is a tool developed in Typescript used in [gerson-api](https://github.com/MateoGiraz/gerson-api).
Gerson helps you to push and query your database effortlessly.

## Features:
- Simple and fast inserting, finding, updating, deleting
- Support for Postgres and MySQL

## Getting started
To include this library in your project, install as show bellow
```
$ npm install gerson-orm
```
## Usage
Usage is free from ambiguity. All you need to get started is your connection string. Supported DB engines are postgres and mysql.
```js
const { Database } = require('gerson-orm')

const postgresConString = 'postgresql://postgres:secret@localhost:5432/testDB'

const database = new Database(postgresConString)
```
Specify models. For example, users table, with name and email fields, corresponding to postgres database.
```js
const { Table } = require('gerson-orm');

const Users = new Table('users', ['name', 'email'], database)
```
Simple insert queries, which recieve a list of key-value pairs to be pushed.
```js
Users.push([
  ['name', 'frank'],
  ['email', 'frank@gmail.com'],
])
```
Select all query
```js
const users = await Users.getAll()
```
Select by id query. User may be expected object or null by default. 
```js
const user = await Users.getById(2)
```
Applying where clauses. Get function recieves a list of pairs key-values to filter.
```js
const filteredUser = await Users.get([
  ['name', 'frank'],
  ['email', 'frank@gmail.com'],
])
```
When querying, there is a second optional parameter which limit fields to be selected. If not included, whole model is selected.
```js
const filteredUser = Users.get(
  [
    ['name', 'frank'],
    ['email', 'frank@gmail.com'],
  ],
  ['name', 'email'],
)
```
Updating recieves whole object with new values. Also expects as second parameter querying data.
```js
const updatedUser = await Users.update(
  [
    ['name', 'john'],
    ['email', 'frank@gmail.com'],
  ],
  [['name', 'frank']],
)
```
You might update by id as well.
```js
const updatedUser = Users.updateById(1, [
  ['name', 'john'],
  ['email', 'frank@gmail.com'],
])
```
Deletion recieves a list of key-value pair to find object to be deleted.
```js
await users.delete([['name', 'frank']])
```
Deletion by id is also possible
```js
await Users.deleteById(1)
```

### License:
[MIT](https://github.com/MateoGiraz/gerson-orm/blob/develop/LICENSE)

# gerson-orm
### About the project:
Gerson ORM is a tool developed in Typescript used in [gerson-api](https://github.com/MateoGiraz/gerson-api).
Gerson helps you to push and query your database effortlessly.
## Getting started
To include this library in your project, install as show bellow
```
$ npm install gerson-orm
```
## Usage
Usage is free from ambiguity. First, specify your database model
```js
const { Table } = require('gerson-orm');

const Users = new Table('users', ['name', 'email'])
```
Simple insert queries
```js
Users.push([{ 'name': 'mategz' }, { 'email': 'gzoficial@gmail.com' }])
```
Simple select queries
```js
const users = await Users.getAll()
```
Applying where clauses
```js
const filteredUser = await Users.get([{ 'name': 'mategz' }])
```
Specifying attributes for select queries
```js
const filteredUser = await Users.get(
  [{ 'name': 'mategz' }],
  ['name', 'email'],
)
```



### Features:
- Simple and fast inserting/querying
- Support for Postgres and MySQL

### License:
[MIT](https://github.com/MateoGiraz/gerson-orm/blob/develop/LICENSE)

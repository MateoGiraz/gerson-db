# gerson-orm

### About the project:

Gerson ORM is a tool developed in Typescript used in [gerson-api](https://github.com/MateoGiraz/gerson-api).

With simple syntax, Gerson helps you to push and query your database effortlessly.


```js
const { Table } = require('gerson-orm');

const Users = new Table('users');

Users.push([{ 'name': 'mategz' }, { 'email': 'gzoficial@gmail.com' }]);

Users.get(['name', 'email'], [{ 'name': 'mategz' }])
  .then((user) =>
    console.log(user)
  );
```


### Features:
- Simple and fast inserting/querying

### License:
[MIT](https://github.com/MateoGiraz/gerson-orm/blob/develop/LICENSE)

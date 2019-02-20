const mysql = require('knex');
const knex  = mysql({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'jobreference'
  },
 
});
module.exports = knex;
var bookshelf  = require('bookshelf')(knex );

bookshelf .plugin('registry');
module.exports = bookshelf;
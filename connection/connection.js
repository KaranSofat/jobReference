const mysql = require('knex');
const connection = mysql({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'jobreference'
  },
 
});

module.exports = connection;
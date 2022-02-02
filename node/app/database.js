var mysql = require('mysql');

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

var conn = mysql.createConnection(config); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;
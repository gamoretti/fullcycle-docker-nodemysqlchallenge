var db = require('./database');

class PeopleDataAccess {

  static createPeople() {
    var sql = 'CREATE TABLE IF NOT EXISTS people(id INT NOT NULL AUTO_INCREMENT,name CHAR(50) NOT NULL, PRIMARY KEY(id));'
    db.query(sql);
  }
  static findAll(callback) {
    var sql = 'SELECT * FROM people';
    db.query(sql, function (err, data, fields) {
      if (err) throw err;
      console.log(data)
      callback(data)
    });
  }

  static insert(name) {
    const sql = `INSERT INTO people(name) values('${name}')`
    db.query(sql)
  }
  static delete() {
    const sql = `DELETE FROM people`
    db.query(sql)
  }
}

module.exports = PeopleDataAccess;
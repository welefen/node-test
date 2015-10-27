var mysql = require('mysql');
var getConnection = function(dbName){
  var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : '127.0.0.1',
    user            : 'root',
    password        : 'root',
    database        : dbName
  });
  return pool;
}
var pool = getConnection('www.welefen.com');
pool.query('select * from thinkpress_cate', function(err, rows, fields){
  console.log(err, rows);
  var pool1 = getConnection('www.thinkjs.org');
  pool1.query('select * from think_user', function(err, rows, fields){
    console.log(err, rows)
  })
})

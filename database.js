var mysql = require('mysql');

var db = mysql.createConnection({
  host     : process.env.MYSQL_HOSTNAME,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : 'dog_shelter'
});

db.connect((error) => {
    if (error) {
        console.log('Problem with Database connection ' + error.message);
    }
    console.log('Database connected');
});
module.exports = db;
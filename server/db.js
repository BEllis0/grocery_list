
var mysql = require('mysql');

//auth login for db
module.exports.db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Skiclub0',
  database : 'grocery_list_2'
});

//export connection 
module.exports.db.connect(err => {
    err ? console.log(err) : console.log("DB Connected");
});


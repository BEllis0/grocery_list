
var mysql = require('mysql');

//auth login for db
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Skiclub0',
  database : 'grocery_list_2'
});

let dbConnection = connection.connect((err) => {
    err ? console.log(err) : console.log("DB Connected");
})

//export connection 
module.exports.db = dbConnection;


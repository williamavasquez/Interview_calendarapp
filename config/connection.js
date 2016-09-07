var mysql = require('mysql');


// Database connection details
var connection = mysql.createConnection({
    port:3306,
    host:'localhost',
    user:'root',
    password: '1123581321w',
    database: 'willinterview'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

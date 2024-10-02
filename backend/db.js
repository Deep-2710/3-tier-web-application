const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'your_database_host', // Database server IP
    user: 'your_user',           // Database username
    password: 'your_password',   // Database password
    database: 'your_database_name'
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

module.exports = connection;

const mysql2 = require('mysql2');

const pool = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "admin@123",
    database: "yashdb"
})

pool.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Connected to MySqlDB...2");
})


module.exports = { pool }
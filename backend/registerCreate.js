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
    console.log("Connected to MySqlDB...1");
})

const date=new Date();
const formattedDate = date.toISOString().slice(0, 10);
const signupData = (username, gmail, password, contact, state, city, address, pincode) => {

    pool.query(`insert into TEUsers(username,gmail,password,phoneNo,state,city,address,pincode,createdOn) values("${username}","${gmail}","${password}","${contact}","${state}","${city}","${address}","${pincode}","${formattedDate}")`, (err, result, fields) => {
        if (err) { console.log(err); }
        else { console.log(result); }
    })

}

module.exports = { signupData }
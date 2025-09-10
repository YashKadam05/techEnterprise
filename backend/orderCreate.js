const mysql2 = require('mysql2');

const pool3 = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "admin@123",
    database: "yashdb"
})

pool3.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Connected to MySqlDB...3");
})

const date=new Date();
const formattedDate = date.toISOString().slice(0, 10);
const placeOrder = (username,productName,productPrice,productReceiptNo,productInvoiceNo,state,city,address,pincode,phoneNo) => {

    pool3.query(`insert into TEOrders(username,productName,quantity,price,paymentMethod,receiptNo,invoiceNo,state,city,address,pincode,phoneNo,placedOn) values("${username}","${productName}","1","${productPrice}","Cash on delivery","${productReceiptNo}","${productInvoiceNo}","${state}","${city}","${address}","${pincode}","${phoneNo}","${formattedDate}")`, (err, result, fields) => {
        if (err) { console.log(err); }
        else { console.log(result); }
    })

    // username productName quantity price paymentMethod receiptNo invoiceNo state city address pincode phoneNo placedOn


}

module.exports = { placeOrder }
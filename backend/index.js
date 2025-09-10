const express = require('express');
const app = express();
const cors = require('cors');
const { signupData } = require("./registerCreate.js")
const { pool } = require("./registerSearch.js")
const { placeOrder } = require("./orderCreate.js")


const corsOption = {
    origin: ["http://localhost:5173"],
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOption));

app.post(("/api"), (req, res) => {
    const username = req.body[0];
    const gmail = req.body[1];
    const password = req.body[2];
    const contact = req.body[3];
    const state = req.body[4];
    const city = req.body[5];
    const address = req.body[6];
    const pincode = req.body[7];
    console.log(username + gmail + password + contact + state + city + address + pincode);
    signupData(username, gmail, password, contact, state, city, address, pincode);
})



let output="helloworld"
app.post(("/api2"),(req, res) => {
    if (req.body) {
        gmail = JSON.stringify(req.body[0]);
        password = JSON.stringify(req.body[1]);

        console.log("My credentials: " + gmail + password);
        pool.query(`select * from TEUsers where gmail=${gmail} and password=${password}`, (err, result, fields) => {
            if (err) {
                console.log(err);
            }
            console.log("the result is:");
            console.log(result);
            output=result;
        })
    }
    res.json(output);
})



let output2="helloworld2"
app.post(("/api4"),(req, res) => {

    if (req.body) {
        namee = JSON.stringify(req.body[0]);

        console.log(namee);
        pool.query(`select * from TEOrders where username=${namee}`, (err, result, fields) => {
            if (err) {
                console.log(err);
            }
            console.log("the orders are:");
            console.log(result);
            output2=result;
        })
    }
    res.json(output2);
})



app.post(("/api3"), (req, res) => {
    let username =req.body[0];
    let productName =req.body[1];
    let productPrice =req.body[2];
    let productReceiptNo =req.body[3];
    let productInvoiceNo =req.body[4];
    let state =req.body[5];
    let city =req.body[6];
    let address =req.body[7];
    let pincode =req.body[8];
    let phoneNo =req.body[9];
    console.log(username,productName,productPrice,productReceiptNo,productInvoiceNo,state,city,address,pincode,phoneNo);
    placeOrder(username,productName,productPrice,productReceiptNo,productInvoiceNo,state,city,address,pincode,phoneNo)
})


app.listen(8080, () => {
    console.log("Server running on 8080")
})
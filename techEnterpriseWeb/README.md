TechEnterprise is an ECommerse Application specially for Tech Products we all Love.

Front End: ReactJs+Vite  >npm run dev
Back End: ExpressJs >nodemon index.js
Connection: Axios & Cors
Database: MySQL

[Make sure to add your own database name, username and password in the code
can use MySQL workbench to create 2 tables in your database]

create table TEUsers(
username varchar(50),
gmail varchar(50),
password varchar(50),
phoneNo varchar(50),
state varchar(50),
city varchar(50),
address varchar(500),
pincode varchar(50),
createdOn date
)
create table TEOrders(
username varchar(50),
productName varchar(50),
quantity varchar(50),
price varchar(50),
paymentMethod varchar(50),
receiptNo varchar(50),
invoiceNo varchar(50),
state varchar(50),
city varchar(50),
address varchar(500),
pincode varchar(50),
phoneNo varchar(50),
placedOn date
)



Developer : Yash Kadam
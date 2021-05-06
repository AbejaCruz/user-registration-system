const express = require('express');
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs_login'
});

db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Mysql Connected...")
    }
});
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
});

app.listen(3000, () => {
    console.log("server started on Port 3000");
})
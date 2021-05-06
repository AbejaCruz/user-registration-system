const express = require('express')
const app = express()
const mysql = require('mysql');
const dotenv = require('dotenv');
const path = require('path');


dotenv.config({path:'../.env'});
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

const publicDirectoy = path.join(__dirname,'../public');
app.use(express.static(publicDirectoy));
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs')

db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Mysql Connected...")
    }
});


app.get("/", (req, res) => {
    res.render('index')
});

app.listen(3000, () => {
    console.log("server started on Port 3000");
})
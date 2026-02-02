const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user:  'root',
    password: '',
    database: 'angular_db'
});


app.post('/users',(req,res) =>{
    const {imie,nazwisko,wiek} = req.body;
    db.query(
        'INSERT INTO users (imie,nazwisko,wiek) VALUE(?,?,?)',
        [imie,nazwisko,wiek],
        (err)=>{
            if(err) return res.status(500).json(err);
            res.json({success: true})
        }
        )
});

app.listen(3000);


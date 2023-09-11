const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const PORT = 8080;
const app = express();

const db = mysql.createPool({
    user : "root",
    host : "localhost",
    password : "santhosh$12345",
    database : "crud"
})

app.use(cors());
app.use(express.json());


app.post('/create' , (req , res) => {
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;

    db.query('INSERT INTO users_table (name , age , email) VALUES (? , ? , ?)',[name , age , email] , (err , result) => {
        if(err) {
            console.log(err);
        } else {
            res.send("Values Inserted");
        }
    })
})

app.get('/show' , (req , res) => {
    db.query('SELECT * FROM users_table' , (err , result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.put('/update/:id' , (req , res) => {
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const id = req.params.id;

    db.query('UPDATE users_table SET name = ? , age = ? , email = ? WHERE id = ?' , [name , age , email , id] , (err , result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
    
})

app.delete('/delete/:id' , (req , res) => {
    const id = req.params.id;
    db.query('DELETE FROM users_table WHERE id = ?', id ,(err , result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.listen(PORT , () => {
    console.log(`http://localhost:${PORT}`);
})
const express = require('express');
const next = require('next');
const mysql = require('mysql');
const config = require('../config')
const user = require('../models/user')



const PORT = process.env.PORT || 5656;
const dev = process.env.NODE_ENV !== 'production';
const app = next({
    dev
});
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get('/getAllUser', (req, res) => {
            user.user(req, function (err, results, fields) {
                res.json(results);
            });
        });

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(PORT, (err) => {
            if (err) throw err;
            console.log(`> Ready on ${PORT}`);
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });


const connection = mysql.createConnection(config.db);

connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    let createUser = `create table if not exists user(
                            id int primary key auto_increment,
                            name varchar(255)not null,
                            email varchar(255)not null,
                            height varchar(255)not null,
                            weight varchar(255)not null,
                            skill varchar(255)not null
                        )`;

    connection.query(createUser, function (err, results, fields) {
        console.log('create table done')
        if (err) {
            console.log(err.message);
        }
    });

    connection.end(function (err) {
        if (err) {
            return console.log(err.message);
        }
    });
});

connection.query('INSERT into user(name,email,height,weight,skill)values("胖仔","dora80823@gmail.com","160","56","eat")', function (err, rows, fields) {
    if (err) throw err;
    console.log('INSERT done');
});

// connection.query('select * from user', function (err, rows, fields) {
//     if (err) throw err;
//     console.log('The solution is: ', rows);
// });
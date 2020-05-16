const mysql = require('mysql');
const conf = require('../config');

const connection = mysql.createConnection(conf.db);

module.exports = {
    user: function (req, callback) {
        sql = 'SELECT * FROM user';
        return connection.query(sql, callback);
    },
}
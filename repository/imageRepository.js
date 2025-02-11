const imageModel = require('../model/imageModel');

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_node_com_mysql',
    port: 3306,
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no banco de dados:', err.stack);
        return;
    }
    console.log('Conectado ao banco de dados das imagens!');
});

module.exports = connection;
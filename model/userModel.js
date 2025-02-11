const db = require('../repository/userRepository');  

function criarUsuario(id, nome, data_criacao) {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO tb_usuario (id, nome, data_criacao) VALUES (?, ?, ?)', [id, nome, data_criacao], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

function removerUsuario(id) {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM tb_usuario WHERE id = ?', [id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM tb_usuario WHERE id = ?', [id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

function editarUsuario(id, nome, data_criacao) {
    return new Promise((resolve, reject) => {
        db.query('UPDATE tb_usuario SET nome = ?, data_criacao = ? WHERE id = ?', [nome, data_criacao, id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    criarUsuario,
    removerUsuario,
    buscarUsuario,
    editarUsuario
};

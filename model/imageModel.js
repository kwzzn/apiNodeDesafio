const db = require('../repository/imageRepository');  

function criarImagem(id, referencia, data_criacao, titulo) {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO tb_imagem (id, referencia, data_criacao, titulo) VALUES (?, ?, ?, ?)', [id, referencia, data_criacao, titulo], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

function removerImagem(id) {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM tb_imagem WHERE id = ?', [id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

function buscarImagem(id) {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM tb_imagem WHERE id = ?', [id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

function editarImagem(id, referencia, data_criacao, titulo) {
    return new Promise((resolve, reject) => {
        db.query('UPDATE tb_imagem SET titulo = ?, referencia = ?, data_criacao = ?, WHERE id = ?', [id, referencia, data_criacao, titulo], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    criarImagem,
    removerImagem,
    buscarImagem,
    editarImagem
};

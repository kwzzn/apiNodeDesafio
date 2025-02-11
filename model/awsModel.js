const db = require('../repository/imageRepository')

function buscarImagem(id) {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM tb_imagem WHERE id = ?', [id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    buscarImagem
}
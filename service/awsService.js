const awsModel = require('../model/imageModel');

async function buscarImagem(id) {
    try {
        const result = await awsModel.buscarImagem(id);
        return result;
    } catch (err) {
        throw new Error("Erro ao buscar Imagem: " + err.message);
    }
}

module.exports = {
    buscarImagem
}
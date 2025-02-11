const imageModel = require('../model/imageModel');

async function criarImagem(id, referencia, data_criacao, titulo) {
    try {
        const result = await imageModel.criarImagem(id, referencia, data_criacao, titulo);
        return result;
    } catch (err) {
        throw new Error("Erro ao criar imagem: " + err.message);
    }
}

async function removerImagem(id) {
    try {
        const result = await imageModel.removerImagem(id);
        return result;
    } catch (err) {
        throw new Error("Erro ao remover Imagem: " + err.message);
    }
}

async function buscarImagem(id) {
    try {
        const result = await imageModel.buscarImagem(id);
        return result;
    } catch (err) {
        throw new Error("Erro ao buscar Imagem: " + err.message);
    }
}

async function editarImagem(id, referencia, data_criacao, titulo) {
    try {
        const result = await imageModel.editarImagem(id, referencia, data_criacao, titulo);
        return result;
    } catch (err) {
        throw new Error("Erro ao editar Imagem: " + err.message);
    }
}

module.exports = {
    criarImagem,
    removerImagem,
    buscarImagem,
    editarImagem
};

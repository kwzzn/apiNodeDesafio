const usuarioModel = require('../model/userModel');

async function criarUsuario(id, nome, data_criacao) {
    try {
        const result = await usuarioModel.criarUsuario(id, nome, data_criacao);
        return result;
    } catch (err) {
        throw new Error("Erro ao criar usuário: " + err.message);
    }
}

async function removerUsuario(id) {
    try {
        const result = await usuarioModel.removerUsuario(id);
        return result;
    } catch (err) {
        throw new Error("Erro ao remover usuário: " + err.message);
    }
}

async function buscarUsuario(id) {
    try {
        const result = await usuarioModel.buscarUsuario(id);
        return result;
    } catch (err) {
        throw new Error("Erro ao buscar usuário: " + err.message);
    }
}

async function editarUsuario(id, nome, data_criacao) {
    try {
        const result = await usuarioModel.editarUsuario(id, nome, data_criacao);
        return result;
    } catch (err) {
        throw new Error("Erro ao editar usuário: " + err.message);
    }
}

module.exports = {
    criarUsuario,
    removerUsuario,
    buscarUsuario,
    editarUsuario
};

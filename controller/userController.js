const usuarioService = require('../service/userService');

async function criarUsuario(req, res) {
    try {
        const result = await usuarioService.criarUsuario(req.body.id, req.body.nome, req.body.data_criacao);
        res.status(201).json({ message: "Usuário criado com sucesso", result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function removerUsuario(req, res) {
    try {
        const result = await usuarioService.removerUsuario(req.body.id);
        res.status(200).json({ message: "Usuário removido com sucesso", result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function buscarUsuario(req, res) {
    try {
        const result = await usuarioService.buscarUsuario(req.query.id);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function editarUsuario(req, res) {
    try {
        const result = await usuarioService.editarUsuario(req.body.id, req.body.nome, req.body.data_criacao);
        res.status(200).json({ message: "Usuário editado com sucesso", result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    criarUsuario,
    removerUsuario,
    buscarUsuario,
    editarUsuario
};

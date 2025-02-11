const imageService = require('../service/imageService');

async function criarImagem(req, res) {
    try {
        const result = await imageService.criarImagem(req.body.id, req.body.titulo, req.body.data_criacao, req.body.referencia); 
        res.status(201).json({ message: "Imagem criado com sucesso", result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function removerImagem(req, res) {
    try {
        const result = await imageService.removerImagem(req.body.id);
        res.status(200).json({ message: "Imagem removido com sucesso", result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function buscarImagem(req, res) {
    try {
        const result = await imageService.buscarImagem(req.query.id);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function editarImagem(req, res) {
    try {
        const result = await imageService.editarImagem(req.body.id, req.body.titulo, req.body.data_criacao, req.body.referencia);
        res.status(200).json({ message: "Imagem editado com sucesso", result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    criarImagem,
    removerImagem,
    buscarImagem,
    editarImagem
};

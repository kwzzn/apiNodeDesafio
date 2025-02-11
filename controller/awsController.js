const awsService = require("../service/awsService");

async function buscarImagem(req, res) {
    try {
        const result = await awsService.buscarImagem(req.query.id);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    buscarImagem
}
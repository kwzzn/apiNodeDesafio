const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/userController');
const imageController = require('../controller/imagemController');

router.post('/criar-imagem', imageController.criarImagem);
router.delete('/remover-imagem', imageController.removerImagem);
router.get('/buscar-imagem', imageController.buscarImagem);
router.put('/editar-imagem', imageController.editarImagem);


router.post('/criar-usuario', usuarioController.criarUsuario);
router.delete('/remover-usuario', usuarioController.removerUsuario);
router.get('/buscar-usuario', usuarioController.buscarUsuario);
router.put('/editar-usuario', usuarioController.editarUsuario);

module.exports = router;

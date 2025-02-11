const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/userController');
const imageController = require('../controller/imagemController');
const awsController = require('../controller/awsController');

router.post('/criar-imagem', imageController.criarImagem);
router.delete('/remover-imagem', imageController.removerImagem);
router.get('/buscar-imagem', imageController.buscarImagem);
router.put('/editar-imagem', imageController.editarImagem);


router.post('/criar-usuario', usuarioController.criarUsuario);
router.delete('/remover-usuario', usuarioController.removerUsuario);
router.get('/buscar-usuario', usuarioController.buscarUsuario);
router.put('/editar-usuario', usuarioController.editarUsuario);

router.get('/buscar-imagem-aws', awsController.buscarImagem);

module.exports = router;

//Requiero express y ejecuto la propiedad Router()
const express = require('express');
const router = express.Router();

//requiero el controlador de main
const usersController = require('../controllers/usersController');

//Asigno a cada ruta la propiedad del controlador
router.get('/login', usersController.login);
router.get('/registro', usersController.register);

module.exports = router;

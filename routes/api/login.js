const express = require('express');

const loginRouter = express.Router();

loginRouter.get('/', (req, res) => console.log('Saludos desde la ruta de login'));

module.exports = loginRouter;
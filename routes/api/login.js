const express = require('express');

// eslint-disable-next-line new-cap
const loginRouter = express.Router();

loginRouter.get('/', (req, res) =>
  console.log('Saludos desde la ruta de login')
);

module.exports = loginRouter;

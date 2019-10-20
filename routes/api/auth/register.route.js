'use strict';

const express = require('express');

// eslint-disable-next-line new-cap
const registerRouter = express.Router();

registerRouter.get('/', (req, res) =>
  res.render('auth/register')
);

registerRouter.post('/', (req, res) =>
  res.json({ message: 'Usuario creado' })
);

module.exports = registerRouter;


'use strict';

const express = require('express');

// eslint-disable-next-line new-cap
const loginRouter = express.Router();

loginRouter.get('/', (req, res) =>
  res.render('auth/login')
);

module.exports = loginRouter;

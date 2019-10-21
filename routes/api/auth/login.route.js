'use strict';

const express = require('express');

const loginController = require('../../../controllers/auth/login.controller');

// eslint-disable-next-line new-cap
const loginRouter = express.Router();

loginRouter.get('/', (req, res) =>
  res.render('auth/login')
);

loginRouter.post('/', loginController.authUser);

module.exports = loginRouter;

'use strict';

const express = require('express');

const registerController = require('../../../controllers/auth/register.controller');

// eslint-disable-next-line new-cap
const registerRouter = express.Router();

registerRouter.get('/', registerController.manageRegisterView);

registerRouter.post('/', registerController.registerNewUser);

module.exports = registerRouter;


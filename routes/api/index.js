const express = require('express');

// eslint-disable-next-line new-cap
const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.render('home'));

module.exports = indexRouter;

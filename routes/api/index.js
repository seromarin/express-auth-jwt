const express = require('express');

// eslint-disable-next-line new-cap
const indexRouter = express.Router();

indexRouter.get('/', (req, res) => console.log('Respondiendo desde el index'));

module.exports = indexRouter;

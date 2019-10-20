const express = require('express');

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => console.log('Respondiendo desde el index'))

module.exports = indexRouter;
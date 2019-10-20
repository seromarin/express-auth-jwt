'use strict';

const express = require('express');

const indexRouter = require(__dirname + '/routes/api');
const loginRouter = require(__dirname + '/routes/api/login')

const app = express();

app.use('/', indexRouter);
app.use('/login', loginRouter);

const PORT = 3000;

app.listen(PORT, console.log(`Listening on port: ${PORT}`));
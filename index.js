'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const indexRouter = require(path.join(__dirname, 'routes/api'));
const loginRouter = require(path.join(__dirname, '/routes/api/auth/login.route'));
const registerRouter = require(path.join(__dirname, '/routes/api/auth/register.route'));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static(path.join(__dirname, 'public')));

// Global variables
app.locals.title = 'Express JWT';

// View engine
app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'pug');

// Routes
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

const PORT = 3000;

app.listen(PORT, console.log(`Listening on port: ${PORT}`));

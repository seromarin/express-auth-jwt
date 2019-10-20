'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const hbs = require('hbs');

const indexRouter = require(path.join(__dirname, 'routes/api'));
const loginRouter = require(path.join(__dirname, '/routes/api/login'));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static(path.join(__dirname, 'public')));

// Global variables
app.locals.title = 'Express JWT';

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, 'views/partials'));

// Routes
app.use('/', indexRouter);
app.use('/login', loginRouter);

const PORT = 3000;

app.listen(PORT, console.log(`Listening on port: ${PORT}`));

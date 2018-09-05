const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const axios = require('axios');

const database = require('database.js');
const TelegramService = require('TelegramService')(app);

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('express', express);
app.set('axios', axios);
app.set('database', database);
app.set('TelegramService', TelegramService);
app.set('telegramToken', process.env.TELEGRAM_TOKEN);

app.use('/', indexRouter(app));

module.exports = app;

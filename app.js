const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const axios = require('axios');

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('express', express);
app.set('axios', axios);
// app.set('database', require('./services/database.js'));
app.set('telegramToken', process.env.TELEGRAM_TOKEN);
app.set('TelegramService', require('./services/TelegramService.js')(app));

app.use('/', indexRouter(app));

module.exports = app;

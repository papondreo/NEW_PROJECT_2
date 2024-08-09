// Фреймворк веб-приложений.
const express = require('express');
// Логгирование деталей запросов.
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

// const authRouter = require('./routes/authRouter');
// const tokensRouter = require('./routes/tokens.router');
// const chanelRouter = require('./routes/chanelRouter');
// const subRouter = require('./routes/subRouter');
const bookRouter = require('./routes/bookRouter');
const tokensRouter = require('./routes/tokens.router');
const authRouter = require('./routes/authRouter');
const likeRouter = require('./routes/likeRoutes')

// Импорт маршрутов.


const app = express();

// Подключаем логгирование запросов
app.use(morgan('dev'));
app.use(cookieParser());

// Обработка POST запросов.
// urlencoded.
app.use(express.urlencoded({extended: true}))
// json.
app.use(express.json());

// Подключаем импортированные роутеры с определnpmенным url префиксом.
// app.use('/api/chanels', chanelRouter);
app.use('/api/tokens', tokensRouter);
app.use('/api/auth', authRouter);
// app.use('/api/subscribe', subRouter);
app.use('/api/books', bookRouter);
app.use('/api', likeRouter);  // Добавляем маршрутизатор лайков, можно заменить '/api' на любой префикс

module.exports = app;
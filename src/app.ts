import express = require('express');
import path = require('path');

const app: express.Application = express();


// Порт на котором запущен сервер
const port: number = Number(process.env.port) || 3000;

// Прописываем кросс-доменные заголовки
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// Добовляем директорию для статики
app.use(express.static('./public'));

// Пример выдачи статики
app.get('/example', function (req, res) {
    res.sendFile(path.resolve('./public/html' + '/example.html'));
});
// Пример выдачи json
app.get('/', function (req, res) {
    res.send({status: 'ok'})
});
// Запускаем сам сервер
app.listen(port, function () {
    console.log(`Server started on port ${port}!`);
});
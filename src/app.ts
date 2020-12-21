import express = require('express');
const app: express.Application = express();


const port: number = Number(process.env.port) || 3000;


app.get('/', function (req, res) {
    res.send({
        name: "nik"
    });
});


app.listen(port, function () {
    console.log(`Server started on port ${port}!`);
});
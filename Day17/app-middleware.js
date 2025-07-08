const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(new Date() , req.url , req.method);
    next();
});

app.get('/', (req, res) => {
    res.json({
        isSuccess: true,
        message: "Server is running",
        data : {}
    });
});

app.get('/hello', (req, res) => {
    res.json({
        isSuccess: true,
        message: "Hello World",
        data : {}
    });
});


app.use((req, res, next) => {
    console.log("Middleware for 404");
    res.json({
        isSuccess: false,
        message: "Route not found",
        data : {}
    });
    next();
});

app.listen(2900, () => {
    console.log("------------- Server is running --------------");
});
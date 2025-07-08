const express = require('express');
const dotenv = require('dotenv');
const { apiRouter } = require('./api/v1/routes');

dotenv.config();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(new Date() , req.url , req.method);
    next();
});

app.use("/api/v1", apiRouter)


app.listen(2900, () => {
    console.log("------------- Server is running --------------");
});
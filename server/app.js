const express = require('express');
const app = express();
const homeRouter = require('./src/routes/HomeRoute');
const QuestionRoute = require('./src/routes/QuestionRoute')

require('dotenv').config();
const cors = require('cors');
const corsOptions ={
    origin:process.env.ALLOW_ACCESS_TO_URL, 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());
require('./src/Database/DbConnection');

// routers

app.use('/', homeRouter);
app.use('/questions', QuestionRoute);

app.use(cors(corsOptions));
app.use(express.json());


module.exports = app;
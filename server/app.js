const express = require('express');
const app = express();
const homeRouter = require('./src/routes/HomeRoute');

require('dotenv').config();
const cors = require('cors');
const corsOptions ={
    origin:process.env.ALLOW_ACCESS_TO_URL, 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
require('./src/Database/DbConnection');

// routers
app.use('/', homeRouter);

app.use(cors(corsOptions));
app.use(express.json());


module.exports = app;
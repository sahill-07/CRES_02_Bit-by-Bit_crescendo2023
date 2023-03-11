const app = require('./app');
require('dotenv').config();

app.listen(8000, ()=>{
    console.log(`App listening at http://localhost:${process.env.PORT}`);
})

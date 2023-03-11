const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongo = async ()=>{
    // await mongoose.connect('mongodb://127.0.0.1:27017/CoderBuddy');
    const uri = process.env.MONGO_DB_URL;
    await mongoose.connect(uri);
    console.log('mongoose connected1');
}

connectToMongo().catch(err => console.log(err));


module.exports = connectToMongo;

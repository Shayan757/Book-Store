const mongoose = require('mongoose');
const mongooseUrl = "mongodb://0.0.0.0:27017/book-store"

const ConnectToMongo = async()=>{

    await mongoose.connect(mongooseUrl)

    console.log("Connected To Mongo Successfully ");



} 


module.exports = ConnectToMongo;

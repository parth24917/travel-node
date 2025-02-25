const mongoose = require('mongoose');

require('dotenv').config();


const MONGO_URL = process.env.MONGODB_URL;
const DB_NAME = process.env.DB_NAME;

const dbconnect = 
    async(req,res) =>
    {
        try{
            await mongoose.connect(MONGO_URL, {dbName : DB_NAME})
                console.log("Connected to databse");

            }
catch(err)
 {
    console.log('Error connecting to database' + err);

}
};

module.exports = dbconnect
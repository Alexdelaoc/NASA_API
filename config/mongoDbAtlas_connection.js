// Requerir las dependencias para la conexión
require("dotenv").config();
const mongoose = require('mongoose');

const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('You are now connected to MongoDB Atlas...');
    } catch (error) {
        console.log(`Unable to connect to the MongoDB database: ${error}`);
    }
}

module.exports = connectMongoDb;
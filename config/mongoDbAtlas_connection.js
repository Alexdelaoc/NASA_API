// Requerir las dependencias para la conexión
require("dotenv").config();
const mongoose = require('mongoose');

const configParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const uri = process.env.MONGODB_URI

mongoose.connect(uri, configParams)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log('You are now connected to MongoDB Atlas...');
});

module.exports = mongoose;
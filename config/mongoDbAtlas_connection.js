// Requerir las dependencias para la conexión
require("dotenv").config();
const mongoose = require('mongoose');

const username = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;
const cluster = process.env.MONGODB_CLUSTER;
const dbname = process.env.MONGODB_DBNAME;

const uri = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;

const configParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl:true,
    sslValidate:false,
}

mongoose.connect(uri, configParams)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log('You are now connected to MongoDB Atlas...');
});

module.exports = mongoose;
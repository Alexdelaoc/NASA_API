// Requerir el dotenv
require("dotenv").config();

// Requerir la función que inicia la conexión con la base de datos de MongoDB Atlas:
const connectMongoDb = require('./config/mongoDbAtlas_connection');

// Puerto a usar por la página:
const port = process.env.PORT;

// Express:
const express = require('express')
const app = express();

// Enrutador:
const router = require('./routes/routes')

// Usos para la aplicación:
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

// Ruta raíz de la API:
app.use('/api', router);

// Función para probar la conexión a la base de datos antes de iniciar el servidor:
const init = async () => {
    try {
        await connectMongoDb();
        app.listen(port, () => {
            console.log(`App listening on port ${port}...`);
        })
    }
    catch (error) {
        console.log(error);
    }
}

init()
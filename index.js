// Requerir el dotenv
require("dotenv").config();

// Requerir la bbdd la función que inicia la conexión con la base de datos de MongoDB Atlas:
require('./config/mongoDbAtlas_connection');

// Puerto a usar por la página:
const port = process.env.PORT || 3000;

// Express:
const express = require('express')
const app = express();

// Enrutador:
const router = require('./routes/routes')

// Usos para la aplicación:
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

// Ruta raíz de la API:
app.use('/', router);

// Función para probar la conexión a la base de datos antes de iniciar el servidor:
const server = app.listen(port, () => { console.log(`App listening on port ${port}`) })

module.exports = server
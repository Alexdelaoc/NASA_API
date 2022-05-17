// Requerir el dotenv
require("dotenv").config();

// Requerir la bbdd la función que inicia la conexión con la base de datos de MongoDB Atlas:
require('./config/mongoDbAtlas_connection');

// Puerto a usar por la página:
const port = process.env.PORT || 5000;

// Express:
const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors({origin: 'http://localhost:3000'}))

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Enrutador:
const router = require('./routes/routes')

// Usos para la aplicación:
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

// Ruta raíz de la API:
app.use('/', router);

// Función para probar la conexión a la base de datos antes de iniciar el servidor:
app.listen(port, () => { console.log(`App listening on port ${port}`) })
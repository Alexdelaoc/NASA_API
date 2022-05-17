// Requerir el dotenv
require("dotenv").config();

// Requerir la bbdd la función que inicia la conexión con la base de datos de MongoDB Atlas:
require('./config/mongoDbAtlas_connection');

// Puerto a usar por la página:
const port = process.env.PORT || 5000;

// Express:
const express = require('express');
const path = require('path');
const app = express();

const cors = require('cors');
app.use(cors());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// Enrutador:
const router = require('./routes/routes');

// Usos para la aplicación:
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

// Ruta raíz de la API:
app.use('/api', router);

// Función para probar la conexión a la base de datos antes de iniciar el servidor:
app.listen(port, () => { console.log(`App listening on port ${port}`) });
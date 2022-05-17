const express = require('express');
const router = express.Router();
const landings = require('../controllers/landings');
const neas = require('../controllers/neas');

/* router.get('/', (req, res) => {
    res.json({ msg: "Welcome to the Nasa API !!"})
}) */

// Rutas para los Landings
router.get('/astronomy/landings/', landings.getAllLandings);
/* router.get('/api/astronomy/landings?minimum_mass', landings.getLandingsByMinimumMass); // No funciona. */
router.get('/astronomy/landings/name/:name', landings.getLandingsByName);
router.get('/astronomy/landings/mass/:mass', landings.getLandingsByMass);
router.get('/astronomy/landings/class/:class', landings.getLandingsByClass);
/* router.get('/api/astronomy/landings?from&to',); // No funciona. */
router.post('/astronomy/landings/create', landings.createLanding);
router.put('/astronomy/landings/edit', landings.editLanding);
router.delete('/astronomy/landings/delete', landings.deleteLanding);

// Ruta para los NEAs
router.get('/astronomy/neas/', neas.getAllNeas);
router.post('/astronomy/neas/create', neas.createNea);
router.put('/astronomy/neas/edit/', neas.editNea);
router.delete('/astronomy/neas/delete', neas.deleteNea);

module.exports = router;
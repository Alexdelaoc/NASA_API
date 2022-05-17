const express = require('express');
const router = express.Router();
const landings = require('../controllers/landings');
const neas = require('../controllers/neas');

router.get('/', (req, res) => {
    res.json({ msg: "Welcome to the Nasa API !!"})
})

// Rutas para los Landings
router.get('/api/astronomy/landings', landings.getAllLandings);
/* router.get('/api/astronomy/landings?minimum_mass', landings.getLandingsByMinimumMass); // No funciona. */
router.get('/api/astronomy/landings/name/:name', landings.getLandingsByName);
router.get('/api/astronomy/landings/mass/:mass', landings.getLandingsByMass);
router.get('/api/astronomy/landings/class/:class', landings.getLandingsByClass);
/* router.get('/api/astronomy/landings?from&to',); // No funciona. */
router.post('/api/astronomy/landings/create', landings.createLanding);
router.put('/api/astronomy/landings/edit', landings.editLanding);
router.delete('/api/astronomy/landings/delete', landings.deleteLanding);

// Ruta para los NEAs
router.get('/api/astronomy/neas', neas.getAllNeas);
router.post('/api/astronomy/neas/create', neas.createNea);
router.put('/api/astronomy/neas/edit/', neas.editNea);
router.delete('/api/astronomy/neas/delete', neas.deleteNea);

module.exports = router;
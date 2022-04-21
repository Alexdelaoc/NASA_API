const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

router.get('/', (req, res) => {
    res.json({ msg: "Welcome to the Nasa API !!"})
})

// Rutas para los Landings
router.get('/astronomy/landings?minimum_mass', controllers.getLandingsByMinimumMass); // No funciona.
router.get('/astronomy/landings/mass/:mass', controllers.getLandingsByMass);
router.get('/astronomy/landings/class/:class', controllers.getLandingsByClass);
router.get('/astronomy/landings?from&to',); // No sé cómo hacerlo
router.post('/astronomy/landings/create', controllers.createLanding); // No funciona.
router.put('/astronomy/landings/edit', controllers.editLanding);  // No funciona.
router.delete('/astronomy/landings/delete', controllers.deleteLanding);  // No funciona.

// Ruta para los NEAs
router.get('/astronomy/neas?',)

module.exports = router;
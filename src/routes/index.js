// This file sets up the application routes, linking URLs to the appropriate controller functions.

const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

// Define routes
router.get('/', controller.home);
router.get('/institutions', controller.getInstitutions);
router.post('/institutions', controller.createInstitution);
router.put('/institutions/:id', controller.updateInstitution);
router.delete('/institutions/:id', controller.deleteInstitution);

module.exports = router;
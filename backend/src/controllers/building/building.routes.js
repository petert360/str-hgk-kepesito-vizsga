/**
 * @Todo két végpont implementálása egy put és get metódusra
 *
 */
const express = require('express');
const router = express.Router();
const controller = require('./building.controller');

// getAllBuildingWithClassrooms
router.get('/', (req, res, next) => {
  return controller.getAllBuildingWithClassrooms(req, res, next);
});

// update
router.put('/:id', (req, res, next) => {
  return controller.updateBuilding(req, res, next);
});
router.patch('/:id', (req, res, next) => {
  return controller.updateBuilding(req, res, next);
});

module.exports = router;

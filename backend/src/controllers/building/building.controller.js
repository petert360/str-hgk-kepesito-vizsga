/**
 * @TODO : controller elkészítése, mely kapcsolódik a megfelelő service osztályhoz
 *
 * Kezelje a http-error üzeneteket:
 * - hiányos értékek @update műveletkor: BadREquest => 'Missing field'
 * - ha valamiért nem tudta a server frissíteni a building entitást:
 *  InternalServerError => 'Could not updated building'
 *
 * A szerver a megfelelő válaszokat küldje el a kliens felé
 */

const httpError = require('http-errors');

const Model = require('../../models/building.model');
const service = require('./building.service');

//exports.updateBuilding = (req, res, next) => {};

exports.updateBuilding = (req, res, next) => {
  const validationErrors = new Model(req.body).validateSync();
  if (validationErrors) {
    //return next(new createError.BadRequest(validationErrors));
    return next(new createError.BadRequest('Missing field'));
  }

  return service
    .update(req.params.id, req.body)
    .then(entity => {
      res.json(entity);
    })
    .catch(err => {
      next(new createError.InternalServerError(err.message));
    });
};

//exports.getAllBuildingWithClassrooms = () => {};

exports.getAllBuildingWithClassrooms = (req, res, next) => {
  return service.getAll().then(entity => {
    res.json(entity);
  });
};

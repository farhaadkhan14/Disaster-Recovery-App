var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const {mongoDBuri} = require('../config.json')

const { establishConnection } = require('../database')
const { retrieve, update, insert } = require('../dbutils')

const uri = mongoDBuri;
const connection = establishConnection(uri);

router.post('/update',[
  check('id').isString(),
  check('zipcode').isNumeric(),
  check('lat').isDecimal(),
  check('lon').isDecimal(),
  check('status').isString(),
], function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  console.log(req)
  update(connection,'person',req.query.id,{
    zipcode: req.query.zipcode,
    lat: req.query.lat,
    lon: req.query.lon,
    status: req.query.status
  }).then((data) => res.send(data))

})

module.exports = router

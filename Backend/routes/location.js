var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const {mongoDBuri} = require('../config.json');
const { establishConnection } = require('../database');
const { ObjectID } = require('mongodb');
const {update, retrieve, insert} = require('../dbutils');

const uri = mongoDBuri;
const connection = establishConnection(uri);


router.post('/update', [
  check('id').isString(),
  check('name').isString(),
  check('desc').isString(),
  check('zipcode').isNumeric(),
  check('lat').isDecimal(),
  check('lon').isDecimal()
], function(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  console.log(req)
  update(connection,'location',req.body.id,{
    name: req.body.name,
    zipcode: req.body.zipcode,
    lat: req.body.lat,
    lon: req.body.lon,
    desc: req.body.desc
  }).then((data) => res.send(data))

})


router.post('/insert',[], function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  console.log(req)
  insert(connection,'location',req.body).then((data) => res.send(data))

})

router.post('/retrieve',[], function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  console.log(req)
  retrieve(connection,'location',{_id: ObjectID(req.body.id)}).then((data) => res.send(data))

})


module.exports = router;

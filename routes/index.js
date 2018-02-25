var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log("GET GOT!")
  // return knex.select().from('person')
  return knex('person').where({'role': 'actor'})
    .then(function(actors){
      res.send(actors)
    })
})

module.exports = router;

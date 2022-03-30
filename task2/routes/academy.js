var express = require('express');
var router = express.Router();
const controller = require('../controllers/academy'); 
const response = require('../lib/response_handler')

require('dotenv').config();




router.get('/', controller.getAllAcademy)
      .get('/:id', controller.getIDAcademy)
      .post('/', controller.create)
      .patch('/:id', controller.patch)
      .delete('/:id', controller.delete)
      

module.exports = router;

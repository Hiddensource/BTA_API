const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');
const busController = require('../controller/bus-controller');

//controller for admin panel
router.get('/busAggregatorDetails',controller.getData);
router.post('/busAggregatorDetails',controller.addData);
router.put('/busAggregatorDetails/:name',controller.updateData);
router.delete('/busAggregatorDetails/:name',controller.deleteData);


//controller for getting bus data
router.post('/getBus',busController.getBusData);


module.exports = router;
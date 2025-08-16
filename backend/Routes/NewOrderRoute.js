const {NewOrder} = require('../Controllers/NewOrderController'); 
const router = require("express").Router();

router.post('/newOrder', NewOrder);

module.exports = router; 
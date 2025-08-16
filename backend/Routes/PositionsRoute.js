const { PositionsModel } = require('../Models/PositionsModel');
const router = require("express").Router();

router.get('/', async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

module.exports = router; 
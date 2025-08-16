require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const initData = require('./data.js');
const {HoldingsModel} = require('../model/HoldingsModel.js');
const {PositionsModel} = require("../model/PositionsModel.js");
const MONGO_URL = process.env.MONGO_URL;

main()
    .then((res) => {
        console.log('MongoDB Connected')
    }).catch((err) => {
        console.log(err);
    })
async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async ()=>{
    await HoldingsModel.deleteMany({});
    await HoldingsModel.insertMany(initData.holdings); 
    console.log('Holding Initialized');
    await PositionsModel.deleteMany({});
    await PositionsModel.insertMany(initData.positions); 
    console.log('Position Initialized');
}

initDB(); 
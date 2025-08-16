const { OrdersModel } = require('../Models/OrdersModel');
const { buyStock, sellStock } = require('../util/HoldingService');

module.exports.NewOrder = async(req, res, next)=>{
    try {
        const { name, qty, price, mode } = req.body;
        const newOrder = new OrdersModel({ name, qty, price, mode });
        await newOrder.save();
        if (mode === 'BUY') {
            await buyStock(name, qty, price);
        }
        else if (mode == "Sell") {
            await sellStock(name, qty, price);
        }
        console.log("Order & Holding Updated")
    }
    catch (err) {
        console.error(err);
    }
}
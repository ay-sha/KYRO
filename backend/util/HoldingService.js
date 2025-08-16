const { HoldingsModel } = require('../Models/HoldingsModel');

// Buy stocks and update holdings
async function buyStock(name, qty, price) {
    if (!name || !qty || !price) throw new Error('Invalid parameters');

    // Check if stock already exists in holdings and price is same as before
    const holding = await HoldingsModel.findOne({ name });

    if (holding.price==price) {
        // Calculate new average cost
        const totalQty = holding.qty + Number(qty);
        const newAvg = ((holding.avg * holding.qty) + (price * qty)) / totalQty;

        // Update existing holding
        holding.qty = totalQty;
        holding.avg = newAvg;
        holding.price = price; 
        await holding.save();
    } else {
        // Create new holding if it doesn't exist or price is different 
        await HoldingsModel.create({
            name,
            qty,
            avg: price,
            price,
        });
    }

    return await HoldingsModel.findOne({ name });
}

// Sell stocks and update holdings
async function sellStock(name, qty, price) {
    if (!name || !qty || !price) throw new Error('Invalid parameters');

    const holding = await HoldingsModel.findOne({ name });

    if (!holding || holding.qty < qty) {
        throw new Error('Not enough quantity to sell');
    }

    // Reduce quantity
    holding.qty -= qty;
    holding.price = price; // latest price

    // If qty becomes 0, optionally delete the holding
    if (holding.qty === 0) {
        await HoldingsModel.deleteOne({ name });
    } else {
        await holding.save();
    }

    return holding;
}

module.exports = { buyStock, sellStock};

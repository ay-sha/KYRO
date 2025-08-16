require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const cors = require('cors');

const authRoute = require("./Routes/AuthRoute");
const newOrderRoute = require('./Routes/NewOrderRoute'); 
const allHoldingsRoute = require('./Routes/HoldingsRoute'); 
const allPositionsRoute = require('./Routes/PositionsRoute'); 

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

// CORS first
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'], 
  methods: ['GET','POST','PUT','DELETE','OPTIONS'], 
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // optional

// Routes
app.use('/allHoldings', allHoldingsRoute); 
app.use('/allPositions', allPositionsRoute);
app.use('/newOrder', newOrderRoute); 
app.use("/", authRoute);

// MongoDB connection
mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.error(err));

// Start server
app.listen(PORT, () => {
    console.log(`Running at ${PORT} Port`);
});

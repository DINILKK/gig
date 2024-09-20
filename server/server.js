const express = require('express');
const cors = require('cors');
const gigPoolRouter = require('./routes/gigPoolRouter');
require('dotenv').config();

// db connection
const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT;

app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
}));
app.use(express.json());
app.use('/',gigPoolRouter);

connectDB();
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

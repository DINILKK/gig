const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT;

app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
}));
app.use(express.json());

connectDB();
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const cors = require('cors');
const gigPoolRouter = require('./routes/gigPoolRouter');
const seekerCreationRouter = require('./routes/seekerCreationRouter');
const providerCreationRouter = require('./routes/providerCreationRouter');
require('dotenv').config();
const connectDB = require("./config/db");
const gigTrackerRouter = require("./routes/gigTrackerRouter");

const app = express();
const PORT = process.env.PORT || 5000;

// Apply CORS middleware
app.use(cors({
    origin: process.env.ORIGIN || 'http://localhost:3000',
    credentials: true
}));

app.use(express.json());

// Mount the router at /api
app.use('/api', gigPoolRouter);
<<<<<<< HEAD
app.use('/api', seekerCreationRouter);
app.use('/api', providerCreationRouter)
=======
app.use('/api',gigTrackerRouter);
>>>>>>> a7d846e1e57b0afee2583bc44aed6be0000e27e7

// Connect to database
connectDB();

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

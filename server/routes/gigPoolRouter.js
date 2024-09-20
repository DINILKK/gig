const express = require('express');
const cors = require('cors');
const JobCollection = require('../models/jobCollectionsdb');
require('dotenv').config();

const router=express();

router.get('/api/details',async (req,res)=>{
    try {
        // console.log('req rec');
        const job = await JobCollection.find().exec();
        // console.log(job)
        res.json(job);
    } catch (error) {
        console.error('Error fetching job details:', error);
        res.status(500).json({ message: 'Failed to retrieve job details' });
    }
});


module.exports = router;
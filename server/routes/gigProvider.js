const express = require('express');
const mongoose = require('mongoose');
const JobCollection = require('../models/jobCollectionsdb');
const ProviderCollection = require('../models/providerCollectiondb');

const router = express.Router();

router.post('/post', async (req, res) => {
  const {
    userId,
    position,
    duration,
    pay,
    date,
    vacancy,
    shift,
    description,
    'no-of-vacancy': noOfVacancy, // Using destructuring for 'no-of-vacancy'
  } = req.body;

  console.log('Received request:', req.body);
  console.log('Position:', position); // This should now work without errors

  try {
    // Find provider to get location
    const provider = await ProviderCollection.findOne({ userId }); // Find the provider by userId
    if (!provider) {
      return res.status(404).json({ error: 'Provider not found' });
    }

    const location = provider.location;

    // Generate a jobId (you can change this logic if needed)
    const jobId = new mongoose.Types.ObjectId();

    // Create a new job document using the formData and provider location
    const newJob = new JobCollection({
      jobId: jobId.toString(),
      title: position, // Directly use position
      company: provider.company, // Assuming provider has companyName field
      shift: shift,
      duration: duration,
      pay: pay,
      time: "Not specified", // Adjust if you have time
      role: position, // Directly use position
      description: description,
      imageUrl: process.env.PROF_PIC, // Default image if not provided
      type: "Full-time", // Default type if not provided
      location: location, // Use provider's location
      providerId: userId,
      lastdate: date, // Posting date
    });

    // Save the new job to the database
    await newJob.save();

    // Respond with success and job details
    res.status(201).json({ message: 'Job posted successfully', job: newJob });
  } catch (error) {
    console.error('Error posting job:', error);
    res.status(500).json({ error: 'Server error while posting job' });
  }
});


module.exports = router;

const express = require('express');
const JobCollection = require('../models/jobCollectionsdb');
const ProviderCollection = require('../models/providerCollectiondb');

const router = express.Router();

router.post('/post', async (req, res) => {
  const { userId, formData } = req.body; // Destructure userId and formData from request body

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
      title: formData.position, // Map 'position' to 'title'
      company: provider.companyName, // Assuming provider has companyName field
      shift: formData.shift,
      duration: formData.duration,
      pay: formData.pay,
      time: formData.time || "Not specified", // Use formData.time if provided, else default
      role: formData.position, // Mapping 'position' to 'role' as well
      description: formData.description,
      imageUrl: formData.imageUrl || process.env.PROF_PIC, // Default image if not provided
      type: formData.type || "Full-time", // Default type if not provided
      location: location, // Use provider's location
      providerId: userId,
      date: formData.date, // Posting date
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

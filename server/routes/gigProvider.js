const express = require('express');
const mongoose = require('mongoose');
const Applicationdb = require('../models/ApplicationsCollectionsdb')
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
  } = req.body;

  console.log('Received request:', req.body);
  console.log('Position:', position);

  try {
    // Find provider to get location
    const provider = await ProviderCollection.findById(userId); // Directly use userId
    if (!provider) {
      return res.status(404).json({ error: 'Provider not found' });
    }

    const location = provider.location;

    // Generate a jobId
    const jobId = new mongoose.Types.ObjectId();

    // Create a new job document using the formData and provider location
    const newJob = new JobCollection({
      jobId: jobId.toString(),
      title: position,
      company: provider.company, // Assuming provider has a 'company' field
      shift,
      duration,
      pay,
      time: "Not specified", // Adjust if you have time
      role: position,
      vacancy,
      description,
      imageUrl: process.env.PROF_PIC, // Default image if not provided
      type: "Full-time", // Default type if not provided
      location,
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



router.get('/yourgigs', async (req, res) => {
  const providerId = req.query.userId || req.params.userId; // Adjust based on how providerId is passed
  console.log(providerId);
  
  if (!providerId) {
    return res.status(400).json({ error: "Provider ID is required" });
  }

  try {
    // Find all jobs posted by the provider
    const jobs = await JobCollection.find({ providerId: providerId });
    console.log(jobs);
    
    // Map over each job to find corresponding applications and format the data
    const data = await Promise.all(
      jobs.map(async (job) => {
        // Find applications corresponding to each job
        const applications = await Applicationdb.find({ jobId: job.jobId });

        // Filter applications to include only those with status "pending"
        const pendingApplications = applications.filter(app => app.status === "pending");

        return {
          title: job.title,                          // Job title from JobCollection
          applicants: pendingApplications.length,     // Count of pending applications for this job
          // status: pendingApplications.map(app => app.status), // Status of each pending application
          jobId:job.jobId
        };
      })
    );

    // Filter out jobs with no pending applications
    const filteredData = data.filter(item => item.applicants > 0);

    console.log(filteredData); // Log the filtered data
    // Send response with formatted data
    res.status(200).json(filteredData);
  } catch (error) {
    console.error("Error fetching gigs:", error);
    res.status(500).json({ error: "Failed to retrieve gigs" });
  }
});



module.exports = router;

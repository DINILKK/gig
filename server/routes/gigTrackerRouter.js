const express = require('express');
const Applicationdb = require('../models/ApplicationsCollectionsdb'); 
const JobCollectionsdb = require("../models/jobCollectionsdb");
const router = express.Router();

router.get('/status', async (req, res) => {
  const { userid } = req.query; 

  try {
    // Fetch pending and approved job applications
    const pendingApplications = await Applicationdb.find({ seekerId: userid, status: 'pending' });
    const approvedApplications = await Applicationdb.find({ seekerId: userid, status: 'accepted' });

    // Extract job IDs from applications
    const pendingJobIds = pendingApplications.map(app => app.jobId);
    const approvedJobIds = approvedApplications.map(app => app.jobId);

    // Fetch job details based on job IDs
    const pendingJobs = await JobCollectionsdb.find({ id: { $in: pendingJobIds } });
    const approvedJobs = await JobCollectionsdb.find({ id: { $in: approvedJobIds } });

    // Format the job details into the desired structure
    const formattedPendingJobs = pendingJobs.map(job => ({
      id: job.id,
      title: job.title,
      company: job.company,
      shift: job.shift,
      duration: job.duration,
      pay: job.pay,
      time: job.time,
      role: job.role,
      description: job.description,
      imageUrl: job.imageUrl,
      type: job.type,
      location: job.location,
    }));

    const formattedApprovedJobs = approvedJobs.map(job => ({
      id: job.id,
      title: job.title,
      company: job.company,
      shift: job.shift,
      duration: job.duration,
      pay: job.pay,
      time: job.time,
      role: job.role,
      description: job.description,
      imageUrl: job.imageUrl,
      type: job.type,
      location: job.location,
    }));

    // Respond with formatted pending and approved job details
    res.json({ pendingJobs: formattedPendingJobs, approvedJobs: formattedApprovedJobs });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/history', async (req, res) => {
  const { userid } = req.query;

  try {
    // Fetch application history for the user with statuses "done" and "rejected"
    const history = await Applicationdb.find({
      seekerId: userid,
      status: { $in: ["done", "rejected"] }
    });

    // Extract job IDs from applications
    const jobIds = history.map(app => app.jobId);
    
    // Fetch job details based on job IDs
    const jobs = await JobCollectionsdb.find({ id: { $in: jobIds } });

    // Format the job details into the desired structure
    const formattedHistory = history.map(app => {
      const job = jobs.find(job => job.id === app.jobId);
      return {
        title: job.title,
        company: job.company,
        address: job.location, // Assuming the address is the location
        amount: job.pay, // Assuming amount corresponds to pay
        date: app.date, // Assuming you have a date field in the application document
        status: app.status
      };
    });

    // Respond with the formatted history
    res.json({ history: formattedHistory });
  } catch (error) {
    console.error('Error fetching history:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

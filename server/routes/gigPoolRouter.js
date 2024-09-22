const express = require('express');
const JobCollection = require('../models/jobCollectionsdb');
const router = express.Router();

// Handle GET request for job details with pagination
router.get('/details', async (req, res) => {
    const { page = 1, limit = 10 } = req.query; // Default to page 1 and limit to 10
    const options = {
        page: parseInt(page),
        limit: parseInt(limit),
    };

    try {
        // Fetch jobs with pagination
        const jobs = await JobCollection.find()
            .skip((options.page - 1) * options.limit)
            .limit(options.limit)
            .exec();

        const totalJobs = await JobCollection.countDocuments(); // Total number of jobs

        res.json({
            totalJobs,
            totalPages: Math.ceil(totalJobs / options.limit), // Calculate total pages
            currentPage: options.page,
            jobs, // Send paginated jobs list
        });
    } catch (error) {
        console.error('Error fetching job details:', error);
        return res.status(500).json({ message: 'Failed to retrieve job details' });
    }
});

// Handle search request
router.get('/search', async (req, res) => {
    const searchTerm = req.query.searchTerm || ''; // Search term from query
    try {
        // Perform search with regex matching in multiple fields
        const jobs = await JobCollection.find({
            $or: [
                { title: { $regex: searchTerm, $options: 'i' } },  // Case-insensitive search in title
                { company: { $regex: searchTerm, $options: 'i' } }, // Case-insensitive search in company
                { role: { $regex: searchTerm, $options: 'i' } }, // Case-insensitive search in role
                { description: { $regex: searchTerm, $options: 'i' } }, // Case-insensitive search in description
                { type: { $regex: searchTerm, $options: 'i' } }, // Case-insensitive search in type
            ]
        }).exec();

        // if (jobs.length === 0) {
        //     return res.status(404).json({ message: 'No jobs found matching your search.' });
        // }

        res.json({ jobs }); // Return search results
    } catch (error) {
        console.error('Error searching jobs:', error);
        return res.status(500).json({ message: 'Failed to search for jobs' });
    }
});

// Handle category-based filtering
router.get('/topCategories', async (req, res) => {
    const selectedCategory = req.query.selectedCategory || ''; // Category from query

    try {
        if (!selectedCategory) {
            return res.status(400).json({ message: 'Category is required.' });
        }

        // Fetch jobs matching the selected category
        const jobs = await JobCollection.find({ type: { $regex: selectedCategory, $options: 'i' } }).exec();

        // if (jobs.length === 0) {
        //     return res.status(404).json({ message: 'No jobs found in this category.' });
        // }

        res.json({ jobs }); 
    } catch (error) {
        console.error('Error fetching jobs by category:', error);
        return res.status(500).json({ message: 'Failed to retrieve jobs for this category' });
    }
});

module.exports = router;

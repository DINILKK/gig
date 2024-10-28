const express = require('express');
const UserCollection = require('../models/seekerCollectionsdb'); // Make sure to replace this with the actual model path
const bcrypt = require('bcrypt'); // For password hashing
const router = express.Router();

// Handle user creation
router.post('/userCreation', async (req, res) => {
    const { name, email, userId, address, city, phone, password } = req.body;
    console.log("hi your details have been caught");
    // Validate input fields (You can add more validations as needed)
    if (!name || !email || !userId || !address || !city || !phone || !password) {
        
        return res.status(400).json({ message: 'All fields are required.' });
        
    }

    try {
        // Check if user already exists
        const existingUser = await UserCollection.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
       

        // Create a new user
        const newUser = new UserCollection({
            name,
            email,
            userId,
            address,
            city,
            phone,
            password: hashedPassword, // Save the hashed password
        });

        // Save user to the database
        await newUser.save();

        res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Failed to create user.' });
    }
});

module.exports = router;

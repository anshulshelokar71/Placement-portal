const bcrypt = require('bcrypt');
const { Student, PersonalInfo } = require('../models'); // Assuming your models are defined in a separate file
const jwt = require('jsonwebtoken'); // For creating tokens (optional for session management)
const express = require("express");
const router = express.Router();
router.post('/login',async (req, res) => {
    const { MIS_ID, password } = req.body;

    try {
        // Step 1: Find the student by MIS_ID
        const student = await Student.findOne({ where: { MIS_ID } });
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        // Step 2: Compare the password
        const isPasswordValid = await bcrypt.compare(password, student.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Step 3: Check if the student's profile is complete
        const personalInfo = await PersonalInfo.findOne({ where: { MIS_ID } });
        const profileComplete = !!personalInfo; // Profile is complete if `personalInfo` exists

        // Step 4: Create a JWT token (optional for session management)
        const token = jwt.sign({ MIS_ID }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Step 5: Send response to frontend
        res.status(200).json({
            message: 'Login successful',
            token, // Send the token if you're using JWT authentication
            profileComplete, // Redirect based on whether profile is complete or not
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;

 
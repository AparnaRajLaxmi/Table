// Import required modules and models
const User = require('../models/User');

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, title, department, role } = req.body;

        // Validate input data (you can add more validations if needed)
        if (!name || !email || !title || !department || !role) {
            return res.status(400).json({
                success: false,
                error: 'All fields are required',
                message: 'Bad Request'
            });
        }

        // Find the user by ID
        const user = await User.findByIdAndUpdate(
            id,
            { name, email, title, department, role, updatedAt: Date.now() },
            { new: true } // To return the updated user after the operation
        );

        if (!user) {
            // If the user with the provided ID is not found
            return res.status(404).json({
                success: false,
                error: 'User not found',
                message: 'Resource not found'
            });
        }

        // Respond with the updated user data
        res.status(200).json({
            success: true,
            data: user,
            message: 'Updated successfully',
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: 'Server error',
            message: err.message
        });
    }
};

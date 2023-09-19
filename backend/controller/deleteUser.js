const User = require('../models/User')

exports.deleteUser = async(req,res) => {
    try {
        const {id} = req.params;

        const user = await User.findByIdAndDelete(id)

        if (!user) {
            return res.status(404).json({
                success:false,
                error: 'User not found',
                message: 'Resource not found'
            });
        }
        res.status(200).json({
            success:true,
            message: 'User deleted successfully',
        });
    } catch(err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: 'Server error',
            message: err.message
        });
    }
}
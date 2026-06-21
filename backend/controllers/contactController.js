const { pool } = require('../db');

exports.createMessage = async (req, res) => {
    try {
        const { name, email, phone, subject, message, plan, age, experience, goals, currentWeight, targetWeight, height, activity } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                success: false,
                message: 'Please fill in all required fields'
            });
        }

        const result = await pool.query(
            `INSERT INTO messages (plan, name, email, phone, subject, message, age, experience, goals, current_weight, target_weight, height, activity)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
             RETURNING *`,
            [
                plan || 'General Contact',
                name,
                email,
                phone || 'Not provided',
                subject || 'No Subject',
                message || 'No message',
                age || 'Not provided',
                experience || 'Not provided',
                goals || 'Not provided',
                currentWeight || 'Not provided',
                targetWeight || 'Not provided',
                height || 'Not provided',
                activity || 'Not provided',
            ]
        );

        const newMessage = result.rows[0];
        console.log('New message received:', newMessage);

        res.status(200).json({
            success: true,
            message: 'Your message has been sent successfully!',
            data: newMessage
        });
    } catch (error) {
        console.error('Error processing message:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while sending your message. Please try again.'
        });
    }
};

exports.getAllMessages = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM messages ORDER BY id DESC');
        res.status(200).json({
            success: true,
            count: result.rows.length,
            data: result.rows
        });
    } catch (error) {
        console.error('Error reading messages:', error);
        res.status(500).json({
            success: false,
            message: 'Error retrieving messages'
        });
    }
};

exports.getMessageById = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM messages WHERE id = $1', [req.params.id]);

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Message not found'
            });
        }

        res.status(200).json({
            success: true,
            data: result.rows[0]
        });
    } catch (error) {
        console.error('Error reading message:', error);
        res.status(500).json({
            success: false,
            message: 'Error retrieving message'
        });
    }
};

exports.deleteMessage = async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM messages WHERE id = $1 RETURNING id', [req.params.id]);

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Message not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Message deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting message:', error);
        res.status(500).json({
            success: false,
            message: 'Error deleting message'
        });
    }
};

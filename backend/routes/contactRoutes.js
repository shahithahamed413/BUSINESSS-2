const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/contact', contactController.createMessage);
router.get('/messages', contactController.getAllMessages);
router.get('/messages/:id', contactController.getMessageById);
router.delete('/messages/:id', contactController.deleteMessage);

module.exports = router;

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initDB } = require('./db');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'frontend')));

app.use('/api', contactRoutes);

app.listen(PORT, async () => {
    try {
        await initDB();
        console.log(`PowerFit Gym server running on http://localhost:${PORT}`);
        console.log('Database: PostgreSQL (powerfit_gym)');
    } catch (error) {
        console.error('Failed to initialize database:', error);
        process.exit(1);
    }
});

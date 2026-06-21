const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME || 'powerfit_gym',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
});

async function initDB() {
    const client = await pool.connect();
    try {
        await client.query(`
            CREATE TABLE IF NOT EXISTS messages (
                id SERIAL PRIMARY KEY,
                plan VARCHAR(255) DEFAULT 'General Contact',
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                phone VARCHAR(50) DEFAULT 'Not provided',
                subject VARCHAR(255) DEFAULT 'No Subject',
                message TEXT DEFAULT 'No message',
                age VARCHAR(50) DEFAULT 'Not provided',
                experience VARCHAR(255) DEFAULT 'Not provided',
                goals TEXT DEFAULT 'Not provided',
                current_weight VARCHAR(50) DEFAULT 'Not provided',
                target_weight VARCHAR(50) DEFAULT 'Not provided',
                height VARCHAR(50) DEFAULT 'Not provided',
                activity VARCHAR(50) DEFAULT 'Not provided',
                timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('Database table "messages" is ready');
    } finally {
        client.release();
    }
}

module.exports = { pool, initDB };

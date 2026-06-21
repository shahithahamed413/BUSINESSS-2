\c powerfit_gym;

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
);

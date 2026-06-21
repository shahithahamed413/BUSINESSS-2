# PowerFit Gym

A full-stack gym management website with Express.js backend and PostgreSQL database.

## Project Structure

```
business-2/
├── frontend/          # Static HTML, CSS, JS files
├── backend/           # Express.js API server
├── database/          # SQL initialization scripts
├── nginx/             # Nginx configuration
└── docker-compose.yml # Docker setup
```

## Local Setup

1. Ensure PostgreSQL is running
2. Configure `backend/.env` with your database credentials
3. Run:
   ```bash
   cd backend
   npm install
   npm start
   ```
4. Open http://localhost:3000

## Docker Setup

```bash
docker-compose up --build
```

## API Endpoints

- `POST /api/contact` - Submit a contact/enquiry form
- `GET /api/messages` - Get all messages (admin)
- `GET /api/messages/:id` - Get a single message
- `DELETE /api/messages/:id` - Delete a message

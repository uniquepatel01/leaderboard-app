# 🏆 Leaderboard App

A full-stack web application to add users, claim random points, and view a live leaderboard. Built with **React**, **Express**, **MongoDB**, and **Tailwind CSS**.

---

## Features

- Add new users to the leaderboard
- Claim random points for any user
- Live leaderboard ranking
- Responsive, modern UI

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Axios
- **Backend:** Node.js, Express, Mongoose, MongoDB

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally on default port)

---

### 1. Clone the repository

```sh
git clone <your-repo-url>
cd leaderboard-app
```

---

### 2. Start the Backend

```sh
cd backend
npm install
# Make sure MongoDB is running locally
node index.js
```

The backend will run on [http://localhost:5000](http://localhost:5000).

---

### 3. Start the Frontend

Open a new terminal:

```sh
cd frontend
npm install
npm run dev
```

The frontend will run on [http://localhost:5173](http://localhost:5173) (default Vite port).

---

## Project Structure

```
leaderboard-app/
  backend/
    models/
    routes/
    index.js
    package.json
  frontend/
    src/
      components/
      App.jsx
      main.jsx
      index.css
    package.json
    vite.config.js
```

---

## API Endpoints

- `GET /api/users` — List all users
- `POST /api/users` — Add a new user (`{ name }`)
- `POST /api/claim` — Claim random points for a user (`{ userId }`)
- `GET /api/leaderboard` — Get leaderboard ranking

---

## Screenshots

> _Add screenshots here if desired_

---

## License

MIT

---

## Credits

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

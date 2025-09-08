# 🔗 URL Shortener (MERN + Vite)

A full-stack **URL Shortener** application built using the **MERN stack** (MongoDB, Express.js, React, Node.js) with **Vite** for the frontend.  
It provides **user authentication** and allows users to shorten URLs, track how many times they’ve been clicked, and easily copy/paste them.

---

## ✨ Features
- 🔐 **User Authentication** – Secure login & signup at both frontend and backend.
- 🔗 **URL Shortening** – Generate short URLs for long links.
- 📊 **Analytics** – Track the number of shortened URLs and the total clicks on each.
- 📋 **Copy & Paste** – One-click copy of shortened URLs.
- ⚡ **Vite + React** – Fast and optimized frontend setup.
- 🎨 **TailwindCSS** – Clean and modern UI.

---

## 📂 Project Structure
```
URL-Shortener/
│
├── BACKEND/              # Backend server (Node.js + Express + MongoDB)
│   ├── node_modules/
│   ├── src/              # All backend code
│   └── ...               # Other backend configs
│
├── FRONTEND/             # Frontend (React + Vite)
│   ├── node_modules/
│   ├── src/              # All frontend code (components, pages, etc.)
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md             # Project documentation
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```

### 2️⃣ Setup Backend
```bash
cd BACKEND
npm install
npx nodemon
```
Make sure to configure your **MongoDB connection string** and **JWT secret** in a `.env` file.

### 3️⃣ Setup Frontend
```bash
cd FRONTEND
npm install
npm run dev
```

---

## ⚙️ Tech Stack
- **Frontend:** React, Vite, Redux Toolkit, React Query, TailwindCSS
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT

---

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## 📜 License
This project is licensed under the MIT License.

🔗 URL Shortener (MERN + Vite)

A full-stack URL Shortener built with the MERN stack (MongoDB, Express.js, React, Node.js) and Vite for a fast frontend development experience.
This app allows users to shorten long URLs, track clicks, and manage their links with authentication support.

✨ Key Features

🔐 Authentication – Secure user login & signup (frontend + backend).

🔗 Short Links – Generate unique short URLs for long links.

📊 Analytics – Monitor total URLs created and the number of clicks each receives.

📋 Quick Copy – One-click copy functionality for generated short links.

⚡ Fast Frontend – Powered by Vite + React.

🎨 Modern UI – Styled with TailwindCSS for a clean interface.

📂 Project Structure
URL-Shortener/
│
├── BACKEND/              # Express + MongoDB backend
│   ├── node_modules/
│   ├── src/              # Backend logic
│   └── ...               # Config & environment files
│
├── FRONTEND/             # React + Vite frontend
│   ├── node_modules/
│   ├── src/              # Components, pages, hooks, etc.
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md             # Documentation

🚀 Getting Started
1️⃣ Clone Repository
git clone https://github.com/your-username/url-shortener.git
cd url-shortener

2️⃣ Setup Backend
cd BACKEND
npm install
npm nodemon


👉 Create a .env file and configure your MongoDB URI and JWT secret.

3️⃣ Setup Frontend
cd FRONTEND
npm install
npm run dev

⚙️ Tech Stack

Frontend – React, Vite, Redux Toolkit, React Query, TailwindCSS

Backend – Node.js, Express.js, MongoDB

Authentication – JSON Web Tokens (JWT)

🤝 Contribution

Contributions are welcome!
If you’d like to add features or fix bugs, please open an issue first to discuss your ideas before submitting a pull request.

📜 License

Licensed under the MIT License – feel free to use and modify.

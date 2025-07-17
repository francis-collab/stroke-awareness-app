# 🧠 Stroke Awareness Hub — React App

This is a fully responsive **React.js** web application built to educate users about **Stroke**: its symptoms, prevention, and treatment. The site uses modern frontend tools including **TailwindCSS** and **React Router** for a seamless user experience. Enjoy the app!

---

## 📸 Live Demo

🌐 [https://francis-collab.github.io/stroke-awareness-app/](https://francis-collab.github.io/stroke-awareness-app)

---

## 🛠️ Features

- ⚛️ React + JSX Component Architecture
- 🎨 TailwindCSS Utility-First Styling
- 🧭 React Router for Multi-Page Navigation
- 📱 Fully Responsive on All Devices
- 🔔 Interactive Components (Button, Forms)
- 💾 Ready for Deployment via GitHub Pages

---

## 🗂️ Project Structure

```
stroke-awareness-react/
├── public/
│   └── stroke-awareness.jpg
│   └── index.html
├── src/
│   ├── components/                # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Section.jsx
│   │   ├── AsideTip.jsx
│   │   └── Footer.jsx
│   ├── pages/                     # Routed pages
│   │   ├── Home.jsx
│   │   ├── Symptoms.jsx
│   │   ├── Prevention.jsx
│   │   └── Treatment.jsx
│   ├── App.jsx                    # Main app file with routing
│   ├── index.js                   # React entry point
│   └── index.css                  # Tailwind CSS
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

---

## 🚀 Setup Instructions

### 📦 1. Clone the Repository

```bash
git clone https://github.com/yourusername/stroke-awareness-react.git
cd stroke-awareness-react
```

### 💾 2. Install Dependencies

```bash
npm install
```

### 💨 3. Run Locally

```bash
npm start
```

Visit `http://localhost:3000`

---

## 🌐 Deploy to GitHub Pages

### 1. Install `gh-pages` if not already:

```bash
npm install gh-pages --save-dev
```

### 2. Update `package.json`

```json
"homepage": "https://yourusername.github.io/stroke-awareness-react",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### 3. Deploy

```bash
npm run deploy
```

---

## 📚 Learn More

- [React Docs](https://react.dev/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [React Router Docs](https://reactrouter.com/)

---

## 👨‍💻 Author

**Francis Mutabazi**  
Built with ❤️ for health awareness

---

## 📜 License

This project is open-source and free to use.


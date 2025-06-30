
# µCR — Microcontroller-Based Systems & Robotics Hub Website 🌟

Welcome to the official website for **µCR**, a hub dedicated to microcontroller-based systems and robotics.  
More than a hub, no less than a legacy. 🚀  

Built and maintained with ❤️ by **Anshul Singh**

---

## ✨ Overview

This website is built using **React + TypeScript**, styled with a modern neon blue-purple theme, and features interactive elements for an engaging experience.  

### Key Highlights:
- 🔗 Smooth, sticky navigation bar with active link highlighting
- 🟣 Neon particle background for a futuristic vibe
- 📊 Animated counters, flip cards, and chatbot for interaction
- 📰 News ticker for updates
- 📚 Blog system powered by a single data file (`blogs.ts`)
- ✅ Fully responsive design for all screen sizes
- 🔄 Scroll to Top button for seamless navigation
- 📌 Firebase-ready for form submissions (optional)

---

## 📂 Project Structure

```plaintext
src/
├── assets/                # Static assets (images, icons, etc.)
├── components/            # Reusable React components
│   ├── AnimatedCounter.tsx
│   ├── ChatBot.tsx
│   ├── FlipCard.tsx
│   ├── Footer.tsx
│   ├── Logo.tsx
│   ├── Navbar.tsx
│   ├── NewsTicker.tsx
│   ├── ParticleBackground.tsx
│   └── ScrollToTop.tsx
├── data/
│   └── blogs.ts           # Blog content
├── pages/                 # Individual pages
│   ├── About.tsx
│   ├── BlogPost.tsx
│   ├── Contact.tsx
│   ├── Events.tsx
│   ├── Home.tsx
│   ├── JoinUs.tsx
│   ├── KnowledgeHub.tsx
│   ├── NotFound.tsx
│   ├── Projects.tsx
│   └── Team.tsx
├── App.tsx
├── firebase.ts
├── index.css
└── main.tsx
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18.x
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yodamynameis/ucr_website.git
cd ucr_website
```

---

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

---

### 3️⃣ Run Locally

```bash
npm run dev
# or
yarn dev
```

Open \`http://localhost:5173\` to view it in your browser.

---

### 4️⃣ Build for Production

```bash
npm run build
# or
yarn build
```

You can then deploy the `dist` folder to Vercel, Netlify, or any static host.

---

## ⚡️ Customization

- ✏️ **Blogs**: Edit \`src/data/blogs.ts\` to add or update posts.
- ✨ **Theme**: Adjust styles in \`index.css\` or component-specific styles.
- 🔗 **Firebase**: Update \`firebase.ts\` with your Firebase credentials for forms.
- 🗃️ **Content**: Update team, events, and hub information within their respective pages/components.

---

## 🗝️ Environment Variables

If using Firebase or other external services, create a \`.env\` file:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Add `.env` to `.gitignore` to keep your keys safe.

---

## 🧑‍💻 Author

Built with ❤️ by **Anshul Singh**

---

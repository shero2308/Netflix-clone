# Netflix Clone 🎬

A Netflix-inspired web application built with **React**, **Firebase Authentication**, and **React Router**, styled with custom CSS.  
Deployed on **Vercel**.  

---

## 🚀 Features
- 🔐 **User Authentication** (Sign In / Sign Up with Firebase Auth)  
- 🎭 **Protected Routes** (Redirects to login if not signed in)  
- 🎥 **Video Player Page** (`/player/:id`)  
- 🍿 **Dynamic Home Page** with movie banners & cards  
- 🎉 **React-Toastify Notifications** (success & error messages)  

---

## 🛠️ Tech Stack
- **Frontend:** React, React Router, React-Toastify, CSS  
- **Backend/Auth:** Firebase Authentication  
- **Deployment:** Vercel  

---

## 📂 Project Structure
```
├── public/
├── src/
│   ├── assets/        # Images, icons, logo
│   ├── components/    # Reusable components
│   ├── pages/         # Home, Login, Player
│   ├── Firebase.js    # Firebase config & auth helpers
│   ├── App.jsx        # Routes & auth state handling
│   └── index.js       # Entry point
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔧 Setup & Installation

1. **Clone the repo**
```bash
git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com/)  
   - Create a project → Enable **Authentication (Email/Password)**  
   - Copy your config and replace it in `src/Firebase.js`  
   - Example:
   ```js
   import { initializeApp } from "firebase/app";
   import { getAuth } from "firebase/auth";

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT.appspot.com",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID"
   };

   const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);
   ```

4. **Run the development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
```

---

## 🌐 Deployment (Vercel)

1. Push your code to GitHub  
2. Go to [Vercel](https://vercel.com/) → Import Project  
3. Set:
   - **Build Command:** `npm run build`  
   - **Output Directory:** `dist`  
4. Add Firebase API keys as **Environment Variables** in Vercel  
5. Deploy 🎉  

---

## 📸 Screenshots
_(Add images of your login page, home page, and player here)_  

---

## 🙌 Acknowledgements
- [React](https://reactjs.org/)  
- [Firebase](https://firebase.google.com/)  
- [Vercel](https://vercel.com/)  

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCIaNoMCnf_eWmDmygwrdkW0oqDIbcotbg",
//   authDomain: "bookshelf-99c41.firebaseapp.com",
//   projectId: "bookshelf-99c41",
//   storageBucket: "bookshelf-99c41.appspot.com",
//   messagingSenderId: "756226900753",
//   appId: "1:756226900753:web:b6d327c3dbd0bed8aa02b0",
// };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export { app, auth };

// src/app/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  GoogleAuthProvider,
  RecaptchaVerifier
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyB9gsX2eXso1agogRHSkYhZ1EnKzfLpMmM",
  authDomain: "sri-jayamurgan-transport.firebaseapp.com",
  projectId: "sri-jayamurgan-transport",
  storageBucket: "sri-jayamurgan-transport.appspot.com",
  messagingSenderId: "182518771853",
  appId: "1:182518771853:web:80ad8725dee541b85432c4",
  measurementId: "G-BR715S9E4J",
};

// ✅ Initialize App (Prevent Reinitializing)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// ✅ Init Auth & Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

// ✅ Google Sign-in Provider
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// ✅ Optional: Persist login
setPersistence(auth, browserLocalPersistence);

// ✅ Export RecaptchaVerifier for OTP
export { RecaptchaVerifier };

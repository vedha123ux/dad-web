// src/app/lib/auth.ts
"use client";

import { signOut, signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.error("Logout failed", err);
  }
};

export const signInWithGoogle = async () => {
  provider.setCustomParameters({ prompt: "select_account" }); // ✅ always show account chooser
  return await signInWithPopup(auth, provider);
};

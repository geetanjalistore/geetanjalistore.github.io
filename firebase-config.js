// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

// Aapka Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDfSbrHbz31dy8FXR_8Gj8t3YP05_ZAkcs",
  authDomain: "geetanjalistore-9aa89.firebaseapp.com",
  projectId: "geetanjalistore-9aa89",
  storageBucket: "geetanjalistore-9aa89.appspot.com",
  messagingSenderId: "260477667101",
  appId: "1:260477667101:web:39583c62ed91ba32c743f4",
  measurementId: "G-F3272WGM0T"
};

// Firebase init
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };

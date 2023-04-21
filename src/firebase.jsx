import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTeDt-GUfqpuKDHdcJdMj5p2i4F9wfPC8",
  authDomain: "fir-chat-1a215.firebaseapp.com",
  projectId: "fir-chat-1a215",
  storageBucket: "fir-chat-1a215.appspot.com",
  messagingSenderId: "867179311045",
  appId: "1:867179311045:web:d2a1f42c117692a9cbe5ac",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ54yMy5Tfw9yDuoAi2BvTdllurHeNdBQ",
  authDomain: "ecommerce-73860-b325a.firebaseapp.com",
  projectId: "ecommerce-73860-b325a",
  storageBucket: "ecommerce-73860-b325a.firebasestorage.app",
  messagingSenderId: "145602182183",
  appId: "1:145602182183:web:9efee0b46ea4e6d4ef6202"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
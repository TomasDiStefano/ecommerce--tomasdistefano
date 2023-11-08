import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDw0fAOmeT5nfPY99G7PJ3o2ImOGzXDOd0",
  authDomain: "ecommerce-diesel-juncal.firebaseapp.com",
  projectId: "ecommerce-diesel-juncal",
  storageBucket: "ecommerce-diesel-juncal.appspot.com",
  messagingSenderId: "730217473515",
  appId: "1:730217473515:web:51f8bf4b1f74bebc1c65ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

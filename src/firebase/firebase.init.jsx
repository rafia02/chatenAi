
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyClBTFB2O93Eg-QDL9VR56gXGRkO1TN-bo",
  authDomain: "chatentai.firebaseapp.com",
  projectId: "chatentai",
  storageBucket: "chatentai.appspot.com",
  messagingSenderId: "586821293414",
  appId: "1:586821293414:web:d0bedb7534b437ce6be4a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
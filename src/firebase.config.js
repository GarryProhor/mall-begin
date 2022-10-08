import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDQD6sZJ38CFLTLakhs6t83LjN4kpTMmGc",
    authDomain: "furniture-e49f9.firebaseapp.com",
    projectId: "furniture-e49f9",
    storageBucket: "furniture-e49f9.appspot.com",
    messagingSenderId: "334541224995",
    appId: "1:334541224995:web:ad2ae0399745bdba63c596",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)

export default app;
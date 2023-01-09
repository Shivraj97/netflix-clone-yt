// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAQiFA2-65hkuEKqlGew0uf0LUDP323ieE',
  authDomain: 'netflix-clone-yt-80d65.firebaseapp.com',
  projectId: 'netflix-clone-yt-80d65',
  storageBucket: 'netflix-clone-yt-80d65.appspot.com',
  messagingSenderId: '467745449606',
  appId: '1:467745449606:web:8f14c0317396a8330fd307',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };

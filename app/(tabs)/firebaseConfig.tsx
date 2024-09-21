import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAlF4zZbNl0Z9mK8uvEiXmjNlWArmhGi3E",
  authDomain: "demologin-df3be.firebaseapp.com",
  databaseURL: "https://demologin-df3be-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "demologin-df3be",
  storageBucket: "demologin-df3be.appspot.com",
  messagingSenderId: "139562668651",
  appId: "1:139562668651:web:37d0bb287888e3201ad72e",
  measurementId: "G-BXKBKNR9J0"
};

export const FIREBASE_APP=initializeApp(firebaseConfig);
export const FIREBASE_AUTH=getAuth(FIREBASE_APP);
export const FIRESTORE_DB=getFirestore(FIREBASE_APP);


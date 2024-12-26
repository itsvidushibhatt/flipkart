import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCVGu7peEVfIhsLIqRxfwHFdxdGo2kyDI4",
  authDomain: "mitkart-e5b51.firebaseapp.com",
  projectId: "mitkart-e5b51",
  storageBucket: "mitkart-e5b51.appspot.com",
  messagingSenderId: "929034118068",
  appId: "1:929034118068:web:06d9d587ebdabf55d408e1",
  measurementId: "G-WH1BY83F8R"
};

// Initialize Firebase
const FIREBASE_APP =  initializeApp(firebaseConfig)
const FIREBASE_AUTH= getAuth(FIREBASE_APP)
const FIREBASE_DB= getFirestore(FIREBASE_APP)
const storage = getStorage(FIREBASE_APP);  

const auth = FIREBASE_AUTH;
const firestore = FIREBASE_DB;

export {auth, firestore ,FIREBASE_APP,FIREBASE_DB, storage}
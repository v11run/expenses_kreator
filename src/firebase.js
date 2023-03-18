import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyDqajVXRaGEWKY_r6KZmVd5JHz6WWTV7Bo",
    authDomain: "kreator-expenses.firebaseapp.com",
    projectId: "kreator-expenses",
    storageBucket: "kreator-expenses.appspot.com",
    messagingSenderId: "631501946839",
    appId: "1:631501946839:web:8ffe76225f332c5eed9592"
  };

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {app,auth}
import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyC8zDbOGgymIx_m4IACl9Ubrfb1SwgD-MQ",
    authDomain: "fir-todo-32340.firebaseapp.com",
    databaseURL: "https://fir-todo-32340-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-todo-32340",
    storageBucket: "fir-todo-32340.appspot.com",
    messagingSenderId: "559929646325",
    appId: "1:559929646325:web:9d88d9c2bce71e1f54f9bc",
    measurementId: "G-5X5MSDYC4H"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
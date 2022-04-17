// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCweWP43oUQnnOIHrqQZ_imEYAQDkK4C8E",
    authDomain: "ecommerce-website-8bc8d.firebaseapp.com",
    projectId: "ecommerce-website-8bc8d",
    storageBucket: "ecommerce-website-8bc8d.appspot.com",
    messagingSenderId: "339813620638",
    appId: "1:339813620638:web:321e55cd2f502da4e1148f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider()
const timestamp = firebase.firestore.FieldValue.serverTimestamp() || null
const firestore = firebase.firestore();




export {firestore, storage}


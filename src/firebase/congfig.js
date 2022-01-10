// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebase  from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCweWP43oUQnnOIHrqQZ_imEYAQDkK4C8E",
  authDomain: "ecommerce-website-8bc8d.firebaseapp.com",
  projectId: "ecommerce-website-8bc8d",
  storageBucket: "ecommerce-website-8bc8d.appspot.com",
  messagingSenderId: "339813620638",
  appId: "1:339813620638:web:321e55cd2f502da4e1148f",
  measurementId: "G-7WZHT4N1MZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const projectStorage = firebase.storage();
const porjectFirestore = firebse.firestore();

export {projectStorage, porjectFirestore}

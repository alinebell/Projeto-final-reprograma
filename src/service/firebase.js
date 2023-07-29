// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDataBase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp7bi7MauYzluAFhjXWOsmULoNMpKgFrQ",
  authDomain: "projeto-final-react-89324.firebaseapp.com",
  projectId: "projeto-final-react-89324",
  storageBucket: "projeto-final-react-89324.appspot.com",
  messagingSenderId: "941861042218",
  appId: "1:941861042218:web:b933d1fe96dbeacf86eb53"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const database = getDataBase()

export default database
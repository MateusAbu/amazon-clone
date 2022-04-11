import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCgTIiF3PXp2BUrxM0iE9xFNfP6orXzFh8",
    authDomain: "clone-af018.firebaseapp.com",
    projectId: "clone-af018",
    storageBucket: "clone-af018.appspot.com",
    messagingSenderId: "155267436138",
    appId: "1:155267436138:web:804aedc491b12d7d770413",
    measurementId: "G-CGZEK81P81"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore() //Initialize the Database

const auth = firebase.auth()

export { db, auth }
import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDRLIOF4EpXtncgx2nSpJAv5iqrhKI8qFg",
    authDomain: "react-firebase-app-fc315.firebaseapp.com",
    projectId: "react-firebase-app-fc315",
    storageBucket: "react-firebase-app-fc315.appspot.com",
    messagingSenderId: "799534194332",
    appId: "1:799534194332:web:5986f315c2d946ba5cd759"
})

export const auth = app.auth()

export default app
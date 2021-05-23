// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBVSqDCiK2H9zSMWk3BhagakK94Yjn4hJ0",
    authDomain: "twitter-clone-84bd1.firebaseapp.com",
    projectId: "twitter-clone-84bd1",
    storageBucket: "twitter-clone-84bd1.appspot.com",
    messagingSenderId: "989832422843",
    appId: "1:989832422843:web:cbe0c30ee82451c06c509e",
    measurementId: "G-RRQNS813L5"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
export default db
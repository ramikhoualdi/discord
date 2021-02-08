import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBrtez5A3Jmp2edCJPx4lvrlubivuJ097A",
    authDomain: "discord-1e8bb.firebaseapp.com",
    projectId: "discord-1e8bb",
    storageBucket: "discord-1e8bb.appspot.com",
    messagingSenderId: "42871863904",
    appId: "1:42871863904:web:b046227ad672ae1f7fa105",
    measurementId: "G-QNHK8T14G4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
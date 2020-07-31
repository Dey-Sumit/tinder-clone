import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB3dyqXl9b6giJSmGwWF9OEN04wMfkQ1xA",
    authDomain: "tinder-clone-sumit.firebaseapp.com",
    databaseURL: "https://tinder-clone-sumit.firebaseio.com",
    projectId: "tinder-clone-sumit",
    storageBucket: "tinder-clone-sumit.appspot.com",
    messagingSenderId: "911140311902",
    appId: "1:911140311902:web:3bf43023ab4682bc8ef5cf",
    measurementId: "G-2VZEK2VVZQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebase.firestore()

export default database;

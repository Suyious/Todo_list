import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAAlqLCiDYWNh2bGs-x9NypMyookABVjfA",
    authDomain: "to-do-list-now.firebaseapp.com",
    databaseURL: "https://to-do-list-now.firebaseio.com",
    projectId: "to-do-list-now",
    storageBucket: "to-do-list-now.appspot.com",
    messagingSenderId: "262249208847",
    appId: "1:262249208847:web:cdcfdcc188c9f46265d77a",
    measurementId: "G-8ZE9SKBJDW"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
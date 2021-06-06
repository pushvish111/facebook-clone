// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyAJflNF8qDthhdPyn4DTJ7um-Y_Kr_8mHw",
    authDomain: "facebook-clone-eb594.firebaseapp.com",
    projectId: "facebook-clone-eb594",
    storageBucket: "facebook-clone-eb594.appspot.com",
    messagingSenderId: "74653087354",
    appId: "1:74653087354:web:31bf1ac662ebefb7212dc3",
    measurementId: "G-CWHHBZ5SFP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
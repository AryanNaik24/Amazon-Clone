// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDKbfC9T8btzzgX9ekh8mJPomVwSFWWtBc",
    authDomain: "challenge-7a5c2.firebaseapp.com",
    projectId: "challenge-7a5c2",
    storageBucket: "challenge-7a5c2.appspot.com",
    messagingSenderId: "676004468943",
    appId: "1:676004468943:web:99315f5f0c09472de17fba",
    measurementId: "G-7Z7FY0QTVF",
    // databaseURL: "https://DATABASE_NAME.firebaseio.com"
  };

  

  // firebase.initializeApp(firebaseConfig);
  const firebaseApp = initializeApp(firebaseConfig);

  const auth=getAuth(firebaseApp);
  const db = getDatabase(firebaseApp);
// const db = firebaseApp.firestore();
// const auth=firebase.auth();

export {db,auth};

import firebase from "firebase/app"

import "firebase/firestore"
import "firebase/database"
import "firebase/auth"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "KEY",
  authDomain: "vcontacte-2.firebaseapp.com",
  databaseURL: "https://vcontacte-2.firebaseio.com",
  projectId: "vcontacte-2",
  storageBucket: "vcontacte-2.appspot.com",
  messagingSenderId: "1015934993525",
  appId: "1:1015934993525:web:81d4aee69c816a07d7643c",
};

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase

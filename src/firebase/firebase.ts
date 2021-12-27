import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCjPEWHxrut_Kvbpb47ZsB6YurCToah4II",
    authDomain: "audiobooks-458bc.firebaseapp.com",
    projectId: "audiobooks-458bc",
    storageBucket: "audiobooks-458bc.appspot.com",
    messagingSenderId: "711100449989",
    appId: "1:711100449989:web:612b59d5b227913b519cac"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()
const user = firebase.auth().currentUser

// @typescript-eslint/no-unused-vars
export { auth }
export default db
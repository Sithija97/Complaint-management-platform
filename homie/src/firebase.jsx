import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCcyPssFk5fV2Yni_NGWwA2l-Y1oM-feV4",
    authDomain: "home-automation-application.firebaseapp.com",
    projectId: "home-automation-application",
    storageBucket: "home-automation-application.appspot.com",
    messagingSenderId: "202200914928",
    appId: "1:202200914928:web:78a3337047d44e9f2edb35"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
export default db;
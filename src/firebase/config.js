import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyC96ot-qWryLjAFfVlRKzb3_NMOopjVBwo",
    authDomain: "fir-ddd69.firebaseapp.com",
    projectId: "fir-ddd69",
    storageBucket: "fir-ddd69.appspot.com",
    messagingSenderId: "1002813325983",
    appId: "1:1002813325983:web:2982f7a3bdc5a03b7458aa",
    measurementId: "G-K6VPTQ15PL"
  };
  
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  export { db }
  
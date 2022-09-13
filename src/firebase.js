import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCXetmwSTOCbw0noFsfIunoHmzkUO6x_7c",
    authDomain: "instagram-clone-react-9e934.firebaseapp.com",
    projectId: "instagram-clone-react-9e934",
    storageBucket: "instagram-clone-react-9e934.appspot.com",
    messagingSenderId: "855616091739",
    appId: "1:855616091739:web:7a32e08958c32012c4317e",
    measurementId: "G-59L1KZ0T5J"
  };

const firebaseApp = initializeApp(firebaseConfig);

const auth=getAuth(firebaseApp); 
const storage=getStorage(firebaseApp);
const db=getFirestore(firebaseApp);

 export {auth,db,storage}; 
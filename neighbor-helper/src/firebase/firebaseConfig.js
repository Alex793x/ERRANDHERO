import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
 import { getAuth } from "firebase/auth";
import firebase from "firebase/compat";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyAjUhH9CEe-r21pymOV63VITpkT8ugpl7U',
    authDomain: 'neighbourhelper-1f837.firebaseapp.com',
    databaseURL: 'https://neighbourhelper-1f837-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'neighbourhelper-1f837',
    storageBucket: 'neighbourhelper-1f837.appspot.com',
    messagingSenderId: '664457256937',
    appId: '1:664457256937:web:998bd68f49eb03f0a2b578',
    measurementId: 'G-Z96GZTMT3W',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

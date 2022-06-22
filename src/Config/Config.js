import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyArVJiSa14FGGgys-m2HY3xLD9Ey-GVkZo",
    authDomain: "uas-pbf-3c5ea.firebaseapp.com",
    projectId: "uas-pbf-3c5ea",
    storageBucket: "uas-pbf-3c5ea.appspot.com",
    messagingSenderId: "245842715871",
    appId: "1:245842715871:web:8dd6c561f0c8321bc2b56a"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }
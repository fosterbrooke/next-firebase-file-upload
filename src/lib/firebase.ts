import {
    getApps,
    initializeApp
} from 'firebase/app';
import {
    getStorage
} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBu8GUNkpZi3KMG71QKJxb4TVrm1rwGVHg",
    authDomain: "next-file-upload.firebaseapp.com",
    projectId: "next-file-upload",
    storageBucket: "next-file-upload.appspot.com",
    messagingSenderId: "864580570480",
    appId: "1:864580570480:web:01dca366a4963c57a253b5",
    measurementId: "G-EXRP4JE1QN"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const storage = getStorage(app);

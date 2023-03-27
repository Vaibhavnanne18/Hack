import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  
  apiKey: "AIzaSyDBNHOZ61iym18_dfZKz7uSWrOIwF4alvU",
  authDomain: "simply-salad-2064d.firebaseapp.com",
  projectId: "simply-salad-2064d",
  storageBucket: "simply-salad-2064d.appspot.com",
  messagingSenderId: "1053416515027",
  appId: "1:1053416515027:web:2fed8010b1ceb2dc5abb26",
  measurementId: "G-2413X01V5W",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

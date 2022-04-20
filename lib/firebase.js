// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBj-p7fke3WL1JDKjWGRx_wwBums5BbVac",
  authDomain: "leta-tech.firebaseapp.com",
  projectId: "leta-tech",
  storageBucket: "leta-tech.appspot.com",
  messagingSenderId: "7949504461",
  appId: "1:7949504461:web:7d3b0f9eec66917db4fe84",
  measurementId: "G-ES9QLVH4SL",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

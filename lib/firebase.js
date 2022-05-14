// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey           : 'AIzaSyDg2hfBkq_xNNbss04MFEyqphQEXt7LVfU',
  authDomain       : 'blog10-c6ff7.firebaseapp.com',
  projectId        : 'blog10-c6ff7',
  storageBucket    : 'blog10-c6ff7.appspot.com',
  messagingSenderId: '104597316936',
  appId            : '1:104597316936:web:2a3d65c65f7ddc04b3ff7d',
  measurementId    : 'G-NG9GZXE4CN'
};
// project-104597316936

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

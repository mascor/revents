import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig ={
    apiKey: "AIzaSyDH1L-H0SBE2dRMt-X1uJCly-QQM5RjqZE",
    authDomain: "revent-9bb7a.firebaseapp.com",
    databaseURL: "https://revent-9bb7a.firebaseio.com",
    projectId: "revent-9bb7a",
    storageBucket: "revent-9bb7a.appspot.com",
    messagingSenderId: "521750409424",
    appId: "1:521750409424:web:4e4210b297595378abeed5",
    measurementId: "G-0F0V9BGJZ7"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
import firebase from "firebase";

let config = {
  apiKey: "AIzaSyAUbCtpJXX8_I35iTWHQrRB1djQks-jnak",
  authDomain: "bt3103-datalake.firebaseapp.com",
  databaseURL: "https://bt3103-datalake.firebaseio.com",
  projectId: "bt3103-datalake",
  storageBucket: "bt3103-datalake.appspot.com",
  messagingSenderId: "404164157866"
};

let app = firebase.initializeApp(config);

export const db = app.database();

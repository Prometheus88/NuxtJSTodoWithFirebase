import * as firebase from 'firebase/app';



var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };


  var app = null;


  if(!firebase.apps.length){

    app = firebase.initializeApp(firebaseConfig);

  }
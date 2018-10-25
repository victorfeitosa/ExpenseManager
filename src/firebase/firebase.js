import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyAbOp-z8YRYaFuM8Hp6xghht8mNhpRb_DI",
  authDomain: "expense-manager-vrmf.firebaseapp.com",
  databaseURL: "https://expense-manager-vrmf.firebaseio.com",
  projectId: "expense-manager-vrmf",
  storageBucket: "expense-manager-vrmf.appspot.com",
  messagingSenderId: "831904817411"
};

firebase.initializeApp(config);

const db = firebase.database();

export { firebase, db as default };

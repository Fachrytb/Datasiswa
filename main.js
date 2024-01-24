
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyCDE9RCp2gUIyOG8hUEv5un0JlXqHWowkA",
  authDomain: "crud-6df8e.firebaseapp.com",
  projectId: "crud-6df8e",
  storageBucket: "crud-6df8e.appspot.com",
  messagingSenderId: "22846946310",
  appId: "1:22846946310:web:f393dbd1ff1ad9d61f1787"
};


const app = initializeApp(firebaseConfig);
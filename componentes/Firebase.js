
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBuLBTwqIgq66jjR9lVNaZ4LIZ4xaRGI20",
  authDomain: "appestagios-b03cc.firebaseapp.com",
  projectId: "appestagios-b03cc",
  storageBucket: "appestagios-b03cc.firebasestorage.app",
  messagingSenderId: "486323413398",
  appId: "1:486323413398:web:06c72734fc3a5888d47db7",
  measurementId: "G-LJEN2KYQ55"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export{auth};
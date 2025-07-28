// Import Firebase functions
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, push, set, update, remove, onValue } from 'firebase/database';

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBBFUfHvIfPXEW45Yi0Z3-_Xb6ABZKx0o",
  authDomain: "fyauto-46a06.firebaseapp.com",
  projectId: "fyauto-46a06",
  storageBucket: "fyauto-46a06.appspot.com",
  messagingSenderId: "341258545838",
  appId: "1:341258545838:web:d3aaff5f55be81cc8f5b3f",
  measurementId: "G-23KEVSRX1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

// Export to use in other files
export { auth, database, ref, push, set, update, remove, onValue };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration"AIzaSyBp9yL1kon0z4I3YbnJrwspiw9Jt3C08Ok"
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "interviewiq-8e239.firebaseapp.com",
  projectId: "interviewiq-8e239",
  storageBucket: "interviewiq-8e239.firebasestorage.app",
  messagingSenderId: "801817513731",
  appId: "1:801817513731:web:9369679f332c82dd8ea336"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
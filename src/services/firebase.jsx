// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//OPCIONAL SI SE APLICA DEBEN PASAR LAS VARIABLES DEL ENTORNO AL PROFE Y TUTOR
//  apiKey: import.meta.env.VITE_API_KEY,


const firebaseConfig = {
  apiKey: "AIzaSyCl3LNF0jOSHJn3JicWMpnerzxABBR1dac",
  authDomain: "coder-flex-87990.firebaseapp.com",
  projectId: "coder-flex-87990",
  storageBucket: "coder-flex-87990.firebasestorage.app",
  messagingSenderId: "870932876287",
  appId: "1:870932876287:web:cc5936a7c6389ba102f5ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Exportar la instacia de firestore.
export const db = getFirestore(app)
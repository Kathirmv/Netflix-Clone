// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword
    ,getAuth,
     signInWithEmailAndPassword, 
     signOut} from "firebase/auth";
import {addDoc,
     collection,
     getFirestore} from "firebase/firestore"; 
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyCvFdTXoTspCOMlbEGr7vYuLQTnEuan0Ik",
  authDomain: "netsflix-clone.firebaseapp.com",
  projectId: "netsflix-clone",
  storageBucket: "netsflix-clone.firebasestorage.app",
  messagingSenderId: "164156239848",
  appId: "1:164156239848:web:5acb1e672503c8f7d27e5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
const signup=async(name,email,password)=>{
    try{

       const res= await createUserWithEmailAndPassword(auth,email,password);
       const user=res.user;
       await addDoc(collection(db,"user"),{
        uid: user.uid,
        name,
        authprovider:"local",
        email,
       });
        

    }
    catch(error){
         console.log(error);
         toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}
const login= async(email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password);
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}
const logout=()=>{
    signOut(auth);
}
export {auth,db,login,signup,logout};
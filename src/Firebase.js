
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyDdKgaz2no_hYn5TAVr8JvxH04Vghv8KS0",
  authDomain: "netflix-clone-9fcc1.firebaseapp.com",
  projectId: "netflix-clone-9fcc1",
  storageBucket: "netflix-clone-9fcc1.firebasestorage.app",
  messagingSenderId: "721036138699",
  appId: "1:721036138699:web:28be9fcc36d16c7d4b234e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
const auth = getAuth(app)
const db = getFirestore(app);

const signup = async(name,email,password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email: user.email
        })
    }
    catch(error){
        console.log(error);
        alert(error);
    }
}

const login = async(email,password)=>{
    try{
        signInWithEmailAndPassword(auth,email,password)
    }catch(error){
        console.log(error);
        alert(error);
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, signup, login, logout};
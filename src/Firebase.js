
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

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
        toast.success("Signup successful! 🎉");
    }
    catch(error){
        console.log(error);
        toast.error(error.code)
    }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login successful! ✅");
  } catch (error) {
    console.log(error);
    toast.error(error.code.replace("auth/", "").replace(/-/g, " "));
  }
};


const logout = ()=>{
    signOut(auth);
}

export {auth, db, signup, login, logout};
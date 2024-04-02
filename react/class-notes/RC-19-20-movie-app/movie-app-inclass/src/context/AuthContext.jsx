import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";

//! create context
const AuthContext = createContext();

//? context provider

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");

  const register = async (email, password,displayName) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
        displayName: displayName
      })
    console.log(userCredential);
  };
  const login = async (email, password) => {
     await signInWithEmailAndPassword(auth, email, password)
  };
  const logout = () => {
    signOut(auth)
  }

  const userObserver = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          console.log(user)
          const {email,displayName,photoURL} = user;
          console.log(user.displayName)
          setCurrentUser({email,displayName,photoURL})
        } else {
          // User is signed out
          // ...
          setCurrentUser(false)
        }
      });
  }

  console.log(currentUser)
  useEffect(()=>{
    userObserver()
  },[])

  return (
    <AuthContext.Provider value={{ currentUser,register,login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

//* consumer with custom hook
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;

import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const context = createContext();
const auth = getAuth(app);

const AuthContex = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoadign] = useState(true);

  const signup = (email, password) => {
      setLoadign(true)
      return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
      setLoadign(true)
      return signInWithEmailAndPassword(auth, email, password)

  }

  const logout =()=>{
      signOut(auth)
  }

  useEffect(() => {
      const unsubscrib = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser)
          setLoadign(false)

      })
      return () => unsubscrib()
  }, [])

  const authInfo = {user, logout, signup, login }

  return (
    <div>
      <context.Provider value={authInfo}>{children}</context.Provider>
    </div>
  );
};

export default AuthContex;

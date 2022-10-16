import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app)

const UserContexts = ({children}) => {
     const [user, setUser] = useState({displayName: 'saadi'});
     const createUser = (email, password) =>{
          return createUserWithEmailAndPassword(auth, email, password);
     }
     const signIn = (email, password) =>{
          return signInWithEmailAndPassword(auth, email, password);
     }
     const logOut = () =>{
          return signOut(auth);
     }
     useEffect( () =>{
          const unsubscribe = onAuthStateChanged(auth, currentUser =>{
               setUser(currentUser);
               console.log('auth state changed', currentUser)
          })
          return () => {
               unsubscribe();
          }
     } ,[])

     const authInfo = {user, createUser, signIn, logOut};

     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default UserContexts;
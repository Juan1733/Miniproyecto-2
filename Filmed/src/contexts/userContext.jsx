import React, { useContext, createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { getUserProfile } from "../firebase/users/users-service";

export const UserContext = createContext(null);

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);


  useEffect(() => {
    onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const profile = await getUserProfile(firebaseUser.email);
        setUser({
          id: firebaseUser.uid,
          name: firebaseUser.displayName,
          email: firebaseUser.email,
        });
      }
      
    });
  }, []);


  return (<UserContext.Provider 
  value={{
    user,
    }} >{children}</UserContext.Provider>);
}

export function useUser() {
  return useContext(UserContext);
}
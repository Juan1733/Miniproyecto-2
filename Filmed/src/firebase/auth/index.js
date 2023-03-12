import {
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    getAdditionalUserInfo,
  } from "firebase/auth";
  import { auth, googleProvider } from "../config";
  import { createUser } from "../users";
  
  // HANDLE SING IN OR REGISTER USING GOOGLE PROVIDER
  export const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // const { isNewUser } = getAdditionalUserInfo(result);
    }catch (error) {
      console.error("GOOGLE SIGN IN FAILED", { error });
    }
  };
  
  
  // HANDLE REGISTER WITH EMAIL AND PASSWORD
  export const registerWithEmailAndPassword = async ({
    userData,
    onSuccess,
    onFail,
  }) => {
    try {
      const { email, password, ...restData } = userData;
      const firebaseResult = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
  
      await createUser({
        ...restData,
        email,
        uid: firebaseResult.user.uid,
      });
  
      // SUCCESS CALLBACK
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("REGISTER FAILED", { error });
      if (onFail) {
        onFail();
      }
    }
  };
  
  // HANDLE LOGIN WITH EMAIL AND PASSWORD
  export const loginWithEmailAndPassword = async ({
    userData,
    onSuccess,
    onFail,
  }) => {
    try {
      const { email, password } = userData;
      await signInWithEmailAndPassword(auth, email, password);
  
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("LOGIN FAILED", { error });
  
      if (onFail) {
        onFail();
      }
    }
  };
  
  // HANDLE USER SIGN OUT
  export const logout = async (callback) => {
    try {
      await signOut(auth);
      
  
      if (callback) {
        callback();
      }
    } catch (error) {
      console.error("SIGN OUT FAILED", { error });
    }
  }; 
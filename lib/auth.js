import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from "./firebase";

const authContext = createContext();

export function AuthProvider({ children }) {
 const auth = useProvideAuth();
 return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
 return useContext(authContext);
};

const handleUser = (rawUser) => {
 if (rawUser) {
  const user = formatUser(rawUser);
  setUser(user);
  return user;
 } else {
  setUser(false);
  return false;
 }
};

function useProvideAuth() {
 const [user, setUser] = useState(null);

 console.log(user);

 const signinWithGithub = () => {
  return firebase
   .auth()
   .signInWithPopup(new firebase.auth.GithubAuthProvider())
   .then((response) => handleUser(response));
 };

 const signout = () => {
  return firebase
   .auth()
   .signOut()
   .then(() => handleUser(false));
 };

 useEffect(() => {
  const unsubscribe = firebase.auth();

  return () => unsubscribe();
 }, []);

 return {
  user,
  signinWithGithub,
  signout,
 };
}

const formatUser = (user) => {
 return {
  uid: user.uid,
  email: user,
  name: user.displayName,
  provider: user.provider[0].providerId,
 };
};

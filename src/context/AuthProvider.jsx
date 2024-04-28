import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)


    const Auth = getAuth(app);


    // Create New User With Email & Password
    const createNewUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    // Login a Existing User
    const loginUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(Auth, email, password)
    }


    // Logged out a user
    const loggedOutUser = () => {
        setLoader(true)
        return signOut(Auth)
    }

    useEffect(() => {
      const unSubscribed = onAuthStateChanged(Auth, (currentUser) => {
        setLoader(false);
        setUser(currentUser);
      });

      return () => {
        unSubscribed();
      }
    }, [Auth]);

    

  const authInfo = { user, createNewUser, loggedOutUser, loginUser, loader, setUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;

import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    const Auth = getAuth(app);


    // Create New User With Email & Password
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    // Login a Existing User
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(Auth, email, password)
    }


    // Logged out a user
    const loggedOutUser = () => {
        setLoading(true);
        return signOut(Auth)
    }

    useEffect(() => {
      const unSubscribed = onAuthStateChanged(Auth, (currentUser) => {
        setLoading(false);
        setUser(currentUser);
      });

      return () => {
        unSubscribed();
      }
    }, [Auth]);

    

  const authInfo = {
    user,
    createNewUser,
    loggedOutUser,
    loginUser,
    loading,
    setUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;

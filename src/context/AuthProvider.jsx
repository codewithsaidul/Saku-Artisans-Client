import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    const Auth = getAuth(app);


    const githubProvider = new GithubAuthProvider();

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

    // Sign In a Existing User With Github 
    const githubSignIn = () => {
      setLoading(true);
      return signInWithPopup(Auth, githubProvider)
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
    githubSignIn,
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

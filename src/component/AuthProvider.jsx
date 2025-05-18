import React from 'react';
import { AuthContexts } from '../contexts/AuthContexts';
import { auth } from '../firebase/firebse.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({ children }) => {
    
  const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        createUser,
        signInUser
    }
    return (
        <AuthContexts value={userInfo}>
            {children}
       </AuthContexts>
    );
};

export default AuthProvider;
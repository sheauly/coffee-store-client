import React from 'react';
import { AuthContexts } from '../contexts/AuthContexts';
import { auth } from '../firebase/firebse.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({ children }) => {
    
  const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        createUser
    }
    return (
        <AuthContexts value={userInfo}>
            {children}
       </AuthContexts>
    );
};

export default AuthProvider;
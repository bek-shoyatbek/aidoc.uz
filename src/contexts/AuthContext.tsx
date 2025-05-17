import React, {createContext, type ReactNode, useContext, useEffect, useState} from 'react';
import {jwtDecode} from 'jwt-decode';
import type {CredentialResponse} from '@react-oauth/google';

// Define the user type
interface User {
    email: string;
    name: string;
    picture: string;
    sub: string;
}

// Define the context type
interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (credentialResponse: CredentialResponse) => void;
    logout: () => void;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType>({
    user: null,
    isAuthenticated: false,
    login: () => {
    },
    logout: () => {
    },
});

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    // Check if a user is already logged in on the component mount
    useEffect(() => {
        const storedToken = localStorage.getItem('googleToken');
        if (storedToken) {
            try {
                const decodedUser = jwtDecode<User>(storedToken);
                setUser(decodedUser);
                setIsAuthenticated(true);
            } catch (error) {
                console.error('Error decoding token:', error);
                localStorage.removeItem('googleToken');
            }
        }
    }, []);

    const login = (credentialResponse: CredentialResponse) => {
        const {credential} = credentialResponse;
        if (!credential) throw new Error('No credential found');

        localStorage.setItem('googleToken', credential);

        try {
            const decodedUser = jwtDecode<User>(credential);
            setUser(decodedUser);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Error decoding token:', error);
        }
    };

    // Logout function
    const logout = () => {
        localStorage.removeItem('googleToken');
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{user, isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

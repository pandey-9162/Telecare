// import React, { createContext, useState, useEffect } from 'react';
// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const loggedUser = JSON.parse(localStorage.getItem('user'));
//         if (loggedUser) {
//             setUser(loggedUser);
//         }
//     }, []);

//     const login = (userData) => {
//         setUser(userData);
//         localStorage.setItem('user', JSON.stringify(userData)); 
//     };

//     const logout = () => {
//         setUser(null);
//         localStorage.removeItem('user');
//     };

//     return (
//         <AuthContext.Provider value={{ user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate(); // Use useNavigate hook

    useEffect(() => {
        const loggedUser = JSON.parse(localStorage.getItem('user'));
        if (loggedUser) {
            setUser(loggedUser);
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData)); 
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        alert('You have been logged out successfully');
        navigate('/'); // Navigate to the home page
    };

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

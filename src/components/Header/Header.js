
import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { AuthContext } from '../../AuthContext';
import UserDropdown from '../UserDropdown/UserDropdown';

function Header() {
    const { user, logout } = useContext(AuthContext);
    const [isHome, setIsHome] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Check if the user is on the home page
        setIsHome(location.pathname === '/');
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navbar navbar-expand-lg bg-body-tertiary navbar border-bothrefm border-body ${isHome ? 'sticky-top' : ''}`} data-bs-theme="dark">
            <div className="navbar-left">
                <h2 id="logo">MeetMyDoc</h2>
            </div>
            <div className="">
                <input placeholder=' Search...'></input>
                </div>
            <div className="navbar-right">
                {user ? (
                    <>
                        <UserDropdown logout={logout} />
                    </>
                ) : (
                    <>
                        <Link to="/login" className="login">Log in</Link>
                        <Link to="/register" className="signup">Sign up</Link>
                    </>
                )}
                <div className="menu-icon" onClick={toggleMenu}>
                    ☰
                </div>
            </div>
        </nav>
    );
}

export default Header;

import React, { useContext, useState, useEffect } from 'react';

import { Link, useLocation, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import { AuthContext } from '../../AuthContext';
import UserDropdown from '../UserDropdown/UserDropdown';

function NavBar() {
    const { user, logout } = useContext(AuthContext);
    const [isHome, setIsHome] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsHome(location.pathname === '/');
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navbar navbar-expand-lg bg-body-tertiary navbar border-bothrefm border-body ${isHome ? 'sticky-top' : ''}`} data-bs-theme="dark">
            <div className="navbar-left">
            <Link to="/"><h2 id="logo">MeetMyDoc</h2></Link>   
            </div>
            <div className={`navbar-center ${isMenuOpen ? 'mobile-menu' : ''}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} aria-current="page">Home</NavLink>
        <NavLink to="/service" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Services</NavLink>
        <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
        About
        </NavLink>
      </div>
            <div className="navbar-right">
                {user ? (
                        <div className='right-item'>
                            <Link to='/mycredit'><div className='credit-'>Credit</div></Link>
                            <UserDropdown logout={logout} />
                        </div>
                    
                ) : (
                    <>
                        <Link to="/login" className="login">Log in</Link>
                        <Link to="/register" className="signup">Sign up</Link>
                        </>
                )}
                <div className="menu-icon" onClick={toggleMenu}>
                    {isMenuOpen ? '✖' : '☰'}
                </div>
            </div>
        </nav>
    );
}
export default NavBar;



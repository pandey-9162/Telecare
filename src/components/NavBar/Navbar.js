import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import { AuthContext } from '../../AuthContext';
import UserDropdown from '../UserDropdown/UserDropdown';



function NavBar() {
    const { user, logout } = useContext(AuthContext);
    const [isHome, setIsHome] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const [dropdown, setDropdown] = useState(false);

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
        <Link to="/" className="nav-link" aria-current="page">Home</Link>
        <div 
          className="nav-link" 
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
          onClick={() => setDropdown(!dropdown)}
        >
          Our Services
          {dropdown && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/services/individual" className="dropdown-link">Individual Services</Link>
              </li>
              <li>
                <Link to="/services/clinical" className="dropdown-link">Clinical Services</Link>
              </li>
              <li>
                <Link to="/services/organization" className="dropdown-link">Organizational Services</Link>
              </li>
            </ul>
          )}
        </div>
        <Link to="/contactus" className="nav-link">Contact us</Link>
      </div>
            <div className="navbar-right">
                {user ? (
                        <div className='right-item'>
                            <Link to='/mycredit'><div className='credit-'>Credit {user.credits}</div></Link>
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



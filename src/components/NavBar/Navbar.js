import React from 'react';
import { Link ,useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';


function NavBar() {
    const [isHome, setIsHome] = React.useState(false);
    const location = useLocation();

    React.useEffect(() => {
        // Check if the user is on the home page
        setIsHome(location.pathname === '/');
    }, [location]);
    return (
        <nav className={`navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border-bothrefm border-body ${isHome ? 'sticky-top' : ''}`} data-bs-theme="dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auhref">
                        <li className="nav-item m-1">
                            <Link to="/" className="nav-link fs-3" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item m-1 ms-3">
                            <Link to="/about" className="nav-link fs-3">About us</Link>
                        </li>
                        <li className="nav-item m-1 ms-3">
                            <Link to="/contactus" className="nav-link fs-3">Contact us</Link>
                        </li>
                        <li className="nav-item m-1 ms-3">
                        <Link to="/contactus" className="nav-link fs-3">Our services</Link>
                        </li>
                    </ul>
                    
                    <ul className="navbar-nav">
                        <li className="nav-item m-1 me-3">
                            <Link to="/register" className="nav-link fs-3">Register</Link>
                        </li>
                        <li className="nav-item m-1 me-3">
                            <Link to="/login" className="nav-link fs-3">Sign In</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

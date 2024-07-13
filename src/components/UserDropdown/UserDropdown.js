// src/components/UserDropdown.js
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { AuthContext } from '../../AuthContext';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarCheck, faCrown, faGear, faHandshakeAngle, faMoneyBill, faNotesMedical, faPrescription, faRightFromBracket, faUser, faUserTag} from '@fortawesome/free-solid-svg-icons';


const UserDropdown = ({ logout }) => {
  const {user} = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <div className="user-dropdown" onClick={toggleDropdown} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <div className="dropdown-icon">
      <FontAwesomeIcon className="icon" icon={faUser}/>
      </div>
      {isOpen && (
        <div className="dropdown-card">
          <span className="username">{user.name}</span>
          <Link to="/myprofile" className="dropdown-item">
          <FontAwesomeIcon icon={faUserTag}/> My Profile</Link>
          <Link to="/subscription" className="dropdown-item">
          <FontAwesomeIcon className="icon" icon={faCrown}/>Subscription</Link>
          <Link to="/my-appointment" className="dropdown-item">
          <FontAwesomeIcon className="icon" icon={faCalendarCheck}/> My Appointments</Link>
          <Link to="/subscription" className="dropdown-item">
          <FontAwesomeIcon className="icon" icon={faNotesMedical}/>
           Medical Records</Link>
          <Link to="/subscription" className="dropdown-item">
          <FontAwesomeIcon className="icon" icon={faPrescription}/> Prescriptions</Link>
          <Link to="/subscription" className="dropdown-item">
          <FontAwesomeIcon className="icon" icon={faMoneyBill} /> Payment History</Link>
          <Link to="/subscription" className="dropdown-item">
          <FontAwesomeIcon className="icon" icon={faHandshakeAngle}/>Support</Link>
          <Link to="/subscription" className="dropdown-item">
          <FontAwesomeIcon className="icon" icon={faGear}/> Settings</Link>
          <div onClick={logout} className="dropdown-item">
          <FontAwesomeIcon className="icon" icon={faRightFromBracket}/>  Logout</div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;

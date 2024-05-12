import React from 'react';
import "./Header.css";

const Header = () => {
  return(
    <div className='header'>
        <div className='content'>
            <div>MeetMyDoc</div>
            <div className='search'>
                <input
                    type="text"
                    placeholder="Search..."
                />
            </div>
            <div>
                user name 
            </div>
        </div>
    </div>
  );
};

export default Header;

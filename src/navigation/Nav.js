import { Link } from 'react-router-dom';
import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <div className="links d-flex">
      <Link to="/" className="rockets nav">
        Rockets
      </Link>
      <Link to="Mission" className="missions nav">
        Missions
      </Link>
      <Link to="Myprofile" className="profile nav">
        My Profile
      </Link>
    </div>
  );
}

export default Nav;

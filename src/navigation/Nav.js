import { Link } from 'react-router-dom';
import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <div className="links d-flex">
      <Link to="/" className="reckets">
        Rockets
      </Link>
      <Link to="Mission" className="missions">
        Missions
      </Link>
      <Link to="Myprofile" className="profile">
        My Profile
      </Link>
    </div>
  );
}

export default Nav;

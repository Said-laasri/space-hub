import { NavLink } from 'react-router-dom';
import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <div className="links d-flex">
      <NavLink to="/" className="rockets nav" activeClassName="active">
        Rockets
      </NavLink>
      <NavLink to="Mission" className="missions nav">
        Missions
<<<<<<< HEAD
      </Link>
      <Link to="Myprofile" className="profiles">
=======
      </NavLink>
      <NavLink to="Myprofile" className="profile nav">
>>>>>>> dev
        My Profile
      </NavLink>
    </div>
  );
}

export default Nav;

import { Link } from 'react-router-dom';
import React from 'react';

function Nav() {
  return (
    <div>
      <Link to="Rockets" className="reckets">
        Rockets
      </Link>
      <Link to="/" className="missions">
        Missions
      </Link>
      <Link to="Pyprofile" className="profile">
        My Profile
      </Link>
    </div>
  );
}

export default Nav;

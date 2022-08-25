import Nav from './Nav';
import planet from '../images/planet1.png';
import './Header.css';

function Header() {
  return (
    <div className="header d-flex">
      <div className="logo-container d-flex">
        <img className="logo" src={planet} alt="universe" />
        <h1>Space Travelers Hub</h1>
      </div>
      <Nav />
    </div>
  );
}

export default Header;

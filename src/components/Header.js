import Nav from './Nav';
import planet from '../images/planet.png';

function Header() {
  return (
    <div>
      <img src={planet} alt="universe" />
      <h1>Space Travelers Hub</h1>
      <Nav />
    </div>
  );
}

export default Header;

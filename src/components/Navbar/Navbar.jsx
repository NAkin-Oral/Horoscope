import logo from '../../helpers/logo.png';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" width="100px" />
      </div>
      <div className="links">
        <a className="link" href="#Horoscope">
          Horoscope
        </a>
        <a className="link" href="#Daily">
          Daily
        </a>
        <a className="link" href="#Tarot">
          Tarot
        </a>
        <a className="link" href="#Articles">
          Articles
        </a>
        <a className="link" href="#Contact">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;

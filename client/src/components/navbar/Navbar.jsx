import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar-image" src={Logo} alt="model"></img>
      <div className="nav-items">
        <Link to="/">
          <ul>HOME</ul>
        </Link>
        <Link to="/about-us">
          <ul>ABOUT US</ul>
        </Link>
        <Link to="/contact-us">
          <ul>CONTACT US</ul>
        </Link>
        <ul>Log in</ul>
      </div>
    </div>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/home" className="link">
        Kavlium ❤️
      </Link>
      <div className="two">
        <Link to="/contact" className="link">
          Contacts
        </Link>
        <Link to="/registration" className="link">
          Registration Form
        </Link>
      </div>
    </nav>
  );
}

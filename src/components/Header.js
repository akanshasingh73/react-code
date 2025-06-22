import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameLogin, setBtnNameLogin] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" src={LOGO_URL}></img>
      </div>
      <div className="nav-bar">
        <ul className="inline-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              onClick={() => {
                btnNameLogin === "Login"
                  ? setBtnNameLogin("Logout")
                  : setBtnNameLogin("Login");
              }}
            >
              {btnNameLogin}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

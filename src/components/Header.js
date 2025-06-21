import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [btnNameLogin, setBtnNameLogin] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" src={LOGO_URL}></img>
      </div>
      <div className="nav-bar">
        <ul className="inline-list">
          <li>Home</li>
          <li>About Us</li>
          <li>Sign In</li>
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

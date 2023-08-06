import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome =
    location.pathname === "/" ||
    location.pathname === "/signin" ||
    location.pathname === "/signup";
  const isLoggedIn = localStorage.getItem("username");
  const handleSignOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("secret");
    navigate("/signin");
  };
  return (
    <div>
      <div className="Home">
        <header>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.FuROGMNJAGUaKpGRKZBNlQHaF7&pid=Api&P=0&h=180"
            alt="logo"
            width="50px"
            class="collegelogo"
          />
          {isHome && (
            <nav>
              <ul>
                <li>
                  <button id="signup" onClick={() => navigate("/signup")}>
                    Sign Up
                  </button>
                </li>
                <li>
                  <button id="signin" onClick={() => navigate("/signin")}>
                    Sign In
                  </button>
                </li>
              </ul>
            </nav>
          )}
          {isLoggedIn && !isHome && (
            <nav>
              <ul>
                <li>
                  <button id="signup" onClick={() => navigate("/dashboard")}>
                    Dashboard
                  </button>
                </li>
                <li>
                  <button id="signin" onClick={handleSignOut}>
                    Sign Out
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </header>
      </div>
    </div>
  );
};

export default NavBar;

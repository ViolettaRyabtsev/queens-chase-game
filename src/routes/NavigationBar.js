import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navigation.style.scss";
import { useState } from "react";
const menu = ["Sign In", "Tell us that you think"];
const NavigationBar = () => {
  const [listOpen, setListOpen] = useState(false);
  return (
    <Fragment>
      <div className="navigation-container">
        <div className="logo-container">logo</div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            {" "}
            Start Game{" "}
          </Link>
          <GiHamburgerMenu
            className="nav-link"
            onClick={() => setListOpen(!listOpen)}
          />
          {listOpen ? (
            <div className="dropdown-menu">
              <ul style={{ "list-style": "none" }}>
                <li>
                  <Link className="links-hidden" to="./sign-in">
                    {" "}
                    Sign In{" "}
                  </Link>
                </li>
                <li>
                  <Link className="links-hidden" to="./tell-us">
                    {" "}
                    Tell us that you think{" "}
                  </Link>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;

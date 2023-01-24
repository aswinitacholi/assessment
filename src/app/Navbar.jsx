import React, { useState } from "react";
import AirLineDropDown from "../airline/AirLineDropDown";
import PassengerDropDown from "../passenger/PassengerDropDown";
import "./Navbar.css";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 700) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 700) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <ul className="nav-menu">
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            List Of Flights <i className="fas fa-caret-down" />
            {dropdown && <AirLineDropDown />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            About Passengers <i className="fas fa-caret-down" />
            {dropdown && <PassengerDropDown />}
          </li>
        </ul>
      </nav>
    </>
  );
}

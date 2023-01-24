import React, { useState } from "react";
import "../common/style.css";
import { Link } from "react-router-dom";

export const PassengerItems = [
  {
    title: "Passenger List",
    path: "/passenger",
    className: "dropdown-link",
  },
  {
    title: "Add Passenger Data",
    path: "/passengerform",
    className: "dropdown-link",
  },
  {
    title: "Update Passenger Data",
    path: "/passengerform",
    className: "dropdown-link",
  },
];

const PassengerDropDown = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {PassengerItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.className}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PassengerDropDown;

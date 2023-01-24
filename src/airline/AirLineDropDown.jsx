import React, { useState } from "react";
import "../common/style.css";
import { Link } from "react-router-dom";

export const AirLineItems = [
  {
    title: "AirLine List",
    path: "/",
    className: "dropdown-link",
  },
  {
    title: "Add AirLine Data",
    path: "/airLineform",
    className: "dropdown-link",
  },
];

const AirLineDropDown = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {AirLineItems.map((item, index) => {
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

export default AirLineDropDown;

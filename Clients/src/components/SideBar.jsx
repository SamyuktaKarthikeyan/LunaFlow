import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";

function SideBar() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("/");

  const handleClick = (path) => {
    navigate(path);
    setActiveItem(path);
  };

  return (
    <div style={{ paddingTop: "5vh" }}>
      <ul className="sidebar">
        <li
          onClick={() => handleClick("/dashboard")}
          className={
            activeItem === "/dashboard" ? "sidebar-item active" : "sidebar-item"
          }
        >
          Community{" "}
        </li>
        <li
          onClick={() => handleClick("/dashboard/period")}
          className={
            activeItem === "/dashboard/period"
              ? "sidebar-item active"
              : "sidebar-item"
          }
        >
          Periods Calculator
        </li>
        <li
          onClick={() => handleClick("/dashboard/menstrualfoods")}
          className={
            activeItem === "/dashboard/menstrualfoods"
              ? "sidebar-item active"
              : "sidebar-item"
          }
        >
          Menstrual Foods
        </li>
        <li
          onClick={() => handleClick("/dashboard/pregnancy")}
          className={
            activeItem === "/dashboard/pregnancy"
              ? "sidebar-item active"
              : "sidebar-item"
          }
        >
          Pregnancy Calculator
        </li>
        <li
          onClick={() => handleClick("/dashboard/pregnancyfoods")}
          className={
            activeItem === "/dashboard/pregnancyfoods"
              ? "sidebar-item active"
              : "sidebar-item"
          }
        >
          Pregnancy Foods
        </li>
        <li
          onClick={() => handleClick("/dashboard/doctor")}
          className={
            activeItem === "/dashboard/doctor"
              ? "sidebar-item active"
              : "sidebar-item"
          }
        >
          Doctor Chat
        </li>
        {/* <li
          onClick={() => handleClick('/dashboard/food')}
          className={activeItem === '/dashboard/food' ? 'sidebar-item active' : 'sidebar-item'}
        >
          Food Orders
        </li>
        <li
          onClick={() => handleClick('/dashboard/billing')}
          className={activeItem === '/dashboard/billing' ? 'sidebar-item active' : 'sidebar-item'}
        >
          Billing
        </li> */}
      </ul>
    </div>
  );
}

export default SideBar;

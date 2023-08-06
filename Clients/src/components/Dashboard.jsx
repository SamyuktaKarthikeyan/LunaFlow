import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <div style={{ marginTop: "7vh", display: "flex" }}>
      <div style={{ width: "25%" }}>
        <SideBar />
      </div>
      <div style={{ width: "75%", marginTop: "30px", overflowX: "hidden" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

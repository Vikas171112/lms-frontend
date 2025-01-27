import React from "react";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Drawer from "../Drawer/Drawer";

function HomeLayout() {
  return (
    <div>
      <Drawer />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomeLayout;

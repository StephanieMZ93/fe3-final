import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="Layout">
      <Navbar />
      <Outlet />
      {/* <Card/> */}
      <Footer />
    </div>
  );
}

export default Layout;

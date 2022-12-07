import React from "react";
import { Outlet } from "react-router-dom";

import { ThemeProvider } from "../../context/ThemeContext.jsx";
import { DataProvider } from "../../context/DataContext.jsx";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

function Layout() {
  return (
    <div className="Layout">
      <ThemeProvider>
        <DataProvider>
          <Navbar />
          <Outlet />
          <Footer />
        </DataProvider>
      </ThemeProvider>
    </div>
  );
}

export default Layout;

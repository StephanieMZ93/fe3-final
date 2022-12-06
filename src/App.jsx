import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {Routes, Route, Outlet, useRoutes, BrowserRouter as Router, Link} from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Card from "./Components/Card";
import Layout from "./Components/layout/Layout";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" exact element={Home} />
        <Route path="/contact" element={Contact} />
        <Route path="/favs" element={Favs} />
        <Route path="/detail/:id" element={Detail} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
        <Outlet/> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import {Routes, Route} from "react-router-dom";

import Home from "./routes/home/Home";
import Contact from "./routes/contact/Contact";
import Favs from "./routes/favs/Favs";
import Detail from "./routes/detail/Detail";
import Layout from "./Components/layout/Layout";

function App() {
  return (
    <div className="App">
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

import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./components/Home";
import Create from "./components/Create";
import Update from "./components/Update"



const App = () => {

  return (
    <Router>
      <Routes>
        <Route name="Home" path="/" element={<Home />} />
        <Route name="Create" path="/create" element={<Create />} />
        <Route name="Update" path="/update/:id" element={<Update />} />
        {/* <Route name="Delete" path="/delete" element={<Delete />} /> */}
      </Routes>
    </ Router>

  );
};

export default App;
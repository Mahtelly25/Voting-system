import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCandidate from "./pages/AddCandidate";

import Home from "./pages/Home";
import "./app.css";
import Candidates from "./pages/Candidates";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/add-candidate" element={<AddCandidate />}></Route>
          <Route path="/candidates" element={<Candidates />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;

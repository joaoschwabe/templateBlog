import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

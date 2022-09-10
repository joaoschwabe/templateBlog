import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/post/:id" exact element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;

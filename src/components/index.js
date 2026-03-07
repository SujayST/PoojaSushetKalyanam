import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./layout/PageNotFound";
import Home from "./home";

/* Routing All page will be here */
const Routes1 = (props) => {
  return (
    <Router history={window.history} >
      <Routes>
        {/* Public Routes */}
        <Route exact path="/" element={<Home/>} />
        {/* 404 Page */}
        <Route element={<PageNotFound/>} />
      </Routes>
    </Router>
  );
};

export default Routes1;

import React, { Component } from "react";
import "jquery";
import "bootstrap/dist/js/bootstrap.js";
import "popper.js/dist/umd/popper.js";
import "bootstrap/dist/css/bootstrap.css";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Home } from "./pages/Home";
import { Men } from "./pages/men";
import Login from "./pages/Login";
import Women from "./pages/women";
import Layout from "./Layout";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/men" element={<Men category={"men"} />} />
            <Route path="/women" element={<Men category={"women"}/>} />
            <Route path="/children" element={<Men category={"kids"}/>} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    );
  }
}
import React, { Component } from "react";
import "jquery";
import "bootstrap/dist/js/bootstrap.js";
import "popper.js/dist/umd/popper.js";
import "bootstrap/dist/css/bootstrap.css";
import {
  Routes,
  Route
} from 'react-router-dom';
import { Home } from "./pages/Home";
import { Men } from "./pages/men";
import Login from "./pages/Login";
import Layout from "./Layout";
import { ProductDetails } from "./pages/productDetails";

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:cat" element={<Men />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    );
  }
}
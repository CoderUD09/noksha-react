import React, { Component } from "react";
import "jquery";
import "bootstrap/dist/js/bootstrap.js";
import "popper.js/dist/umd/popper.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Routes,
  Route
} from 'react-router-dom';
import { Home } from "./pages/Home";
import { Men } from "./pages/men";
import Login from "./pages/Login";
import Layout from "./Layout";
import { SearchResult } from "./pages/search";
import { AdminDashboard } from "./pages/admin/adminDashboard";
import { UserProfile } from "./pages/user";
import { ProductDetails } from "./pages/productDetails";
import { Cart } from "./pages/cart";

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:cat" element={<Men />} />
          <Route path="/search/:inp" element={<SearchResult />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route exact path="/admin" element={<AdminDashboard />} />
          <Route exact path="/user" element={<UserProfile />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    );
  }
}
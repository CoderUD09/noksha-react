import React, { Component } from "react";
import "jquery";
import "bootstrap/dist/js/bootstrap.js";
import "popper.js/dist/umd/popper.js";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import NavBar from "./pages/navBar";
import Footer from "./pages/footer";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Home />
        <Footer />
      </BrowserRouter>
    );
  }
}
import React, { Component } from "react";
import Flower from "../components/flower";
import Noksha from "../components/noksha";

export default class navBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="mainNavbar border-bottom">
          <div className="logo">
            <div className="logo-part-1">
              <Flower />
            </div>
            <div className="logo-part-2">
              <Noksha />
            </div>
          </div>
          <div className="containerSb">
            <form>
              <input type="search" placeholder="Search..." />
              <button type="submit">Search</button>
            </form>
          </div>

          <ul className="nav-menu">
            <li className="nav-elem">
              <a href="/#" className="active">
                HOME
              </a>
            </li>
            <li className="nav-elem">
              <a href="/#">MEN</a>
            </li>
            <li className="nav-elem">
              <a href="/#">WOMEN</a>
            </li>
            <li className="nav-elem">
              <a href="/#">CHILDREN</a>
            </li>
          </ul>
          <div className="icon">
            <ul className="nav-menu">
              <i className="fa fa-shopping-cart fa-custom fa-2x"></i>
              <a href="/#" className="icon">
                <i className="fa fa-user fa-custom fa-2x"></i>
              </a>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

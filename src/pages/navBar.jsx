import React, { useContext } from "react";
import { useLocation, useNavigate, Link, useParams } from "react-router-dom";
import Flower from "../components/flower";
import Noksha from "../components/noksha";
import { UserContext } from "../states/userContext";
import Dropdown from 'react-bootstrap/Dropdown';

export const NavBar = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/login" } };
  const { cat } = useParams();
  const logOut = (event) => {
    event.preventDefault();
    localStorage.clear();
    navigate(from);
  }
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
            <Link to="/" className={cat === null ? 'active' : ''}>HOME</Link>
          </li>
          <li className="nav-elem">
            <Link to="/men" className={cat === 'men' ? 'active' : ''}>MEN</Link>
          </li>
          <li className="nav-elem">
            <Link to="/women" className={cat === 'women' ? 'active' : ''}>WOMEN</Link>
          </li>
          <li className="nav-elem">
            <Link to="/kids" className={cat === 'kids' ? 'active' : ''}>KIDS</Link>
          </li>
        </ul>
        <div className="icon">
          <ul className="nav-menu">
            <i className="fa fa-shopping-cart fa-custom fa-2x"></i>
            {user?.name ? (
              <Dropdown size="sm" variant="secondary">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {user.name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                  <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Link to="/login" className="icon">
                <i className="fa fa-user fa-custom fa-2x"></i>
              </Link>
            )}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

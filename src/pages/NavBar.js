import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container } from 'reactstrap';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Container>
        <Link className="navbar-brand" to="/">
          Darkmode-test
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link"
              activeClassName="active"
              exact={true}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/post" className="nav-link" activeClassName="active">
              Post
            </NavLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default NavBar;

import React from "react";

import { Navbar, Button, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useAuthState, useAuthDispatch, logout } from "../Context/index";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = (props) => {
  const dispatch = useAuthDispatch();
  const userDetails = useAuthState();
  const history = useHistory();

  const handleLogout = () => {
    logout(dispatch);
    console.log(history);
    history.push("/login");
  };

  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand>Junk Stonks</Navbar.Brand>

      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>

        {userDetails.userDetails.account_type === 1 ? (
          <LinkContainer to="/investor">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
        ) : null}

        {userDetails.userDetails.account_type === 1 ? (
          <LinkContainer to="/investor/investments">
            <Nav.Link>Explore Funds</Nav.Link>
          </LinkContainer>
        ) : null}

        {userDetails.userDetails.account_type === 2 ? (
          <LinkContainer to="/company">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
        ) : null}
        {userDetails.userDetails.account_type === 2 ? (
          <LinkContainer to="/company/investorlist">
            <Nav.Link>Investors</Nav.Link>
          </LinkContainer>
        ) : null}
      </Nav>

      {Boolean(userDetails.token) ? (
        <Button variant="outline-info" onClick={handleLogout}>
          Log Out
        </Button>
      ) : null}
      {!Boolean(userDetails.token) ? (
        <>
          <LinkContainer to="/login">
            <Button variant="outline-info">Log In</Button>
          </LinkContainer>

          <LinkContainer to="/signup">
            <Button variant="outline-info">Sign Up</Button>
          </LinkContainer>
        </>
      ) : null}
    </Navbar>
  );
};

export default NavBar;

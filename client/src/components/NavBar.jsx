import React from 'react';
import { Navbar, NavItem, Nav} from 'react-bootstrap';

const NavBar = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#home">Flashcard-Maker</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">
        Create
      </NavItem>
      <NavItem eventKey={2} href="#">
        My Flashcards
      </NavItem>
    </Nav>
  </Navbar>
);

export default NavBar;
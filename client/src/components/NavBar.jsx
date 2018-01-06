import React from 'react';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap';

const NavBar = ({flashcards}) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Flashcard-Maker</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <NavDropdown eventKey={2} title="My Flashcards" id="nav-dropdown">
        {flashcards.map((flashcard, index) => (
          <MenuItem 
            key={index} 
            onClick={() => console.log('I got click')}
          >
            {flashcard.topic}
          </MenuItem>
        ))}
      </NavDropdown>
    </Nav>
  </Navbar>
);

export default NavBar;
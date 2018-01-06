import React from 'react';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap';

const NavBar = ({topics, handleTopicSelection}) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Flashcard-Maker</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <NavDropdown eventKey={2} title="My Flashcards" id="nav-dropdown">
        {topics.map((topic, index) => (
          <MenuItem 
            key={index}
            onClick={() => handleTopicSelection(topic)}
          >
            {topic}
          </MenuItem>
        ))}
      </NavDropdown>
    </Nav>
  </Navbar>
);

export default NavBar;
import React from 'react';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap';

const NavBar = ({topics, handleTopicSelection}) => (
  <Navbar inverse fixedTop={true} style={{marginBottom: '1'}}>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#home">Flashcard-Maker</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <NavItem eventKey={1} href="#study">
        Study
      </NavItem>
      <NavItem eventKey={2} href="#create-form">
        Create
      </NavItem>
      <NavDropdown eventKey={3} title="My Flashcards" id="nav-dropdown">
        <MenuItem>All</MenuItem>
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
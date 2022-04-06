import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button  } from 'react-bootstrap';
// import SignUpForm from './SignupForm';
// import LoginForm from './LoginForm';

// import Auth from '../utils/auth';

const AppNavbar = () => {
  // set modal display state
  // const [showModal, setShowModal] = useState(false);

  return (
    <Navbar bg="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand className='display-1 text-warning' href="/">Meat Ticket</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link className='text-light' href="#action1">Random</Nav.Link>
          {/* <Nav.Link href="#action2">Enter</Nav.Link> */}
          <NavDropdown title={<span className='text-light'>Enter</span>} id="navbarScrollingDropdown">
            
            <NavDropdown.Item href="signup">Login</NavDropdown.Item>
            <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            {/* <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item> */}
          </NavDropdown>
          {/* <Nav.Link href="#" disabled>
            Link
          </Nav.Link> */}
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Enter zip code"
            className="me-2"
            aria-label="Search"
          />
          <Button href="result" variant="outline-warning">Search Nearby</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )}

export default AppNavbar;

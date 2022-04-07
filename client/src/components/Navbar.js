import React, { useState } from 'react';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button  } from 'react-bootstrap';
// import Results from './components/Results';
// import SignUpForm from './SignupForm';
// import LoginForm from './LoginForm';

// import Auth from '../utils/auth';

const AppNavbar = () => {

  const [searchInput, setSearchInput] = useState('');

  const navigate = useNavigate();

  
    const handleClick = () => {
  
     navigate (`/results/`+searchInput);
     
    };
  

  return (
    <Navbar bg="dark" expand="lg">
  
  <Container fluid>
      <Navbar.Brand className='display-1 text-warning' href="/">MEAL TICKET</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link className='text-light'>Random</Nav.Link>
          {/* <Nav.Link href="#action2">Enter</Nav.Link> */}
          <NavDropdown title={<span className='text-light'>Enter</span>} id="navbarScrollingDropdown">
            
            <NavDropdown.Item > <NavLink to={"/login"}>Login</NavLink></NavDropdown.Item>
            
            
            <NavDropdown.Item> <NavLink to={"/signup"}>Signup</NavLink></NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            {/* <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item> */}
          </NavDropdown>
          {/* <Nav.Link href="#" disabled>
            Link
          </Nav.Link> */}
        </Nav>
        <Form  className="d-flex"  >
        {/* onSubmit={handleFormSubmit} */}
          <FormControl
           name="searchInput"
           value={searchInput}
           onChange={(e) => setSearchInput(e.target.value)}
            type="search"
            placeholder="Enter zip code"
            className="me-2"
            aria-label="Search"
          />
          <Button onClick={handleClick} type="submit" variant="outline-warning">Search Nearby</Button>
          {/* onClick={handleClick} */}
        </Form>
      </Navbar.Collapse>
    </Container>
    
  </Navbar>
  )}

export default AppNavbar;

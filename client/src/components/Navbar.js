import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button  } from 'react-bootstrap';
// import SignUpForm from './SignupForm';
// import LoginForm from './LoginForm';

// import Auth from '../utils/auth';

const AppNavbar = (props) => {


  const navigate = useNavigate();

  
    const handleClick = (event) => {
      event.preventDefault();
    // get the values for the zip code the user input 


    // when the search button is clicked do a API call to gett the results 
    // when the results come back set it as a varaible. 

      const item = [




        {
          image: "https://th.bing.com/th/id/OIP.oQxkLYqGK6CHpKzsHLwMFAHaFM?pid=ImgDet&rs=1",
          title: "Cow Sandwich",
          description: "The place all the chics come to eat."
        },
        {
        image: "https://th.bing.com/th/id/R.46c2726825537e028da5d4cc13a1d897?rik=vaSJxALonWee5g&pid=ImgRaw&r=0",
        title: "Chucky BBQ",
        description: "get this food becasue it won't last long"
        },

        {
           image: "https://th.bing.com/th/id/R.363cbe94bb1935910e68fbbeb0a732b0?rik=bDZneuy3i5Uc%2fw&pid=ImgRaw&r=0",
           title: "Crazy Taco",
           description: "You are crazy if you're not eating at CRAZY TACO."
         },

    ]

    props.setHolder(props.searchInput)

    props.setResults(item)

      // set a variable that will pass values to the results page from home
      
    //  props.setPage(false) ;

     props.setSearchInput('');

     navigate("/results");
     
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
          <Nav.Link className='text-light' to="/login">Random</Nav.Link>
          {/* <Nav.Link href="#action2">Enter</Nav.Link> */}
          <NavDropdown title={<span className='text-light'>Enter</span>} id="navbarScrollingDropdown">
            <NavLink to={"/login"}>
            <NavDropdown.Item >Login</NavDropdown.Item>
            </NavLink>
            
            <NavDropdown.Item href="signup">Signup</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            {/* <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item> */}
          </NavDropdown>
          {/* <Nav.Link href="#" disabled>
            Link
          </Nav.Link> */}
        </Nav>
        <Form  className="d-flex" onSubmit={handleClick}>
        {/* onSubmit={handleFormSubmit} */}
          <FormControl
           name="searchInput"
           value={props.searchInput}
           onChange={(e) => props.setSearchInput(e.target.value)}
            type="search"
            placeholder="Enter zip code"
            className="me-2"
            aria-label="Search"
          />
          <Button type="submit" variant="outline-warning">Search Nearby</Button>
          {/* onClick={handleClick} */}
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )}

export default AppNavbar;

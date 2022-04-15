import React, { useState, useEffect } from 'react';
import AllMenuItems from "./AllMenuItems/index.jsx";
import Cart from "./Cart/index.jsx";


import { Row, Col, Container, NavDropdown, Form, FormControl, Button  } from 'react-bootstrap';



const Choice = ({holder}) => {

  const [containChoice, setContainChoice] = useState([])
  console.log( holder)
  useEffect(() => {

    setContainChoice(holder)
  
   }, []);


return (

  <Container fluid className=''>

    
    <img width="auto" height="300"
      className=" mt-3 rounded border border-3 mx-auto d-block "
      src={containChoice.image_url}
      alt="First slide"
    />
 <h1 className='display-1 text-center my-1'>{}</h1>
      <div className="container">
        <AllMenuItems />
        <Cart holder={holder} />
        </div>
</Container>
)

}

export default Choice;
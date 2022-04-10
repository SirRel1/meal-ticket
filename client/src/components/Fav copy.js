
import React, { useEffect, useState } from 'react';

import { Row, Col, Container, NavDropdown, Form, FormControl, Button  } from 'react-bootstrap';

import { Link, useParams } from 'react-router-dom';

// import axios from 'axios';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { QUERY_FAV } from '../utils/queries';





function Fav() {

  const [favs, setFavs] = useState([])

  const { loading, data } = useQuery(QUERY_FAV);

setFavs(data)
  return (
    <Container fluid className='px-5'>

    {loading} ? (
      <div>LOADING...</div>
    ) : (
    {/* map fuction to display the results */}
    {favs.map((item, index) => {
    
      return  ( 
    
   
    
        <div key={index} >
      <Row   className=' my-5 shadow-lg p-4 bg-white border border-5 border-dark'>
          <Col className="col-md-2">
          <img width="200" height="200"
          className=" float-end border border-5 border-dark "
          src= {item.imageurl}
          alt="First slide"
        />
          </Col>
          <Col className='pt-5'>
            <h1>{item.name}</h1>
            {/* <p>{item.location.address1}</p> */}
            <Button  variant="warning" >REMOVE</Button>
            {/* onClick={() => handleDelete(item.resid)} */}
            <Link to= {"/choice/"+item.resid}>
            <Button  variant="warning" >SELECT</Button>
            </Link>
          </Col>
        </Row>
        </div>
        );
    })
    })
    
     
    </Container>
  )
}

export default Fav
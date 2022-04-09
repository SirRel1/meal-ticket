
import React, { useEffect, useState } from 'react';

import { Row, Col, Container, NavDropdown, Form, FormControl, Button  } from 'react-bootstrap';

import { Link, useParams } from 'react-router-dom';

import axios from 'axios';


const Results = () => {

  const [results, setResults] = useState([])
  
 let params = useParams();

 const getResults = async (id) => {

  await axios.get (`https://yelp-backend.netlify.app/.netlify/functions/search?term=burger&location=${id}`
   
   )
   
   .then(data => {
    //  console.log(data)
    //  console.log(data.data)
    //  console.log(data.data.businesses)
    //  console.log(data.data.businesses[0].name)

     setResults(data.data.businesses)
     console.log (results)
 
 }).catch (err => {
     console.log(err)
 })
 } 



 useEffect(() => {

  getResults(params.id)

 }, [params.id]);




return (

  <Container fluid className='px-5'>

<h1>{params.id}</h1>

{/* map fuction to display the results */}
{results.map((item, index) => {

  return  ( 




    <Link key={index} to= {"/choice/"+item.id}>
  <Row   className=' my-5 shadow-lg p-4 bg-white border border-5 border-dark'>
      <Col className="col-md-2">
      <img width="200" height="200"
      className=" float-end border border-5 border-dark "
      src= {item.image_url}
      alt="First slide"
    />
      </Col>
      <Col className='pt-5'>
        <h1>{item.name}</h1>
        <p>{item.location.address1}</p>
        <Button variant="warning" href="choice">Select</Button>
      </Col>
    </Row>
    </Link>
    );
})
}
 
</Container>
)

}

export default Results;
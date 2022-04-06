
import React, { useState } from 'react';

import { Row, Col, Container, NavDropdown, Form, FormControl, Button  } from 'react-bootstrap';



const Results = (props) => {

  const [results, setResults] = useState( );
  
 

  // create function to handle saving a book to our database
  const handleSelected = (event) => {

    props.setSelected(props.results)

    console.log (props.results)
   event.stopPropagation()
  };






return (

  <Container fluid className='px-5'>

<h1>{props.holder}</h1>

{/* map fuction to display the results */}
{props.results.map((results) => {

// props.setSelected(results)
  return  ( 
  <Row  key={results.title} className=' my-5 shadow-lg p-4 bg-white border border-5 border-dark'>
      <Col className="col-md-2">
      <img width="200" height="200"
      className=" float-end border border-5 border-dark "
      src= {results.image}
      alt="First slide"
    />
      </Col>
      <Col className='pt-5'>
        <h1>{results.title}</h1>
        <p>{results.description}</p>
        <Button onClick={() => handleSelected} variant="warning" href="choice">Select</Button>
        <Button  variant="warning" href="choice">go</Button>
      </Col>
    </Row>);
})
}
 
</Container>
)

}

export default Results;
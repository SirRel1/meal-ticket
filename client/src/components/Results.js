


import { Row, Col, Container, NavDropdown, Form, FormControl, Button  } from 'react-bootstrap';



const Results = () => {


return (

  <Container fluid>

    <Row className='my-5 shadow-lg p-4 mb-4 bg-white'>
      <Col className="col-md-2">
      <img width="200" height="200"
      className=" float-end border border-5 border-warning "
      src="https://th.bing.com/th/id/R.46c2726825537e028da5d4cc13a1d897?rik=vaSJxALonWee5g&pid=ImgRaw&r=0"
      alt="First slide"
    />
      </Col>
      <Col className='pt-5'>
        <h1>Bob's BBQ Bar</h1>
        <p>Come get the best BBQ in town!</p>
      </Col>
    </Row>

    <Row className='my-5 shadow-lg p-4 mb-4 bg-white'>
      <Col className="col-md-2">
      <img width="200" height="200"
      className=" float-end border border-5 border-warning "
      src="https://th.bing.com/th/id/OIP.oQxkLYqGK6CHpKzsHLwMFAHaFM?pid=ImgDet&rs=1"
      alt="First slide"
    />
      </Col>
      <Col className='pt-5'>
        <h1>Cow Sandwich</h1>
        <p>The place all the chics come to eat.</p>
      </Col>
    </Row>

    <Row className='my-5 shadow-lg p-4 mb-4 bg-white'>
      <Col className="col-md-2">
      <img width="200" height="200"
      className=" float-end border border-5 border-warning "
      src="https://th.bing.com/th/id/R.363cbe94bb1935910e68fbbeb0a732b0?rik=bDZneuy3i5Uc%2fw&pid=ImgRaw&r=0"
      alt="First slide"
    />
      </Col>
      <Col className='pt-5'>
        <h1>Crazy Taco</h1>
        <p>You are crazy if you're not eating at CRAZY TACO.</p>
      </Col>
    </Row>

</Container>
)

}

export default Results;
import React, { useState, useEffect } from "react";


import {
  Container,
  Col,
  Row,
  Navbar,
  Form,
  Button,
  Card,
  CardColumns

} from "react-bootstrap";

const Home = () => {

  

return(

<div>
(<Container fluid className="p-5">
  <Row className=" shadow-lg p-4 mb-4 bg-white border border-5 border-dark">
    <Col>
    <img
      className="d-block w-100 border border-5 border-dark "
      src="https://4.bp.blogspot.com/-8FRVQIl-BSo/WB9VIYB4wqI/AAAAAAAAFy0/pXZzdJzb21YI0ip3AqgMMLY8lVxHPY4MwCLcB/s1600/meal_ticket.jpg"
      alt="First slide"
    />
    </Col>
    <Col>
    <h1 className="display-1 text-center pt-5">Come Get Your Meal Ticket!</h1>
    </Col>
  </Row>
</Container>)




  
</div>
)


}

export default Home;
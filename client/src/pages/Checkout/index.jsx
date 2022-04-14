import React, { useState } from "react";
// import logo from "../../image/MealTicket-Logo(no bg).png"
import "./checkout-style.css";
import wings from '../../image/wingsnfries.jpeg'
import trash from '../../image/trash.png'
import { Container, Form, Button, Modal, Tab, Dropdown, DropdownButton } from "react-bootstrap";
import map from "../../image/themap.png";
import {FaMapPin} from "react-icons/fa";
import {FaRegClock} from "react-icons/fa";
import {FaRegCreditCard} from "react-icons/fa";
import {FaTag} from "react-icons/fa";
import {FaTrashAlt} from "react-icons/fa";
import moment from 'moment' 



function Checkout() {
  const [order, setOrder] = useState("");
  const [showLaterModal, setshowLaterModal] = useState(false);
  const [showNowrModal, setshowNowModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [show, setShow] = useState(false);

  const handlePromoClose = () => setShowPromoModal(false);
  const handleLaterClose = () => setshowLaterModal(false);


  let today = moment().format('LL')
  let secondDay = moment().add(1, 'days').calendar();
  let thirdDay = moment().add(2, 'days').calendar();
  let fourthDay = moment().add(3, 'days').calendar();
  let fifthDay = moment().add(4, 'days').calendar();
  


  const handleSubmit = (e) => {
    e.preventDefault();
  

    alert(
      `Thank you ${order} for contacting  me. I will get back to you shortly...`
    );


    setOrder("");
  };

  return (

   
   
    <Container id="checkout">
       
        <div className="displayOrder">
            <h1>American Deli</h1>
            <img src={map} className="map"></img>
            <p className="loctext">
              <FaMapPin /> 695 Cascade Rd. , Suite M, Atlanta, GA 30331
            </p>
            <hr></hr>
            <div className="pickup">
              <div className="pickupText">
                <h3>Pickup Estimate</h3>
              </div>
              <div className="pickupTime">
                <h3>5-10min</h3>
              </div>
            </div>

            <Form className="schedule-order">
              {["radio"].map((type) => (
                <div key={`default-${type}`} className="mb-3 hey">
                  <Form.Check
                    active
                    type={type}
                    label={`Now`}
                    id={`Now-${type}`}
                  />
                  <hr className="schedule-line"></hr>

                  {/* FIX THE RADIO BUTTON FUNCTIONALITY */}
                  <Form.Check
                    active
                    type={type}
                    label={`Later`}
                    id={`Later-${type}`}
                    onClick={() => setshowLaterModal(true)}
                  />
                </div>
              ))}
              
            </Form>
            <hr></hr>
                        {/* ADD EDIT BUTTON */}
            <div className="pay-promo">
              <h3 className="paymentTitle">Payment</h3>
              <div className="addPayment">
                <h4><FaRegCreditCard /> Add payment method</h4>
                <button  onClick={() => setShowPaymentModal(true)} className="edit-btn-1">Edit </button>
                <hr></hr>
              </div>

              <div className="addPromo">
                <h4><FaTag /> Add Promo code</h4>
                <button className="edit-btn-2" onClick={() => setShowPromoModal(true)}>Edit </button>
                <hr></hr>
              </div>
            </div>
                {/* FIX YOUR ITEMS FORMATTING */}
            <div className="cart-box">
              <h3 className="your-items">Your items</h3>
              <div className="pickup">
                <img className="item-image" src={wings}></img>
                <p>Wings Meal (Fries and Drink)</p>
                {/* CHANGE THE TRASH FUNCTION */}
                <FaTrashAlt className="trash-icon" src={trash} onClick={() => setshowNowModal(true)} />
              </div>
            </div>

            <hr></hr>

            <Form className="notes-box">
              <Form.Group
                className="mb-3 notes"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Notes</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
            <Form>
            <Button
              type="submit"
              onClick={handleSubmit}
              className="placeOrder-btn"
              text="Place Order"
            >Place Order</Button>
          </Form>

          <div className="price">
              <div className="subtotal">
                <p>Subtotal</p>
              </div>
              <div className="subtotal-amnt">
                <p>$18.99</p>
              </div>
            </div>
          <div className="price">
              <div className="tax">
                <p>Taxes</p>
              </div>
              <div className="tax-amnt">
                <p>$2.99</p>
              </div>
            </div>
          <div className="price">
              <div className="total">
                <p>Total</p>
              </div>
              <div className="total-amnt">
                <p>$2.99</p>
              </div>
            </div>
            
          </div>
          <Modal
            size='sm'
            show={showLaterModal}
            onHide={() => setshowLaterModal(false)}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            {/* tab container to do either signup or login component */}
            <Tab.Container defaultActiveKey='login'>
              <Modal.Header closeButton>
                <Modal.Title id='signup-modal'> Pick a Time
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    Today {today}
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item href="#/action-1" active>
                       Today {today}
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2"> {secondDay}</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">{thirdDay}</Dropdown.Item>
                      <Dropdown.Item href="#/action-4">{fourthDay}</Dropdown.Item>
                      <Dropdown.Item href="#/action-4">{fifthDay}</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  {/* <DropdownButton
                    id="dropdown-button-dark-example2"
                    variant="secondary"
                    menuVariant="dark"
                    title="Dropdown button"
                    className="mt-2"
                  >
                    <Dropdown.Item href="#/action-1" active>
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                  </DropdownButton> */}

                  <Button onClick={handleLaterClose}>Schedule</Button>
                </Modal.Title>
              </Modal.Header>
            </Tab.Container>
          </Modal>

          <Modal
            size='sm'
            show={showNowrModal}
            onHide={() => setshowNowModal(false)}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            {/* tab container to do either signup or login component */}
            <Tab.Container defaultActiveKey='login'>
              <Modal.Header closeButton>
                <Modal.Title id='signup-modal'>
                  Hello
                </Modal.Title>
              </Modal.Header>
            </Tab.Container>
          </Modal>

          <Modal
            size='sm'
            show={showPaymentModal}
            onHide={() => setShowPaymentModal(false)}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            {/* tab container to do either signup or login component */}
            <Tab.Container defaultActiveKey='login'>
              <Modal.Header closeButton>
                <Modal.Title id='addpayment-modal'> Add payment method</Modal.Title>
              </Modal.Header>
            </Tab.Container>
          </Modal>


          <Modal
            size='sm'
            show={showPromoModal}
            onHide={() => setShowPromoModal(false)}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            {/* tab container to do either signup or login component */}
            <Tab.Container defaultActiveKey='login'>
              <Modal.Header closeButton>
                {/* <Modal.Title id='signup-modal'>Have a promo code?</Modal.Title> */}
              </Modal.Header>
              <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Have a promo code?</Form.Label>
                      <Form.Control
                        type="promo"
                        placeholder="Add promo code"
                        autoFocus
                      />
                    </Form.Group>
                                     </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handlePromoClose}>
                    Apply
                  </Button>
                </Modal.Footer>
            </Tab.Container>
          </Modal>



    </Container>

    
    

  );
}

export default Checkout;

// TO DO:
// {/* FIX THE RADIO BUTTON FUNCTIONALITY */}
// {/* ADD EDIT BUTTON */}
// {/* CHANGE THE TRASH FUNCTION */}
// {/* FIX YOUR ITEMS FORMATTING */}
// FIX TOTAL FORMATTING & CREATE FUNCTION THAT ADDS UP TOTAL
import React, { useState } from "react";
import { Offcanvas, Button, Container, Form } from "react-bootstrap";
import map from "../../image/themap.PNG";
import './ordermod-style.css'





function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [order, setOrder] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();

  
      alert(
        `Thank you ${order} for contacting  me. I will get back to you shortly...`
      );

      setOrder("");
    };

    return (
      <>
        <button onClick={handleShow} >
          {name}
        </button>

        
        <Offcanvas  show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
                <div >
                    <h1>American Deli</h1>
                    <img src={map} className="map"></img>
                    <p className="loctext-ofc">
                        {" "}
                        (icon)3695 Cascade Rd. , Suite M, Atlanta, GA 30331
                    </p>
                    <hr></hr>
                    {/* <div className="pickup-ofc">
                        <div className="pickupText-ofc">
                        <h3>(icon)Pick Estimate</h3>
                        </div>
                        <div className="pickupTime-ofc">
                        <h3>5-10min</h3>
                        </div>
                    </div> */}
{/* 
                    <Form>
                        {["radio"].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                            <Form.Check
                            active
                            type={type}
                            label={`Now`}
                            id={`Now-${type}`}
                            />
                            <Form.Check
                            active
                            type={type}
                            label={`Later`}
                            id={`Later-${type}`}
                            />
                        </div>
                        ))}
                    </Form> */}
                    <hr></hr>

                    {/* <div>
                        <h3 className="paymentTitle-ofc">Payment</h3>
                        <div className="addPayment-ofc">
                        <h4>Add payment method</h4>
                        <hr></hr>
                        </div>

                        <div className="addPromo-ofc">
                        <h4>Add Promo code</h4>
                        <hr></hr>
                        </div>
                    </div> */}

                    <div className="cart-box-ofc">
                        <h3>Your items</h3>
                        <div className="pickup-ofc">
                        <img className="item-image-ofc" src="#"></img>
                        <p>Wings Meal (Fries and Drink)</p>
                        <img className="item-image-ofc" src="#"></img>
                        </div>
                    </div>

                    <Form>
                        <Form.Group
                        className="mb-3"
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
                        className="placeOrder-btn-ofc"
                        text="Place Order"
                    >Place Order</Button>
                    </Form>
{/* 
                    <div className="price-ofc">
                        <div className="subtotal-ofc">
                        <p>Subtotal</p>
                        </div>
                        <div className="subtotal-amnt-ofc">
                        <p>$18.99</p>
                        </div>
                    </div>
                    <div className="price-ofc">
                        <div className="tax-ofc">
                        <p>Taxes</p>
                        </div>
                        <div className="tax-amnt-ofc">
                        <p>$2.99</p>
                        </div>
                    </div> */}
                    <div className="price-ofc">
                        <div className="total-ofc">
                        <p>Total</p>
                        </div>
                        <div className="total-amnt-ofc">
                        <p>$2.99</p>
                        </div>
                    </div>
                    
                    </div>

          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  function OrderModal() {
    return (
      <>
        {['end'].map((placement, idx) => (
          <OffCanvasExample key={idx} placement={placement} name={placement} className="displayOrder-ofc" />
        ))}

      </>

      
    );
  }
  
export default OrderModal;
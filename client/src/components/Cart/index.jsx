import { useEffect, useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { useMenuContext } from '../../utils/MenuContext'
import { GET_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
// import Auth from '../../utils/auth'
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { Offcanvas, Button, Form } from "react-bootstrap";
import './ordermod-style.css'
import {FaMapPin} from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa"
import Checkout from '../../pages/Checkout/index'
import map from "../../image/themap.png";




const Cart = ({holder}) => {
    console.log('This is the prop', holder)
    const [containChoice, setContainChoice] = useState([])
    const [state, dispatch] = useMenuContext();
    const [getCheckout, { data }] = useLazyQuery(GET_CHECKOUT);
  
    useEffect(() => {

      setContainChoice(holder)
    
    }, []);
  
    useEffect(() => {
      async function getCart() {
        const cart = await idbPromise('cart', 'get');
        dispatch({ type: ADD_MULTIPLE_TO_CART, items: [...cart] });
      }
  
      if (!state.cart.length) {
        getCart();
      }
    }, [state.cart.length, dispatch]);
  
    function toggleCart() {
      dispatch({ type: TOGGLE_CART });
    }
  
    function calculateTotal() {
      let sum = 0;
      state.cart.forEach((item) => {
        sum += item.price * item.purchaseQuantity;
      });
      return sum.toFixed(2);
    }
  
    function submitCheckout() {
      const itemIds = [];
  
      state.cart.forEach((item) => {
        for (let i = 0; i < item.purchaseQuantity; i++) {
          itemIds.push(item._id);
        }
      });
  
      getCheckout({
        variables: { items: itemIds },
      });
    }

    if (!state.cartOpen) {
        return (
          <div className="cart-closed" onClick={toggleCart}>
            <span role="img" aria-label="trash">
            <FaShoppingCart />
            </span>
          </div>
        );
      }

      
  function OffCanvasCart({ name, ...props }) {
    
      const handleClose = () => toggleCart();
      // const handleOpen = () => true;
      // const [order, setOrder] = useState("");



      return (
          
          <Offcanvas   show={state.cartOpen} onHide={handleClose} {...props}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>MealTicket</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                  <div>
       
                      <h1>{containChoice.foodname}</h1>
                      <img src={containChoice.image_url} className="map"></img>
                      <p className="loctext-ofc">
      
                          <FaMapPin /> {containChoice.location}
                      </p>
                      <hr></hr>
                  

                      <div className="cart-box-ofc">
                      {state.cart.length ? (
                          <div>
                              {state.cart.map((item) => (
                                  <CartItem key={item._id} item={item} />
                              ))}
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
                                          onClick={<Checkout />}
                                          className="placeOrder-btn-ofc"
                                          text="Place Order"
                                      >Place Order</Button>
                                  </Form>
                                  <div className="price-ofc">
                                      <div className="total-ofc">
                                      <p>Total</p>
                                      </div>
                                      <div className="total-amnt-ofc">
                                      <p>${calculateTotal()}</p>
                                  </div>
                                  </div>
                              </div>
                              
                          ) : (
                              <h3>
                              <span role="img" aria-label="shocked">
                                  😱
                              </span>
                              You haven't added anything to your cart yet!
                              </h3>
                          )}

                    
                      
                  </div>
                              </div>

            </Offcanvas.Body>
          </Offcanvas>
    
      );
  }
  

return (
    <>

      {['end'].map((placement, idx) => (
        <OffCanvasCart key={idx} placement={placement} name={placement} className="displayOrder-ofc" />
      ))}

    </>

    
  );
};

export default Cart;
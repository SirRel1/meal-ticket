import React from 'react';
import { Link } from "react-router-dom";
import { useMenuContext } from '../../utils/MenuContext';
import { ADD_TO_CART, UPDATE_CART_QUANTITY} from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import '../item-style.css'

function MenuItem(item) {
    const [state, dispatch] = useMenuContext();

    const {
        image,
        name,
        _id,
        price,
        description,
    } = item;

    
  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        items: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }



return (
    <div className="item">
      <Link to={`/items/${_id}`}>
      <img
          alt={name}
          src={`/menu-pics/${image}`}
        />
      </Link>
      <h4 className="item-title">{name}</h4>
      <div className="item-info">
        <span>$ {price}</span>
        <p>{description}</p>
      </div>      
      <button onClick={addToCart} >Order</button>
    </div>
  );
}
export default MenuItem;



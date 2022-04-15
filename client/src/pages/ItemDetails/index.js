import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../../components/Cart';
import { useMenuContext } from '../../utils/MenuContext.js';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_ITEMS
} from '../../utils/actions.js';
import { GET_ITEMS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from './spinner.gif'
import './itemDetails-style.css'




function ItemDetails() {
    const [state, dispatch] = useMenuContext();
    const { id } = useParams();

    const [currentItem, setCurrentItem] = useState({});

    const { loading, data } = useQuery( GET_ITEMS );

    const { items, cart } = state;

    useEffect(() => {

        if (items.length) {
          setCurrentItem(items.find((item) => item._id === id));
        }

        else if (data) {
          dispatch({
            type: UPDATE_ITEMS,
            items: data.items,
          });
    
          data.items.forEach((item) => {
            idbPromise('items', 'put', item);
          });
        }

        else if (!loading) {
            idbPromise('items', 'get').then((indexedItems) => {
              dispatch({
                type: UPDATE_ITEMS,
                items: indexedItems,
              });
            });
          }
        }, [items, data, loading, dispatch, id]);

        
        const addToCart = () => {
            const itemInCart = cart.find((cartItem) => cartItem._id === id);
            if (itemInCart) {
              dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
              });
              idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
              });
            } else {
              dispatch({
                type: ADD_TO_CART,
                item: { ...currentItem, purchaseQuantity: 1 },
              });
              idbPromise('cart', 'put', { ...currentItem, purchaseQuantity: 1 });
            }
          };
        

          const removeFromCart = () => {
            dispatch({
              type: REMOVE_FROM_CART,
              _id: currentItem._id,
            });
        
            idbPromise('cart', 'delete', { ...currentItem });
          };

          return (
            <div className='item-details-box'>
              
              {currentItem && cart ? (
                <div className="item-details">
                  <h1 className="store-title">Title of Store</h1>
                  <Link className='back-btn' to="/items/id">← Back to Items</Link>
                  <img
                    src={`/menu-pics/${currentItem.image}`}
                    alt={currentItem.name}
                    className='detail-img'
                  />
        
                  <h2 className='detail-title'>{currentItem.name}</h2>
                  
        
                  <p className='detail-desc'>{currentItem.description}</p>

                 
                  <p className='detail-desc'>
                    <strong>Price:</strong>${currentItem.price}{' '}
                    <button className='detail-button' onClick={addToCart}>Add to Cart</button>
                    <button
                      disabled={!cart.find((p) => p._id === currentItem._id)}
                      onClick={removeFromCart}
                      className='detail-button'
                    >
                      Remove from Cart
                    </button>
                  </p>

                  
        
        
                  
                </div>
              ) : null}
              {loading ? <img src={spinner} alt="loading" /> : null}
              <Cart />
            </div>
          );
        }




export default ItemDetails;

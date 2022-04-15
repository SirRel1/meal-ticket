import React, { useEffect, useState } from 'react';
import MenuItem from '../MenuItem';
import { useMenuContext } from '../../utils/MenuContext';
import { UPDATE_ITEMS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { GET_ALL_ITEMS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from './spinner.gif'
import '../item-style.css'

function AllMenuItems() {
  
    const [state, dispatch] = useMenuContext();
    const { loading, data } = useQuery(GET_ALL_ITEMS);

    const {currentItem} = state
    // useEffect(() => {

    //   setContainChoice(holder)
    
    // }, []);
    
    useEffect(() => {
        if (data) {
          dispatch({
            type: UPDATE_ITEMS,
            items: data.items,
          });
          data.items.forEach((item) => {
            idbPromise('items', 'put', item);
          });
        } else if (!loading) {
          idbPromise('items', 'get').then((items) => {
            dispatch({
              type: UPDATE_ITEMS,
              items: items,
            });
          });
        }
      }, [data, loading, dispatch]);
    
      function filterItems() {
        if (!currentItem) {
          return state.items;
        }

        return state.items.filter(
          (item) => item._id === currentItem
        );
      }
    

  return (

    <section className= "items">
     <h2> Menu Items:</h2>
      {state.items.length ? (
        <div className="in-between">
           
          {filterItems().map((item) => (
            <MenuItem
              key={item._id}
              _id={item._id}
              image={item.image}
              name={item.name} 
              price={item.price}
              description={item.description}
             
            />
          ))})

        </div>
      ) : (
        <h3>You haven't added any items yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </section>
    
  );
}


export default AllMenuItems;
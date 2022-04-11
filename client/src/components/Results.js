
import React, { useEffect, useState } from 'react';

import { Row, Col, Container, NavDropdown, Form, FormControl, Button  } from 'react-bootstrap';

import { Link, useParams } from 'react-router-dom';

import axios from 'axios';

import { useMutation } from '@apollo/client';
import { CREATE_Rest } from '../utils/mutations';




const Results = () => {

  const [results, setResults] = useState([])

  const [saveBook, { error }] = useMutation(CREATE_Rest);

  
  let params = useParams();



  const handleSaveFood = async (foodId) => {
    // find the book in `searchedBooks` state by the matching id
    const foodToSave = results.find((food) => food.id === foodId);


   


    // // get token
    // const token = Auth.loggedIn() ? Auth.getToken() : null;

    // if (!token) {
    //   return false;
    // }

    try {
      const { data } = await saveBook({
        // variables:   {id, image_url, foodname}=foodToSave ,
        variables: { resid: foodToSave.id, imageurl: foodToSave.image_url, name: foodToSave.foodname  },
      });
      // alert("Added to FAV")
      console.log(data);
      // setSavedBookIds([...savedBookIds, bookToSave.bookId]);
    } catch (err) {
      console.error(err);
    }
  };





 const getResults = async (id) => {

  await axios.get (`https://yelp-backend.netlify.app/.netlify/functions/search?term=restaurant&location=${id}`
   
   )
   
   .then(data => {
    //  console.log(data)
    //  console.log(data.data)
    //  console.log(data.data.businesses)
    //  console.log(data.data.businesses[0].name)


    const foodData = data.data.businesses.map((food) => ({
      id: food.id,
      image_url: food.image_url,
      foodname: food.name,
    
    }));




     setResults(foodData)
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




    <div key={index} >
  <Row   className=' my-5 shadow-lg p-4 bg-white border border-5 border-dark'>
      <Col className="col-md-2">
      <img width="200" height="200"
      className=" float-end border border-5 border-dark "
      src= {item.image_url}
      alt="First slide"
    />
      </Col>
      <Col className='pt-5'>
        <h1>{item.foodname}</h1>
        {/* <p>{item.location.address1}</p> */}
        <Button onClick={() => handleSaveFood(item.id)} variant="warning" >Fav</Button>
        <Link to= {"/choice/"+item.id}>
        <Button  variant="warning" >SELECT</Button>
        </Link>
      </Col>
    </Row>
    </div>
    );
})
}
 
</Container>
)

}

export default Results;
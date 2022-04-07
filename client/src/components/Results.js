

import React, { useEffect, useState } from 'react';

import { Row, Col, Container, NavDropdown, Form, FormControl, Button  } from 'react-bootstrap';

import { Link, useParams } from 'react-router-dom';


const Results = () => {

  const [results, setResults] = useState( [

          {
            image: "https://th.bing.com/th/id/OIP.oQxkLYqGK6CHpKzsHLwMFAHaFM?pid=ImgDet&rs=1",
            title: "Cow Sandwich",
            description: "The place all the chics come to eat."
          },
          {
          image: "https://th.bing.com/th/id/R.46c2726825537e028da5d4cc13a1d897?rik=vaSJxALonWee5g&pid=ImgRaw&r=0",
          title: "Chucky BBQ",
          description: "get this food becasue it won't last long"
          },
      
          {
             image: "https://th.bing.com/th/id/R.363cbe94bb1935910e68fbbeb0a732b0?rik=bDZneuy3i5Uc%2fw&pid=ImgRaw&r=0",
             title: "Crazy Taco",
             description: "You are crazy if you're not eat at CRAZY TACO."
           },
           {
            image: "https://th.bing.com/th/id/R.46c2726825537e028da5d4cc13a1d897?rik=vaSJxALonWee5g&pid=ImgRaw&r=0",
            title: "Chucky BBQ",
            description: "get this food becasue it won't last long"
            },
          ]
  )
  
 let params = useParams();

 function getResults() {

  const item = [

    {
      image: "https://th.bing.com/th/id/OIP.oQxkLYqGK6CHpKzsHLwMFAHaFM?pid=ImgDet&rs=1",
      title: "Cow Sandwich",
      description: "The place all the chics come to eat."
    },
    {
    image: "https://th.bing.com/th/id/R.46c2726825537e028da5d4cc13a1d897?rik=vaSJxALonWee5g&pid=ImgRaw&r=0",
    title: "Chucky BBQ",
    description: "get this food becasue it won't last long"
    },

    {
       image: "https://th.bing.com/th/id/R.363cbe94bb1935910e68fbbeb0a732b0?rik=bDZneuy3i5Uc%2fw&pid=ImgRaw&r=0",
       title: "Crazy Taco",
       description: "You are crazy if you're not eat at CRAZY TACO."
     },
]

setResults(item)
   
 }



//  useEffect(() => {

  // getResults("params")
  // getResults()


//   const item = [

//     {
//       image: "https://th.bing.com/th/id/OIP.oQxkLYqGK6CHpKzsHLwMFAHaFM?pid=ImgDet&rs=1",
//       title: "Cow Sandwich",
//       description: "The place all the chics come to eat."
//     },
//     {
//     image: "https://th.bing.com/th/id/R.46c2726825537e028da5d4cc13a1d897?rik=vaSJxALonWee5g&pid=ImgRaw&r=0",
//     title: "Chucky BBQ",
//     description: "get this food becasue it won't last long"
//     },

//     {
//        image: "https://th.bing.com/th/id/R.363cbe94bb1935910e68fbbeb0a732b0?rik=bDZneuy3i5Uc%2fw&pid=ImgRaw&r=0",
//        title: "Crazy Taco",
//        description: "You are crazy if you're not eat at CRAZY TACO."
//      },
//      {
//       image: "https://th.bing.com/th/id/R.46c2726825537e028da5d4cc13a1d897?rik=vaSJxALonWee5g&pid=ImgRaw&r=0",
//       title: "Chucky BBQ",
//       description: "get this food becasue it won't last long"
//       },
// ]

// setResults(item)
   

//  }, [params.id]);




return (

  <Container fluid className='px-5'>

<h1>{params.id}</h1>

{/* map fuction to display the results */}
{results.map((item) => {

// props.setSelected(results)
  return  ( 
    <Link to= {"/choice/"+item.title}>
  <Row  key={item.title} className=' my-5 shadow-lg p-4 bg-white border border-5 border-dark'>
      <Col className="col-md-2">
      <img width="200" height="200"
      className=" float-end border border-5 border-dark "
      src= {item.image}
      alt="First slide"
    />
      </Col>
      <Col className='pt-5'>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <Button variant="warning" href="choice">Select</Button>
      </Col>
    </Row>
    </Link>
    );
})
}
 
</Container>
)

}

export default Results;
import { useEffect, useState } from 'react';

// import axios from 'axios';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { QUERY_FAV } from '../utils/queries';
import { REMOVE_FAV } from '../utils/mutations';
import Taco_Gif from '../components/NavBar/img/taco-animated-gif.gif';


import { Row, Col, Container, Button } from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom';


function Fav() {
	// const [favs, setFavs] = useState()
	// const navigate = useNavigate();

	const { loading, data } = useQuery(QUERY_FAV);
	const [removeFav, { error }] = useMutation(REMOVE_FAV);

	const handleDeleteFav = async (id) => {
		try {
			const { data } = await removeFav({
				variables: { did: id },
			});
			// alert("FAV DELETED")
			console.log(data);
			// setFavs(data)
		} catch (err) {
			console.error(err);
		}

		window.location.reload();
		// navigate (`/fav`)
	};

	// useEffect(() => {
	// getResults(params.id)
	// alert("test")
	// window.location.reload()
	//  }, [favs]);

	if (loading) {
		return <img src= {Taco_Gif} /> ;
	} else {
		// console.log (data.savedRest)
		const test = data.savedRest;

		return (
			<Container fluid className="px-5">
				<h1> Your Favs</h1>

				{test.map((item, index) => {
					return (
						<div key={index}>
							<Row className=" my-5 shadow-lg p-4 bg-white border border-5 border-dark">
								<Col className="col-md-2">
									<img
										width="200"
										height="200"
										className=" float-end border border-5 border-dark "
										src={item.imageurl}
										alt="First slide"
									/>
								</Col>
								<Col className="pt-5">
									<h1>{item.name}</h1>
									{/* <p>{item.location.address1}</p> */}
									<Button
										onClick={() => handleDeleteFav(item.resid)}
										variant="warning"
									>
										REMOVE
									</Button>
									<Link to={'/choice/' + item.resid}>
										<Button variant="warning">SELECT</Button>
									</Link>
								</Col>
							</Row>
						</div>
					);
				})}
			</Container>
		);
	}
}

export default Fav;

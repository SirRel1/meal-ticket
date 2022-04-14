import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import {
	Nav,
	Container,
	NavDropdown,
	Form,
	FormControl,
	Button,
} from 'react-bootstrap';
import logo from './img/MealTicket-Logo(nobg).png';
import './navbar.css';

function Navbar() {
	const [searchInput, setSearchInput] = useState('');

	const navigate = useNavigate();

	const handleClick = () => navigate(`/results/` + searchInput);

	let [toggle, setToggle] = useState(false);

	// This is a handler that we will reference in our `onClick` attribute later
	const handleToggle = () => {
		setToggle(!toggle);
		console.log(`click`);
	};

	return (
		<div>
			<a href="/"><img className="logo" src={logo} alt="Meal Ticket Logo"></img></a>
			<nav className="">
				<ul className="navList" id={toggle ? 'active' : ''}>
					<a href="/">
						<li>Home</li>
					</a>
					<a href="#">
						<li>Order Now </li>
					</a>
					<a href="/favorites">
						<li>Favorites</li>
					</a>
					<a href="/cart">
						<li>Cart</li>
					</a>
					<a href="/login">
						<li>Login</li>
					</a>
					<a href="/signup">
						<li>Join</li>
					</a>
					<Form className="d-flex">
						<FormControl
							name="searchInput"
							value={searchInput}
							onChange={(e) => setSearchInput(e.target.value)}
							type="search"
							placeholder="Enter zip code"
							className="me-2"
							aria-label="Search"
						/>
						<Button
							onClick={handleClick}
							type="submit"
							variant="outline-warning"
						>
							Search Nearby
						</Button>
					</Form>
					
				</ul>

				<div className="menu" onClick={handleToggle}>
					<div className="menu-line"></div>
					<div className="menu-line"></div>
					<div className="menu-line"></div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;

// {toggle ? "navList" : "hide"}

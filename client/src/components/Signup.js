import {
	Alert,
	Navbar,
	Nav,
	Container,
	NavDropdown,
	Form,
	FormControl,
	Button,
} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { createUser } from '../utils/mutations';

const Signup = () => {
	const [userFormData, setUserFormData] = useState({
		firstname: '',
		lastname: '',
		email: '',
		password: '',
	});

	const [validated] = useState(false);

	const [showAlert, setShowAlert] = useState(false);

	const [addUser, { error }] = useMutation(createUser);

	useEffect(() => {
		if (error) {
			setShowAlert(true);
		} else {
			setShowAlert(false);
		}
	}, [error]);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserFormData({ ...userFormData, [name]: value });
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		try {
			const { data } = await addUser({
				variables: { ...userFormData },
			});
			console.log(data);
			Auth.login(data.addUser.token);
		} catch (err) {
			console.error(err);
		}

		setUserFormData({
			firstname: '',
			lastname: '',
			email: '',
			password: '',
		});
	};

	return (
		<Container className="p-5 mt-5 bg-white border border-5 border-dark">
			<Form noValidate validated={validated} onSubmit={handleFormSubmit}>
				<Alert
					dismissible
					onClose={() => setShowAlert(false)}
					show={showAlert}
					variant="danger"
				>
					Something went wrong with your signup!
				</Alert>
				<Form.Group className="mb-3" controlId="formFirstname">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						name="firstname"
						type="text"
						placeholder="Enter first name"
						onChange={handleInputChange}
						value={userFormData.firstname}
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formLastname">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						name="lastname"
						type="text"
						placeholder="Enter last name"
						onChange={handleInputChange}
						value={userFormData.lastname}
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						name="email"
						type="email"
						placeholder="Enter email"
						onChange={handleInputChange}
						value={userFormData.email}
						required
					/>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						name="password"
						type="password"
						placeholder="Password"
						onChange={handleInputChange}
						value={userFormData.password}
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					{/* <Form.Check type="checkbox" label="Check me out" /> */}
				</Form.Group>
				<Button
					variant="warning"
					type="submit"
					disabled={
						!(
							userFormData.firstname &&
							userFormData.lastname &&
							userFormData.email &&
							userFormData.password
						)
					}
				>
					Submit
				</Button>
			</Form>
		</Container>
	);
};

export default Signup;

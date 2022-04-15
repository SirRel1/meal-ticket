import React, { useState } from 'react';
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
import { useMutation } from '@apollo/client';
import { loginUser } from '../utils/mutations';
import Auth from '../utils/auth';


const Login = () => {
	const [userFormData, setUserFormData] = useState({ email: '', password: '' });
	const [validated] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
  const [login, { error }] = useMutation(loginUser);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserFormData({ ...userFormData, [name]: value });
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		// check if form has everything (as per react-bootstrap docs)
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		try {
			const { data } = await login({
        variables: { ...userFormData },
        
      });

      console.log(data);
      Auth.login(data.login.token);

		} catch (err) {
			console.error(err);
			setShowAlert(true);
		}

		setUserFormData({
			email: '',
			password: '',
		});
	};

	return (
		<Container className="p-5 mt-5 bg-white border border-5 border-dark">
			<Form noValidate validated={validated} onSubmit={handleFormSubmit}>
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
				<Button variant="warning" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	);
};

export default Login;

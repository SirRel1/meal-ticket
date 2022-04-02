import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button  } from 'react-bootstrap';



const Login = () => {


return (

  <Container className='p-5 mt-5 bg-white border border-5 border-dark' >
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    {/* <Form.Check type="checkbox" label="Check me out" /> */}
  </Form.Group>
  <Button variant="warning" type="submit">
    Submit
  </Button>
</Form>
</Container>
)

}

export default Login;
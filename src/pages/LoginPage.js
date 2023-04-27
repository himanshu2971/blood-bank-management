import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

//SignUp logic has to be intoduced which will be stored and upon login details would be validated 
const LoginPage =() => {
  const [userType, setUserType] = useState('donor'); //Pre set value is donor out of the 4 options 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);  // Password Change handler and will store in database from next phase 
  }

  const handleLogin = (event) => {
    event.preventDefault(); //Default validation of submission of form e.g no blank submission and @ should be in the email 
    
  }
// Will Implement login logic in Next Phase
  return (
    <div
      className="container-fluid login my-3"
      style={{ backgroundColor: "#faebd7" }}
    >
      <h1 className="text-center text-danger">Login</h1>
      <Form className="col-8 offset-4" onSubmit={handleLogin}>
        <label className=" my-2" aria-required>
          User Type: &nbsp;&nbsp;
          <select value={userType} onChange={handleUserTypeChange}>
            <option value="donor">Donor</option>
            <option value="admin">Admin</option>
            <option value="hospital">Hospital</option>
            <option value="bloodbank">Blood Bank</option>
          </select>
        </label>
        <Form.Group controlId="formBasicEmail" className="my-2 col-6">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="my-2 col-6">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </Form.Group>

        <Button className="my-2 col-6" variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LoginPage;

//Form.group - React Bootstrap Method  used to group the form elements together 
// controlId prop is a unique identifier 
//Form.control is used to create the input field 
//onChange is set to function handleEmailChange,handlePasswordChange wich will update when user inputs 
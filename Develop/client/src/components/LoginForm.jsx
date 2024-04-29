// see SignupForm.js for comments
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const LoginForm = ({ handleFormSubmit }) => {
  const [showAlert, setShowAlert] = useState(false);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const loginSuccess = await handleFormSubmit(email, password);
    if (!loginSuccess) {
      setShowAlert(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
      {showAlert && <Alert variant="danger">Invalid email or password.</Alert>}
    </Form>
  );
};

export default LoginForm;

import React, { useState } from 'react';
import { Navbar, Nav, Container, Modal, Button, Tab } from 'react-bootstrap';
import LoginForm from './LoginForm';
import SignupForm from './signupform';

const MyNavbar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={toggleModal}>Login / Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login / Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tab.Container id="login-signup-tabs" defaultActiveKey="login">
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="login">Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="signup">Sign Up</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignupForm />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
};

export default MyNavbar;


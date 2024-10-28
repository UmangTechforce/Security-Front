import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">Security Front-end</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

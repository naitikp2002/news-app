import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
function NavBar() {
  return (
    <div><>
    <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand href="/home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  </></div>
  )
}

export default NavBar
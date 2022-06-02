import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
function NavBar() {
  return (
    <div><>
    <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand href="/business">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/business">Business</Nav.Link>
        <Nav.Link href="/entertainment">Entertainment</Nav.Link>
        <Nav.Link href="/health">Health</Nav.Link>
        <Nav.Link href="/science">Science</Nav.Link>
        <Nav.Link href="/sports">Sports</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  </></div>
  )
}

export default NavBar
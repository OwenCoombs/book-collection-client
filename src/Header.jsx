import { Link } from "react-router-dom"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="text-center">
          <Navbar.Brand href="/">TRK</Navbar.Brand>
          <Nav className="text-center">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="#features">Collections</Nav.Link>
            <Nav.Link href="/profile">Your Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
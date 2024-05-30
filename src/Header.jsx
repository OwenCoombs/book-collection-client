import { Link } from "react-router-dom"
import Logo from "./assets/Nook.svg"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BookImg from './assets/Books.svg'

function Header() {
  return (
    <>
      <Navbar id="Header">
        <Container className="text-center">
          <Navbar.Brand href="/" id="navlogo"><img src={BookImg} style={{width: 110}}></img></Navbar.Brand>
          <Nav className="text-center">
            <Nav.Link href="/login" id="navs">Login</Nav.Link>
            <Nav.Link href="#features" id="navs">Collections</Nav.Link>
            <Nav.Link href="/profile" id="navs">Your Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
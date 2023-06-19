import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";
import Logo from '../images/logo.png'
import React from "react";
function Navb() {
  return (

    
      <Navbar className='mainstyle'  expand="lg mb-3" >
        <Container>
          <Navbar.Brand  href="#home">
            <img src={Logo} alt="logo" className="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" navbar">
              <Nav.Link >Home</Nav.Link>
              <Nav.Link >about us</Nav.Link>
              <Nav.Link >explore food</Nav.Link>
              <Nav.Link >reviews</Nav.Link>
              <Nav.Link >faq</Nav.Link>
            
            </Nav>
            <Nav className='number'>
            <Nav.Link id='numberphon'>+0723948572</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   );
}


export default Navb;

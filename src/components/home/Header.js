
import Container from 'react-bootstrap/Container';
import React from 'react';
import Col from 'react-bootstrap/Col';
import './Header.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import {CgPushChevronRight} from "react-icons/cg"
function Header() {
    return (
      
        <Container className='header'>
     <div className='title'>
        <Col> <h2>Good food choices<br/> are good investments.</h2></Col>
        <Col> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Etiam et purus a odio finibus bibendum amet leo.</p></Col>
      </div>
      <div className='button'>
       <button  id='button1'>Order Now
       <AiOutlineShoppingCart className='icon1'/>
       </button>
        <button id='button2'>Learn More 
        <CgPushChevronRight className='icon2'/>
        </button>
      </div>

    
        
        </Container>

    )
}
export default Header
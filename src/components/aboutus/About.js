import Row from "react-bootstrap/Row"
import Container from 'react-bootstrap/Container';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Img from '../../images/1.png'
import './About.css'
function About() {
    return(
        <Container className="style" >
        <Row className="about">

            <Col className="leftside"> 
                    <img src={Img} alt="" className="aboutimg"/>
            </Col>


            <Col className="rightside"> 
           <h2>We pride ourselves on<br/> making real food from the<br/> best ingredients.</h2>
           <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Etiam et purus a odio finibus bibendum in sit amet leo.<br/> Mauris feugiat erat tellus.</p>
           <button className="aboutbutton">Learn More</button>
            </Col>
          


        </Row>

    </Container>
    )
}
export default About
import Row from "react-bootstrap/Row"
import Container from 'react-bootstrap/Container';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Img1 from '../../images/about1.png'
import {TiTick} from 'react-icons/ti'
import './Aboutus.css'
function Aboutus() {
    return(
<Container className="styleabout" >
        <Row className="about1">

            <Col className="leftside1"> 
                   
                    <h2>We make everything by hand <br/> with the best possible <br/>ingredients.</h2>
           <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Etiam et purus a odio finibus bibendum in sit amet leo.<br/> Mauris feugiat erat tellus.Far far away, behind the word <br/> mountains, far from the countries Vokalia and Consonantia,<br/> there live the blind texts.</p>
            <p><TiTick id="icon2"/>Etiam sed dolor ac diam volutpat.</p>
            <p><TiTick id="icon2"/> Erat volutpat aliquet imperdiet.  </p>
            <p><TiTick id="icon2" />purus a odio finibus bibendum.</p>
         
           <button className="aboutbutton1">Learn More</button>
            </Col>


            <Col className="rightside1"> 
            <img src={Img1} alt="" className="aboutimg"/>
            </Col>
          


        </Row>

    </Container>
    )
}
export default Aboutus
import './foods.css'
import Row from "react-bootstrap/Row"
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import React from 'react';
import Imag1 from '../images/food1.jpg'
import Imag2 from '../images/food2.jpg'
import Imag3 from '../images/food3.jpg'
function Foods() {
    return (
        <>
        <Container className='foodstyle'> 
     
            <Row className='row1'>
                <h2>Explore Our Foods</h2>
                <p id='discription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet <br />leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and<br /> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
            </Row>
            <Row className='row2'>
                <Col className='colF1'>
                    <img alt=''  src={Imag1} />
                    <h4>Rainbow Vegetable Sandwich</h4>
                    <p>Raspberry Stuffed French Toast</p>
                    <div className='price d-flex '>
                        <p>$10.50 </p>
                        <p id='oldprice'> $11.70</p>
                    </div>
                </Col>


                <Col className='colF2'>
                    <img alt='' src={Imag2} />
                    <h4>Vegetarian Burger</h4>
                    <p>Time: 30 - 45 Minutes | Serves: 1</p>
                    <div className=' price d-flex '>
                        <p >$9.20</p>
                        <p id='oldprice'> $10.50</p>
                    </div>

                </Col>


                <Col className='colF3'>
                    <img alt=''  src={Imag3} />
                    <h4>Raspberry Stuffed French Toast</h4>
                    <p>Time: 10 - 15 Minutes | Serves: 1</p>
                    <div className='price d-flex '>
                        <p>$12.50 </p>
                        <p id='oldprice'>$13.20</p>
                    </div>
                   
                </Col>


                </Row>
        
        </Container>
        <Container className='food5'>
            <Row >
                <Col className='fcol1'>
                <button id='bu1'>Order Now</button>
                </Col>
                <Col className='fcol2'>
                <button id='bu1'>Order Now</button>
                </Col>
                <Col className='fcol3'>
                <button id='bu1'>Order Now</button>
                </Col>
            </Row>
        </Container>
  
</>
          
    )
}
export default Foods
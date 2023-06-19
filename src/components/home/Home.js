import Row from "react-bootstrap/Row"
import Container from 'react-bootstrap/Container';
import React from 'react';
import Col from 'react-bootstrap/Col';
import './Home.css'
function Home() {
    return (
        <Container className='headerNum'>
            <Row className="row">

                <Col> 
                <h2>1287+</h2>
                <p>SAVINGS</p>
                </Col>


                <Col> 
                <h2>5786+</h2>
                <p>PHOTOS</p>
                </Col>
                <Col> 
                <h2>1440+</h2>
                <p>ROCKETS</p>
                </Col>
                <Col> 
                <h2>7110+</h2>
                <p>GLOBES</p>
                </Col>



            </Row>

        </Container>
    )
}
export default Home

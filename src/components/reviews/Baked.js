import React from "react"
import './baked.css'
import Row from "react-bootstrap/Row"
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
function Baked() {
    return (
    
            <Container className="baked ">
                <Row>
              
                    <Col>
                        <h1>
                            Baked fresh daily by bakers with passion.
                        </h1>
                    </Col>
                    <Col>
                        <button id="button">Learn More</button>
                    </Col> 
             
                </Row>
            </Container>


     
    )
}
export default Baked 
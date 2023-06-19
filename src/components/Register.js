import React from "react";
import Row from "react-bootstrap/Row"
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import './Register.css'
function Register() {
    return (

        <Container className="register" >
            <Row id="row1">
                <h1>
                    Hurry up! Subscribe our newsletter<br/>
                    and get 25% Off
                </h1>
            </Row>
            <Row id="row2">
                <p>Limited time offer for this month. No credit card required.</p>
            </Row>
            <Row>
                <Col>
                <input id="input" type="email" placeholder="Email Address here"></input>
                </Col>
                <Col>
                <button id="button3">Subscribe</button>
                </Col>
            </Row>
        </Container>
    )
}
export default Register;
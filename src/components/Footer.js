import React from "react";
import './Footer.css'
import Row from "react-bootstrap/Row"
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";

import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
function Footer() {
    return (
        <>
            <Container className="footer" >
                <Row id="rowf1">
                    <Col><h5>Register</h5></Col>
                    <Col><h5>Forum</h5></Col>
                    <Col><h5>Affiliate</h5></Col>
                    <Col><h5>FAQ</h5> </Col>

                </Row>
                <Row id="rowf2">
                    <div className="items d-flex ">
                        <AiOutlineLinkedin id="item"/>
                        <AiOutlineGlobal id="item" />
                        <FaFacebookF  id="item"/>
                     
                        <GrInstagram id="item" />
                    </div>



                </Row>
                <Row id="rowf3">
                    <p>© 2021. Foodera. All rights reserved.</p>
                </Row>
            </Container>
        </>

    )


}
export default Footer;
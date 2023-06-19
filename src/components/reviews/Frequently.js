import './frequently.css'
import Row from "react-bootstrap/Row"
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import React from 'react';
import { IoIosTrendingUp } from "react-icons/io";

function Frequently() {
    return (
        <>
            <h2 id='title'>Frequently Asked Questions</h2>
            <Container  >

                <Row>
                    <Col>
                        <div className='row1'>
                            <p id='titleF'><IoIosTrendingUp id='icont'/>Is Foodera Bread really baked fresh each day?</p>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                        <div className='row2'>
                            <p id='titleF'><IoIosTrendingUp id='icont'/>Can I order your products online?</p>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                    </Col>



                    <Col>
                        <div className='row3'>
                            <p id='titleF'> <IoIosTrendingUp id='icont'/>Do you bake breads containing animal fats or products?</p>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                        <div className='row4'>
                            <p id='titleF'><IoIosTrendingUp id='icont'/>Can I order your products online?</p>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                    </Col>
                </Row>

            </Container>


        </>
    )
}
export default Frequently
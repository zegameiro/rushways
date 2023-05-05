import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import './index.css';

const Footer = () => {
        
    const information = [
        {
            title: "Gender Equality",
            description: "We try as much to keep the balance between our male and female employees in order to support gender equality",
        }, 
        {
            title: "Clear Energy",
            description: "70% of RushWays fleet are hybrid and eletric in order to follow a green path and positively contribut to a more sustainable word"
        },
        {
            title: "Finance inclusion",
            description: "RushWays provides customers with acess to vehicle financing, as well as a range of financial services that were previously inaccessible to them "
        }
    ]

    const logoWhite = require("../../images/Logos/rw_logo_white_no_back.png")

    return (
        <footer className="footer">
                <div className="values">
                    <div style={{paddingBottom:"10px"}}>
                        <h2>Our Impact Goals</h2>
                    </div>
                    <Container>
                        <Row style={{paddingBottom:"30px"}} xs={6} md={4} lg={3} xl={3}>
                            {information.map((info) => (
                                <>
                                    <Col>
                                        <h5>{info.title}</h5>
                                        <h6>{info.description}</h6>
                                    </Col>
                                </>
                            ))}
                        </Row>
                        <Row xs={6} md={4} lg={4}>
                            <Col>
                                <h5>Follow us on social media</h5>
                                <div className="icons">
                                    <FontAwesomeIcon icon={faFacebook} />
                                    <FontAwesomeIcon icon={faTwitter} />
                                    <FontAwesomeIcon icon={faYoutube} />
                                    <FontAwesomeIcon icon={faLinkedin} />
                                    <FontAwesomeIcon icon={faInstagram} /> 
                                </div>
                            </Col>
                            <Col>
                                <img src={ logoWhite } width="300px" style={{paddingBottom: "10px"}}/>
                                <p style={{color:"white"}}> <FontAwesomeIcon icon={faCopyright} /> Copy Right 2022/2023 </p>
                            </Col>
                            <Col>
                                <h5>Contact Us</h5>
                                <h6>235645123</h6>
                                <h6>rushways@ua.pt</h6>
                            </Col>
                        </Row>
                    </Container>    
                </div>
        </footer>
    );
    
}

export default Footer;
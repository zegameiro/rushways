import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
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

    return (
        <footer className="footer">
                <div className="values">
                    <div style={{paddingBottom:"10px"}}>
                        <h2>Our Impact Goals</h2>
                    </div>
                    <Container>
                        <Row>
                            {information.map((info) => (
                                <>
                                    <Col>
                                        <h5>{info.title}</h5>
                                        <h6>{info.description}</h6>
                                    </Col>
                                </>
                            ))}
                        </Row>
                        <Row>
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
                        </Row>
                    </Container>    
                </div>
        </footer>
    );
    
}

export default Footer;
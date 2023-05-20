import React from "react";
import {  Row, Col, Button, Container } from "react-bootstrap";
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
            <Container>
                <div className="information" style={{paddingBottom:"40px"}}>
                    <div style={{paddingBottom:"40px", paddingTop:"40px"}}>
                        <h2>Our Impact Goals</h2>
                    </div>
                    <Row style={{paddingBottom:"30px", paddingLeft:"20px", paddingRight:"100px"}} >
                        {information.map((info, index) => (
                            <>
                                <Col sm={4} key={index}>
                                    <h4>{info.title}</h4>
                                    <h5>{info.description}</h5>
                                </Col>
                            </>
                        ))}
                    </Row>
                    <Row>
                        <Col>
                            <div style={{paddingTop:"20px"}}>
                                <h4>Follow us on social media</h4>
                                <div className="icons" >
                                    <FontAwesomeIcon icon={faFacebook} />
                                    <FontAwesomeIcon icon={faTwitter} />
                                    <FontAwesomeIcon icon={faYoutube} />
                                    <FontAwesomeIcon icon={faLinkedin} />
                                    <FontAwesomeIcon icon={faInstagram} /> 
                                </div>
                            </div>
                            <br />
                            <Button variant="outline-light" href="/aboutus">About Us</Button>
                            <br />
                            <br />
                        </Col>
                        <Col style={{alignItems:"center", alignContent:"center", textAlign:"center"}}>
                            <img src={ logoWhite } width="300px" style={{paddingBottom: "40px"}}/>
                            <p style={{color:"white"}}> <FontAwesomeIcon icon={faCopyright} /> Copy Right 2022/2023 RushWays UA</p>
                        </Col>
                        <Col style={{alignItems:"center", alignContent:"center", textAlign:"center"}}>
                            <h4>Contact Us</h4>
                            <h5>235645123</h5>
                            <h5>rushways@ua.pt</h5>
                        </Col>
                    </Row>
                </div>
            </Container>
        </footer>
    );
    
}

export default Footer;
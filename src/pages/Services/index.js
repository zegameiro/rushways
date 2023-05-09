import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft, faHandshake, faPeopleCarryBox } from "@fortawesome/free-solid-svg-icons";

import { Row, Col, Button } from "react-bootstrap";


import NavbarRush from "../../Components/Navbar";
import Footer from "../../Components/Footer";

import "./index.css"

const Services = () => {

    const ocasional_image = require("../../images/Services/ocasionalservices.jpg");
    const long_term_image = require("../../images/Services/long_term_services.jpg");
    const moving_image = require("../../images/Services/moving_services.jpg");

    return (
        <div>
            <NavbarRush />
            <br />
            <div style={{backgroundColor:"#404040",height:"500px"}}>
                <div style={{textAlign:"center",color:"white", paddingTop:"50px"}}>
                    <h4>Our Services</h4>
                    <br />
                    <h3>We provide a range of all-inclusive services to cater to your needs. Select the most suitable option based on your unique situation.</h3>
                </div>
            </div>
            <Row>
                <Col style={{paddingLeft:"100px", marginTop:"-15%"}}>
                    <div className="cardServices">
                        <img src={ocasional_image} alt="Ocasional Services" />
                        <div className="info">
                            <h1> <FontAwesomeIcon icon={faClockRotateLeft} /> </h1>
                            <h4>Ocasional Services</h4>
                            <p>This service caters to individuals or businesses seeking transportation solutions for a short period of time destined to either people or goods.</p>
                            <a href="/ocasionalservices">
                                <button >Read More</button>
                            </a>
                        </div>
                    </div>
                </Col>  
                <Col style={{marginTop:"-15%"}}>  
                    <div className="cardServices">
                        <img src={long_term_image} alt="Long Term Contracts" />
                        <div className="info">
                            <h1> <FontAwesomeIcon icon={faHandshake} /> </h1>
                            <h4>Long Term Contracts</h4>
                            <p>This service is designed to cater to businesses, or institutions seeking extended and frequent transportation solutions. Our services are especially suitable for those interested in long-term rental options.</p>
                            <button>Read More</button>
                        </div>
                    </div>
                </Col> 
                <Col style={{marginTop:"-15%"}}>   
                    <div className="cardServices">
                        <img src={moving_image} alt="Moving Service" />
                        <div className="info">
                            <h1> <FontAwesomeIcon icon={faPeopleCarryBox} /> </h1>
                            <h4>Moving Services</h4>
                            <p>If you're searching for support during your home relocation, our services can provide the help you need.</p>
                            <a href="/movingservices">
                                <button>Read More</button>
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
            <br />
            <br />
            <br />
            <Footer />
        </div>
    )
}

export default Services;


import React from "react";
import { useState } from "react";
import { Row, Col, Carousel, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft, faHandshake, faPeopleCarryBox } from '@fortawesome/free-solid-svg-icons';
import NavbarRush from '../../Components/Navbar';
import Footer from '../../Components/Footer';

import './index.css';   


const Homepage = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const vanImage = require('../../images/Homepage/van.png')
    const carImage = require('../../images/Homepage/car_fleet.png')
    const brandImage = require('../../images/Homepage/brand.png')
    const ocasional_image = require("../../images/Services/ocasionalservices.jpg");
    const long_term_image = require("../../images/Services/long_term_services.jpg");
    const moving_image = require("../../images/Services/moving_services.jpg");
    
    return (
        <>
            <NavbarRush />
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div style={{ position: "relative" }}>
                        <img
                        className="d-block w-100"
                        src="https://rare-gallery.com/uploads/posts/353750-4k-wallpaper.jpg"
                        alt="First slide"
                        style={{ width: "600px", height: "600px" }}
                        />
                        <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.4)", 
                        }}
                        ></div>
                        <Carousel.Caption style={{ position: "absolute" }} className="text-center">
                            <h2> <b>Get moving with us</b> </h2>
                            <h5>Join the RushWays community and stop worring about your transportation needs</h5>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ position: "relative" }}>
                        <img
                        className="d-block w-100"
                        src="https://cache.doutorfinancas.pt/wp-content/uploads/2020/12/09090702/Design-sem-nome-13.jpg"
                        alt="Second slide"
                        style={{ width: "600px", height: "600px" }}
                        />
                        <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.4)", 
                        }}
                        ></div>
                        <Carousel.Caption style={{ position: "absolute" }} className="text-center">
                            <h2> <b>Discover the Joy of flexible mobility</b> </h2>
                            <h5>Our company offers you the best services to rent a vehicle with everything included for you to begin you're adventure</h5>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ position: "relative" }}>
                        <img
                        className="d-block w-100"
                        src="https://www.infraestruturasdeportugal.pt/sites/default/files/styles/img_1500x550/public/2021-06/Tunel-do-Marao.jpg?itok=dTO78Zjo"
                        alt="Third slide"
                        style={{ width: "600px", height: "600px" }}
                        />
                        <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.4)", 
                        }}
                        ></div>
                        <Carousel.Caption style={{ position: "absolute" }} className="text-center">
                            <h2> <b>Your Safety, Our Priority, Driven by Quality Vehicles</b> </h2>
                            <h5>RushWays will provide you with vehicles that go beyond just getting you there. With our commitment to safety and the environment, we offer perfectly secure and eco-friendly rides that elevate your journey</h5>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
            <br />
            <br />
            <Container>
                <Row className="justify-content-md-center" style={{display:"inline-flex"}}>
                    <Col className="text-center mt-4">
                        <h1>Why our costumers choose <span style={{color:"orangered"}}>RushWays</span> </h1>
                    </Col>
                    <Col className="text-center mr-3">
                        <div style={{maxHeight:"100px",display:"contents"}}>
                            <h3> <span style={{color:"#D75B34"}}>“Since the beginning of our contract with RushWays, they have always been very helpful and we are looking forward to keep their service for a long time”</span> </h3>
                        </div>
                        <br />
                        <h5> <span style={{color:"#A8280D"}}><b>Escola Profissional de Aveiro is with us since 2020</b></span> </h5>
                    </Col>
                </Row>
                <br />
                <br />
                <img src={vanImage} />
            </Container>
            <br />
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
                            <a href="/ocasionalservicesdif">
                                <button className="buttonServices">Read More</button>
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
                            <a href="/longtermcontracts">
                                <button className="buttonServices">Read More</button>
                            </a>
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
                                <button className="buttonServices">Read More</button>
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
            <br />
            <br />

            <Container>
                <Row className="justify-content-md-center" style={{display:"inline-flex"}}>
                    <Col className="text-center mt-5">
                        <h2> Vehicles in <span style={{color:"orangered"}}>RushWays</span> </h2>
                        <h4>Find more information about the vehicles that are available to you and explore various type of services.</h4>
                    </Col>
                    <Col className="align-items-center">
                        <img src={carImage} />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <img src={brandImage} />
                </Row>    
            </Container>
            <br />
            <br />
            <Footer />
        </>
    );

}

export default Homepage;
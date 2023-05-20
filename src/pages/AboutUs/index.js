import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNinja, faUserAstronaut, faUserInjured, faSmile } from "@fortawesome/free-solid-svg-icons";

import NavbarRush from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import '../AboutUs/index.css'


const AboutUs = () => {

    const ua_image = require("../../images/AboutUs/ua.jpg")

    return (
        <>
            <NavbarRush />
            <div>
                <h1 className="text-center"> <b>About Us</b> </h1>
                <br />
                <Container>
                    <div>
                        <h3>RushWays is your go-to destination for all your transportation rental needs. Our mission is to make it easy and convenient for individuals and businesses alike to find and book the perfect rental vehicle for their specific needs.</h3>
                        <br />
                        <h3>
At RushWays, we understand that transportation can be a crucial element in achieving your goals, whether it's getting your employees to a company retreat or moving your belongings to a new home. That's why we've created an online platform that allows you to quickly and easily browse through our wide selection of rental vehicles, compare prices and availability, and make reservations all in one place.</h3>
                    </div>
                    <br />
                    <br />

                    <hr />

                    <br />
                    <br />
                    <div className="text-center">
                        <h1> <b>Our Team</b> </h1>
                        <br />
                        <Row>
                            <Col sm={4}>
                                <h2> <b> <FontAwesomeIcon icon={faUserNinja} /> João Carlos </b> </h2>
                                <br />
                                <h3> <b>Nmec:</b> 110555 </h3>
                                <h3> <b>Course:</b> Informatics Engineering  </h3>
                            </Col>
                            <Col sm={4}>
                                <h2> <b> <FontAwesomeIcon icon={faUserInjured} /> José Gameiro </b> </h2>
                                <br />
                                <h3> <b>Nmec:</b> 108840 </h3>
                                <h3> <b>Course:</b> Informatics Engineering  </h3>
                            </Col>
                            <Col sm={4}>
                                <h2> <b> <FontAwesomeIcon icon={faUserAstronaut} /> Ricardo Almeida </b> </h2>
                                <br />
                                <h3> <b>Nmec:</b> 110056 </h3>
                                <h3> <b>Course:</b> Informatics Engineering  </h3>
                            </Col>
                        </Row>
                    </div>

                    <br />
                    <br />

                    <hr />

                    <br />
                    <br />

                    <div className="text-center">
                        <h1> <b>Additional Information</b> </h1>
                        <h3>This website was developed as part of our Human-Computer Interaction (HCI) class, where our final project involved creating an application/website for evaluation purposes. Please note that the vehicles featured on this website are fictional, and it is not possible to rent actual cars. Additionally, the company RushWays does not exist, it was a concept we created for our project.</h3>
                    </div>
                    <br />
                    <br />
                    <div>
                        <h3 className="text-center"> <FontAwesomeIcon icon={faSmile} /> <b>Thank you for visiting our website! </b></h3>
                        <br />
                        <br />
                        <img src={ua_image} alt="ua" style={{ height: "100%", width: "100%" }} />
                        <br />
                        <br />

                    </div>
                </Container>

            </div>
            <br />
            <Footer />
        </>
    );
        
}

export default AboutUs;


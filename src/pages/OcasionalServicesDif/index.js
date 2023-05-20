import React from "react";

import NavbarRush from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import ServicesBackButton from "../../Components/ServicesBackButton";

import "./index.css";
import { Col, Container, Row } from "react-bootstrap";

const OcasionalServicesDif = () => {

    const people = require("../../images/OcasionalServicesDif/transportation_people.jpg")
    const goods = require("../../images/OcasionalServicesDif/goods.jpg")

    return (
        <div>
            <NavbarRush />
            <br />
            <a href="/">
                <ServicesBackButton />
            </a>
            <br />
            <div style={{textAlign:"center"}}>
                <Container>
                    <h1>Ocasional Services</h1>
                    <br />
                    <h3>Occasional transportation services, also known as on-demand or ad-hoc transportation services, are becoming increasingly popular in today's fast-paced world. These services provide flexible and convenient transportation options to people who need to travel on short notice or for one-time events.</h3>
                    <br />
                </Container>
                <Row style={{display:"inline-flex"}}>
                    <Col>
                        <a href="/ocasionalservices">
                            <div className="article-card">
                                <div className="content">
                                    <p class="title">
                                        <h2>For transportation of people</h2>
                                    </p>
                                </div>
                                <img src={people} alt="article-cover" />
                            </div>
                        </a>
                    </Col>
                    <Col>
                        <a href="/ocasionalservicesgoods">
                            <div className="article-card">
                                <div className="content">
                                    <p class="title">
                                        <h2>For transportation of goods</h2>
                                    </p>
                                </div>
                                <img src={goods} alt="article-cover" />
                            </div>
                        </a>
                    </Col>
                </Row>
            </div>
            <br />
            <Footer />
        </div>
    );
};

export default OcasionalServicesDif;
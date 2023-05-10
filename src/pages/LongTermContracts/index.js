import React from "react";

import NavbarRush from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import ServicesBackButton from "../../Components/ServicesBackButton";

import "./index.css";
import { Col, Row } from "react-bootstrap";

const LongTermContracts = () => {

    const people = require("../../images/LongTermContracts/TransportationPeople.png")
    const goods = require("../../images/LongTermContracts/TransportationGoods.png")

    return (
        <div>
            <NavbarRush />
            <br />
            <a href="/services">
                <ServicesBackButton />
            </a>
            <br />
            <div className='mb-4'style={{textAlign:"center"}}>
                <h1>Long Term Contracts</h1>
                <br />
                <h3 className='container'>Long-term transportation services, also known as contract transportation services, are deals where transportation providers offer services to clients for an extended period. These services are commonly used by businesses, institutions, and organizations to transport goods, materials, and people regularly.</h3>
                <br />
                <Row style={{paddingLeft:"130px"}}>
                    <Col>
                        <div className="article-card">
                            <div className="content">
                                <p class="title">
                                    <h2>For transportation of goods</h2>
                                </p>
                            </div>
                            <img src={goods} alt="article-cover" />
                        </div>
                    </Col>
                    <Col>
                        <a href="">
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
                </Row>
            </div>
            <br />
            <Footer />
        </div>
    );
};

export default LongTermContracts;
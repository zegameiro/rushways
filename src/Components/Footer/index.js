import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";

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
                    </Container>    
                    <Container>
                        <Row>
                            <Col>
                            
                            </Col>
                        </Row>
                    </Container>
                </div>
        </footer>
    );
    
}

export default Footer;
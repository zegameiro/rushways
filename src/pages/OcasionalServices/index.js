import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Button } from "react-bootstrap";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./index.css"

const OcasionalServices = () => {
    const info = [
        {
            id: 1,
            availableSeats: 5,
            vehicleName: "Mercedes EQS",
            vehicleType: "Electric",
            priceOneDay: 38.9,
            isDriver: false,
            image: require("../../images/OcasionalServices/mercedes_eqc.jpeg")
        },
        {   
            id: 2,
            availableSeats: 5,
            vehicleName: "BMW F30 AC Schnitzer",
            vehicleType: "Diesel",
            priceOneDay: 34.10,
            isDriver: false,
            image: require("../../images/OcasionalServices/BMW_F30_AC_Schnitzer_3_Series.jpg")
        },
        {
            id: 3,
            availableSeats: 2,
            vehicleName: "Ford Mustang",
            vehicleType: "Diesel",
            priceOneDay: 25.45,
            isDriver: false,
            image: require("../../images/OcasionalServices/Ford_Mustang.png")
        },
        {
            id: 4,
            availableSeats: 5,
            vehicleName: "Opel Mokka",
            vehicleType: "Electric",
            priceOneDay: 29.99,
            isDriver: false,
            image: require("../../images/OcasionalServices/opel_mokka.jpg")
        },
        {
            id: 5,
            availableSeats: 5,
            vehicleName: "Peugeot 208",
            vehicleType: "Electric",
            priceOneDay: 43.67,
            isDriver: false,
            image: require("../../images/OcasionalServices/peugeot_208.png")
        }, 
        {
            id: 6,
            availableSeats: 9,
            vehicleName: "Volkswagem Caddy",
            vehicleType: "Electric",
            priceOneDay: 53.82,
            isDriver: false,
            image: require("../../images/OcasionalServices/vw_caddy.jpeg")
        },
        {
            id: 7,
            availableSeats: 8,
            vehicleName: "Chrysler 300",
            vehicleType: "Diesel",
            priceOneDay: 0.0,
            isDriver: true,
            image: require("../../images/OcasionalServices/chrysler_300.jpg")
        },
        {
            id: 8,
            availableSeats: 45,
            vehicleName: "Tesla Model B",
            vehicleType: "Electric",
            priceOneDay: 0.0,
            isDriver: true,
            image: require("../../images/OcasionalServices/opel_mokka.jpg")
        },
        {
            id: 9,
            availableSeats: 54,
            vehicleName: "Hyundai Burcson",
            vehicleType: "Electric",
            priceOneDay: 0.0,
            isDriver: true,
            image: require("../../images/OcasionalServices/hyundai_burcson.jpg")
        },
        {
            id: 10,
            availableSeats: 76,
            vehicleName: "Renault 666",
            vehicleType: "Diesel",
            priceOneDay: 0.0,
            isDriver: true,
            image: require("../../images/OcasionalServices/renault_666.png")
        }
    ]

    return (
        <>
            <Navbar />
            <div className="ocasionalservices">
                <Container>
                    <Row>

                        <Col sm={2}>
                            <Button variant="outline-warning" className="backbutton"> <FontAwesomeIcon icon={faArrowLeft}/> Go Back</Button>
                        </Col>
                        <Col sm={7}>
                            <h4>Ocasional Services</h4>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    );
}

export default OcasionalServices;
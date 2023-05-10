import React from "react";
import vehicles from "../OcasionalServices/vehicles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, FloatingLabel, Form, Button } from "react-bootstrap";

import NavbarRush from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const OcasionalServicesConf = () => {

    const getPrice = (price) => {
        return price === 0.0 ? "to be discussed" : `$${price}/day`;
    };

    const getIsDriver = (isDriver) => {
        return isDriver ? "available" : "not available";
    };

    const selectedVehiclesQuantities = JSON.parse(localStorage.getItem('selectedVehiclesQuantities'));
    console.log("selectedVehiclesQuantities: ", selectedVehiclesQuantities);

    const getTotalPrice = () => {
        let total = 0;
        for (const vehicleId in selectedVehiclesQuantities) {
            console.log("vehicleId: ", vehicleId);
            total += vehicles[vehicleId - 1].priceOneDay * selectedVehiclesQuantities[vehicleId];
        }
        return total;
    }

    const clearLocalStorage = () => {
        localStorage.removeItem('selectedVehiclesQuantities');
    }

    return (
        <>
            <NavbarRush />
            <br />
            <div className="confirmation-page" style={{paddingLeft:"50px"}}>
                <h1>Confirmation Page</h1>
                <br />
                <h3>Selected Vehicles:</h3>
                <br />
                <div>
                    {Object.keys(selectedVehiclesQuantities).map((vehicleId) => {
                        return (
                            <>
                                <Row>
                                    <Col sm={6}>
                                        <img src={vehicles[vehicleId - 1].image} alt={vehicles[vehicleId - 1].vehicleName} />
                                    </Col>
                                    <Col sm={6} style={{paddingTop:"120px"}} className="vehicle-information">
                                        <h4> <b>{vehicles[vehicleId - 1].vehicleName}</b> </h4>
                                        <h5> <b>Price:</b> {getPrice(vehicles[vehicleId - 1].priceOneDay)}</h5>
                                        <h5> <b>Available Seats:</b> {vehicles[vehicleId - 1].availableSeats}</h5>
                                        <h5> <b>Vehicle Type:</b> {vehicles[vehicleId - 1].vehicleType}</h5>
                                        <h5> <b>Driver:</b> {getIsDriver(vehicles[vehicleId - 1].isDriver)}</h5>
                                        <h5> <b>Number of vehicles choosen: {selectedVehiclesQuantities[vehicleId]}</b> </h5>
                                    </Col>
                                </Row>
                            </>
                        );
                    })}
                </div>
                <br />
                <h3>Estimated Total Price: {getTotalPrice}</h3>
                <br />
                <h3>Personal Information:</h3>
                <br />
                <div style={{paddingLeft:"100px",paddingRight:"100px"}}>
                    <Row>
                        <Col sm={4}>
                            <FloatingLabel
                            controlId="floatingInput"
                            label="First Name"
                            className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Name" />
                            </FloatingLabel>
                        </Col>
                        <Col sm={4}>
                            <FloatingLabel
                            controlId="floatingInput"
                            label="Last Name"
                            className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Last Name" />
                            </FloatingLabel>
                        </Col>
                        <Col sm={4}>
                            <FloatingLabel
                            controlId="floatingInput"
                            label="Age"
                            className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Age" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <FloatingLabel
                            controlId="floatingInput"
                            label="Phone Number"
                            className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Phone Number" />
                            </FloatingLabel>
                        </Col>
                        <Col sm={4}>
                            <FloatingLabel
                            controlId="floatingInput"
                            label="Email"
                            className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Email" />
                            </FloatingLabel>
                        </Col>
                        <Col sm={4}>
                            <FloatingLabel
                            controlId="floatingInput"
                            label="Address"
                            className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Address" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <FloatingLabel
                            controlId="floatingInput"
                            label="Duration in days"
                            className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Duration in days" />
                            </FloatingLabel>
                        </Col>
                        <Col sm={4}>
                            <FloatingLabel
                            controlId="floatingInput"
                            label="Reason to rent"
                            className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Reason to rent" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                </div>
                <br />
                <Button variant="outline-danger" href="/ocasionalservices" onClick={clearLocalStorage}> <b> <FontAwesomeIcon icon={faXmark}/> Cancel</b></Button>
            </div>
            <Footer />
        </>

    )
}

export default OcasionalServicesConf;
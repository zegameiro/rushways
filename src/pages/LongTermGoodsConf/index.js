import React, {useState} from "react";
import vehicles_goods from "../LongTermGoods/vehicles.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircleXmark, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, FloatingLabel, Form, Button, Modal } from "react-bootstrap";

import NavbarRush from "../../Components/Navbar";
import Footer from "../../Components/Footer";

import "./index.css";

const LongTermGoodsConf = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const selectedVehiclesQuantities = JSON.parse(localStorage.getItem('selectedVehiclesQuantities'));
    console.log("selectedVehiclesQuantities: ", selectedVehiclesQuantities);

    const getIsDriver = (isDriver) => {
        return isDriver ? "available" : "not available";
    };

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
                <h3><b>Selected Vehicles:</b></h3>
                <br />
                <div>
                    {Object.keys(selectedVehiclesQuantities).map((vehicleId) => {
                        const vehicle = vehicles_goods[vehicleId - 1];
                        const showDriverOption = vehicle.isDriver;
                        return (
                            <>
                                <Row>
                                    <Col sm={6}>
                                        <img src={vehicle.vehicleImage} alt={vehicle.vehicleName} />
                                    </Col>
                                    <Col sm={6} style={{paddingTop:"120px"}} className="vehicle-information">
                                        <h4> <b>{vehicle.vehicleName}</b> </h4>
                                        <h5> <b>Available Seats:</b> {vehicle.availableSeats}</h5>
                                        <h5> <b>Engine Type:</b> {vehicle.vehicleType}</h5>
                                        <h5> <b>Driver:</b> {getIsDriver(vehicle.isDriver)}</h5>
                                        <h5> <b>Capacity:</b> {vehicle.capacity}</h5>
                                        <h5> <b>Number of vehicles choosen: {selectedVehiclesQuantities[vehicleId]}</b> </h5>
                                    </Col>
                                    <Col sm={6}>
                                        {showDriverOption && (
                                            <Form>
                                                <h4>Include driver</h4>
                                                {['radio'].map((type) => (
                                                    <div key={`inline-${type}`} className="mb-3">
                                                        <Form.Check
                                                            inline
                                                            label="Yes"
                                                            name="group1"
                                                            type={type}
                                                            id={`inline-${type}-1`}
                                                        />
                                                        <Form.Check
                                                            inline
                                                            label="No"
                                                            name="group1"
                                                            type={type}
                                                            id={`inline-${type}-2`}
                                                        />
                                                    </div>
                                                ))}
                                            </Form>
                                        )}
                                    </Col>
                                    <br />
                                </Row>
                            </>
                        );
                    })}
                </div>
                <br />
                <h3> <b>Personal Information:</b> </h3>
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
                            label="Duration (in months)"
                            className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Duration in days" />
                            </FloatingLabel>
                        </Col>
                        <Col sm={4}>
                            <FloatingLabel
                            controlId="floatingInput"
                            label="Company (optional)"
                            className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Company Name" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                </div>
                <br />
                <Row className="justify-content-center">
                    <Col sm={2} className="text-center">
                        <Button variant="outline-danger" href="/longtermgoods" onClick={clearLocalStorage}> <b> <FontAwesomeIcon icon={faCircleXmark}/> Cancel</b></Button>
                    </Col>
                    <Col sm={2} className="text-center">
                        <Button variant="outline-success" onClick={handleShow}> <b> <FontAwesomeIcon icon={faCircleCheck} /> Confirm</b></Button>
                        <Modal show={show} onHide={handleClose} style={{borderColor:"orangered"}}>
                            <Modal.Header closeButton>
                                <Modal.Title> <b>Thank you for you're submition</b></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Our company will enter in contact with you during the next 2-3 days to discuss the price and additional information </Modal.Body>
                            <Modal.Body>Any questions you may have, you can contact us or you can visit our facilitie in you're region Aveiro</Modal.Body>
                            <Modal.Body>Have a nice day!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="outline" href="/" className="button-return-hp">
                                    Return to Home Page
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
                <br />
                <br />
            </div>
            <Footer />
        </>

    )
}

export default LongTermGoodsConf;
import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Button, Container, ButtonGroup } from "react-bootstrap";
import { faMinus, faPlus, faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import vehicles from "./vehicles.js";
import NavbarRush from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import ServicesBackButton from "../../Components/ServicesBackButton/index.js";
import "./index.css"


const OcasionalServices = () => {

    const [page, setPage] = useState(1);
    const [selectedVehicles, setSelectedVehicles] = useState({});
    const [searchParams, setSearchParams] = useSearchParams();

    const vehiclesPerPage = 5;
    const lastVehicleIndex = page * vehiclesPerPage;
    const firstVehicleIndex = lastVehicleIndex - vehiclesPerPage;
    const currentVehicles = vehicles.slice(firstVehicleIndex, lastVehicleIndex);

    const getPrice = (price) => {
        return price === 0.0 ? "to be discussed" : `$${price}/day`;
    };

    const getIsDriver = (isDriver) => {
        return isDriver ? "available" : "not available";
    };

    const decrementValue = (vehicleId) => {
        if (selectedVehicles[vehicleId] > 0) {
            setSelectedVehicles({
                ...selectedVehicles,
                [vehicleId]: selectedVehicles[vehicleId] - 1
            });
        }
    };

    const incrementValue = (vehicleId) => {
        setSelectedVehicles({
            ...selectedVehicles,
            [vehicleId]: (selectedVehicles[vehicleId] || 0) + 1
        });
    };

    const canPurchase = () => {
        for (const vehicleId in selectedVehicles) {
            if (selectedVehicles[vehicleId] > 0) {
                return false;
            }
        }
        return true;
    };

    const getSelectedVehicles = () => {
        const vehicleIds = [];
        const vehicleQuantities = {};
        let totalQuantity = 0;

        for (const vehicleId in selectedVehicles) {
            const quantity = selectedVehicles[vehicleId];
            if (quantity > 0) {
                vehicleIds.push(parseInt(vehicleId));
                vehicleQuantities[vehicleId] = quantity;
                totalQuantity += quantity;
            }
        }

        console.log("vehicleIds", vehicleIds);
        console.log("vehicleQuantities", vehicleQuantities);
        console.log("totalQuantity", totalQuantity);

        return { vehicleIds, vehicleQuantities, totalQuantity };
    }

    const handleConfirmSelection = () => {
        setSearchParams({ selectedVehicles: JSON.stringify(selectedVehicles)});
        setPage(1);
        setSelectedVehicles({});
        console.clear();
        window.location.href = "/ocasionalservicesconf";
    };


    const clearSelectedVehicles = () => {
        setSelectedVehicles({});
        console.clear();
        console.log("Selected vehicles cleared", selectedVehicles);
    };

    const getVehicleInfor = (vehicle) => {
        const { id, availableSeats, vehicleName, vehicleType, priceOneDay, isDriver, image } = vehicle;
        
        return (
            <Row>
                {id % 2 === 0 ? (
                    <>
                        <Col sm={6}>
                            <img src={image} alt={vehicleName} />
                        </Col>
                        <Col sm={6} style={{paddingTop:"120px"}} className="vehicle-information">
                            <h4> <b>{vehicleName}</b> </h4>
                            <h5> <b>Price:</b> {getPrice(priceOneDay)}</h5>
                            <h5> <b>Available Seats:</b> {availableSeats}</h5>
                            <h5> <b>Vehicle Type:</b> {vehicleType}</h5>
                            <h5> <b>Driver:</b> {getIsDriver(isDriver)}</h5>
                            <div>
                                <Button variant="light" onClick={() => decrementValue(id)}> <FontAwesomeIcon icon={faMinus} /> </Button>
                                <span style={{padding:"10px"}}> {selectedVehicles[id] || 0} </span>
                                <Button variant="light" onClick={() => incrementValue(id)}> <FontAwesomeIcon icon={faPlus} /> </Button>
                            </div>
                        </Col>
                    </>
                ) : (
                    <>
                        <Col sm={6} style={{paddingTop:"120px"}} className="vehicle-information">
                            <h4> <b>{vehicleName}</b> </h4>
                            <h5> <b>Price:</b> {getPrice(priceOneDay)}</h5>
                            <h5> <b>Available Seats:</b> {availableSeats}</h5>
                            <h5> <b>Vehicle Type:</b> {vehicleType}</h5>
                            <h5> <b>Driver:</b> {getIsDriver(isDriver)}</h5>
                            <Button variant="light" onClick={() => decrementValue(id)}> <FontAwesomeIcon icon={faMinus} /> </Button>
                            <span style={{padding:"10px"}}> {selectedVehicles[id] || 0} </span>
                            <Button variant="light" onClick={() => incrementValue(id)}> <FontAwesomeIcon icon={faPlus} /> </Button>
                        </Col>
                        <Col sm={6}>
                            <img src={image} alt={vehicleName} style={{height:"422px",width:"750px"}}/>
                        </Col>
                    </>
                )}
            </Row>
        );
    };

    return (
        <>
            <NavbarRush />
            <div className="ocasionalservices">
                <Row>
                    <Col sm={2}>
                        <a href="/ocasionalservicesdif">
                            <ServicesBackButton />
                        </a>
                    </Col>
                    <Col sm={7} style={{paddingBottom:"20px"}}>
                        <h4>Ocasional Services</h4>
                    </Col>
                </Row>
                <Row>
                    <Col sm={5}>
                        <h2>For transportation of people</h2>
                    </Col>
                </Row>
                <br />
                <div className="image-ocasional">
                    <br />

                    <h3>Welcome to our car rental page! </h3>
                    <br />
                    <div style={{height:"500px",width:"500px",margin:"auto"}}>
                        <h5>
                            <b> Here you can select the type of vehicle you would like to rent, choose the number of vehicles you need, and even filter the options to find the perfect fit. </b>
                        </h5>
                    </div>
                </div>

                <br />
                <h3>Vehicles available</h3>
                <br />

                <div>
                    {currentVehicles.map((vehicle) => (
                        <div key={vehicle.id}>
                            {getVehicleInfor(vehicle)}
                            <hr />
                        </div>
                    ))}
                        <ul className="pagination">
                            {Array(Math.ceil(vehicles.length / vehiclesPerPage))
                                .fill()
                                .map((_, i) => (
                                    <li key={i} className={`page-item ${i + 1 === page ? "active" : null}`} >
                                        <ButtonGroup aria-label="Toolbar with button groups">
                                            <ButtonGroup className="me-2" aria-label="First group">
                                                <Button variant="outline" className="button-page-number" onClick={() => setPage(i + 1)} >
                                                    {i + 1}
                                                </Button> 
                                            </ButtonGroup>{' '}
                                        </ButtonGroup>
                                    </li>
                            ))}
                        </ul>
                </div>

                <br />
                <br />
                <Container>
                    <Row>
                        <Col sm={6}>
                            <Button variant="outline-danger" onClick={clearSelectedVehicles}> <FontAwesomeIcon icon={faTrashCan} /> Clear Selection</Button>
                        </Col>
                        <Col sm={6}>
                            <Button 
                                variant="outline-success" 
                                disabled={canPurchase()} 
                                onClick={handleConfirmSelection}
                            > 
                                <FontAwesomeIcon icon={faCheck} /> Confirm Selection
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    );
}

export default OcasionalServices;

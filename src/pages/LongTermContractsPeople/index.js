import React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Button, Container, ButtonGroup } from "react-bootstrap";
import { faMinus, faPlus, faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import vehiclesLP from "./vehicles.js";
import NavbarRush from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import ServicesBackButton from "../../Components/ServicesBackButton/index.js";
import "./index.css"


const LongTermContractsPeople = () => {

    const [page, setPage] = useState(1);
    const [selectedVehicles, setSelectedVehicles] = useState({});

    const vehiclesPerPage = 5;
    const lastVehicleIndex = page * vehiclesPerPage;
    const firstVehicleIndex = lastVehicleIndex - vehiclesPerPage;
    const currentVehicles = vehiclesLP.slice(firstVehicleIndex, lastVehicleIndex);

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
        const selectedVehiclesQuantities = getSelectedVehicles().vehicleQuantities;
        localStorage.setItem('selectedVehiclesQuantities', JSON.stringify(selectedVehiclesQuantities));
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
                            <h5> <b>Available Seats:</b> {availableSeats}</h5>
                            <h5> <b>Engine Type:</b> {vehicleType}</h5>
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
                            <h5> <b>Available Seats:</b> {availableSeats}</h5>
                            <h5> <b>Engine Type:</b> {vehicleType}</h5>
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
            <br />
            <div className="ocasionalservices">
                <Row>
                    <Col sm={2}>
                        <a href="/longtermcontracts">
                            <ServicesBackButton />
                        </a>
                    </Col>
                    <h4>Long Term Contracts</h4>
                </Row>
                <Row>
                    <Col sm={5}>
                        <h2>For transportation of people</h2>
                    </Col>
                </Row>
                <br />
                <div className="image-ocasional">
                    <br />
                    <div className="image-ocasional-text">
                        <h3>Welcome to our Long Term Contracts page! </h3>
                        <br />
                        <h5>
                            <b> On this page, you are in the Long-Term Contracts section, where you can simply select the desired number of vehicles you wish to avail. You also have the option to filter the choices and find the perfect fit. </b>
                        </h5>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>

                <br />
                <div className="text-center">
                    <h3>Vehicles available</h3>
                </div>    
                <br />

                <div>
                    {currentVehicles.map((vehicle) => (
                        <div key={vehicle.id}>
                            {getVehicleInfor(vehicle)}
                            <hr />
                        </div>
                    ))}
                    <Row className="text-center" style={{display:"grid", justifyContent:"center"}}>
                        <ul className="pagination">
                            {Array(Math.ceil(vehiclesLP.length / vehiclesPerPage))
                                .fill()
                                .map((_, i) => (
                                    <li key={i} className={`page-item ${i + 1 === page ? "active" : null}`} >
                                        <ButtonGroup className="me-2" aria-label="First group" style={{padding:"3px"}}>
                                            <Button 
                                            variant="outline" 
                                            className={`button-page-number ${i + 1 === page ? "active" : null}`}
                                            onClick={() => setPage(i + 1)} 
                                            style={{fontSize:"20px", width:"40px", backgroundColor: i + 1 === page ? "orangered" : "" , color: i + 1 === page ? "white" : ""}}>
                                                {i + 1}
                                            </Button> 
                                        </ButtonGroup>
                                    </li>
                            ))}
                        </ul>
                    </Row>
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
                                href="/longtermcontractspeopleconf"
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

export default LongTermContractsPeople;

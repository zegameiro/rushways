import React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Button, Container, ButtonGroup } from "react-bootstrap";
import { faMinus, faPlus, faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import vehicles_goods from "./vehicles.js";
import NavbarRush from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import ServicesBackButton from "../../Components/ServicesBackButton/index.js";

import "./index.css"

const LongTermGoods = () => {
    const [page, setPage] = useState(1);
    const [selectedVehicles, setSelectedVehicles] = useState({});

    const vehiclesPerPage = 5;
    const lastVehicleIndex = page * vehiclesPerPage;
    const firstVehicleIndex = lastVehicleIndex - vehiclesPerPage;
    const currentVehicles = vehicles_goods.slice(firstVehicleIndex, lastVehicleIndex);

    const getCapacity = (capacity) => {
        return capacity === 0.0 ? "to be discussed" : `${capacity}`;
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
        const selectedVehiclesQuantities = getSelectedVehicles().vehicleQuantities;
        localStorage.setItem('selectedVehiclesQuantities', JSON.stringify(selectedVehiclesQuantities));
    };


    const clearSelectedVehicles = () => {
        setSelectedVehicles({});
        console.clear();
        console.log("Selected vehicles cleared", selectedVehicles);
    };

    const getVehicleInfor = (vehicle) => {
        const { id, availableSeats, vehicleName, vehicleType, capacity, isDriver, vehicleImage } = vehicle;
        
        return (
            <Row>
                {id % 2 === 0 ? (
                    <>
                        <Col sm={6} style={{paddingLeft:"10px"}} className="text-center">
                            <img src={vehicleImage} alt={vehicleName} />
                        </Col>
                        <Col sm={6} style={{paddingTop:"120px", paddingLeft:"10px"}} className="vehicle-information text-center">
                            <h4> <b>{vehicleName}</b> </h4>
                            <h5> <b>Available Seats:</b> {availableSeats}</h5>
                            <h5> <b>Engine Type:</b> {vehicleType}</h5>
                            <h5> <b>Driver:</b> {getIsDriver(isDriver)}</h5>
                            <h5> <b>Capacity:</b> {getCapacity(capacity)}</h5>
                            <div>
                                <Button variant="light" onClick={() => decrementValue(id)}> <FontAwesomeIcon icon={faMinus} /> </Button>
                                <span style={{padding:"10px"}}> {selectedVehicles[id] || 0} </span>
                                <Button variant="light" onClick={() => incrementValue(id)}> <FontAwesomeIcon icon={faPlus} /> </Button>
                            </div>
                        </Col>
                    </>
                ) : (
                    <>
                        <Col sm={6} style={{paddingTop:"120px"}} className="vehicle-information text-center">
                            <h4> <b>{vehicleName}</b> </h4>
                            <h5> <b>Available Seats:</b> {availableSeats}</h5>
                            <h5> <b>Engine Type:</b> {vehicleType}</h5>
                            <h5> <b>Driver:</b> {getIsDriver(isDriver)}</h5>
                            <h5> <b>Capacity:</b> {getCapacity(capacity)}</h5>
                            <Button variant="light" onClick={() => decrementValue(id)}> <FontAwesomeIcon icon={faMinus} /> </Button>
                            <span style={{padding:"10px"}}> {selectedVehicles[id] || 0} </span>
                            <Button variant="light" onClick={() => incrementValue(id)}> <FontAwesomeIcon icon={faPlus} /> </Button>
                        </Col>
                        <Col sm={6} className="text-center">
                            <img src={vehicleImage} alt={vehicleName} style={{height:"400px"}}/>
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
                        <a href="/longtermcontracts">
                            <ServicesBackButton />
                        </a>
                    </Col>
                    <h4 className="text-center">Long Term Contracts</h4>
                </Row>
                <br />
                <Row>
                    <Col sm={5} >
                        <h2>Transportation of Goods</h2>
                    </Col>
                </Row>
                <br />

                <div className="banner-longtermgoods">
                    <br />
                    <div className="banner-longtermgoods-text">
                        <h3>Welcome to our long term goods page! </h3>
                        <br />
                        <h5>
                            <b> Here you can select the type of cargo vehicle you would like to rent, choose the number of them you need.</b>
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
                    <br />
                    <br />
                    <br />
                </div>

                <br />
                <div className="text-center">
                    <h3>Vehicles available</h3>
                </div>
                <div>
                    {currentVehicles.map((vehicle) => (
                        <div key={vehicle.id}>
                            {getVehicleInfor(vehicle)}
                            <hr />
                        </div>
                    ))}
                    <Row className="text-center" style={{display:"grid", justifyContent:"center"}}>
                        <ul className="pagination">
                            {Array(Math.ceil(vehicles_goods.length / vehiclesPerPage))
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
                    <Row className="text-center">
                        <Col sm={6}>
                            <Button variant="outline-danger" onClick={clearSelectedVehicles}> <FontAwesomeIcon icon={faTrashCan} /> Clear Selection</Button>
                        </Col>
                        <Col sm={6}>
                            <Button 
                                variant="outline-success" 
                                disabled={canPurchase()} 
                                onClick={handleConfirmSelection}
                                href="/longtermgoodsconf"
                            > 
                                <FontAwesomeIcon icon={faCheck} /> Confirm Selection
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <br />
            <br />
            <Footer />
        </>
    );
}

export default LongTermGoods;
import React from "react";
import { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Button, Container, ButtonGroup } from "react-bootstrap";
import { faArrowLeft, faMinus, faPlus, faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import vehicles from "./vehicles"

import "./index.css"


const OcasionalServices = () => {

    const [page, setPage] = useState(1);
    const [selectedVehicles, setSelectedVehicles] = useState({});

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

    const clearSelectedVehicles = () => {
        setSelectedVehicles({});
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
            <Navbar />
            <div className="ocasionalservices">
                <Row>
                    <Col sm={2}>
                        <Button variant="outline-warning" className="backbutton"> <FontAwesomeIcon icon={faArrowLeft}/> Go Back</Button>
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
                    <br />
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
                            <Button variant="outline-success" disabled={canPurchase()} onClick={getSelectedVehicles}> <FontAwesomeIcon icon={faCheck} /> Confirm Selection</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    );
}

export default OcasionalServices;



// Eu tenho um dicionário com dados sobre veículos e cada elemento contem as seguintes informações:
// 1º id,
// 2º available seats (número de lugares disponíveis,
// 3ª vehicleName (nome do veículo)
// 4º vehicleTYpe (se ele é elétrico ou não)
// 5º priceOneDay (preço de aluguer para um dia)
// 6º isDriver (se tem ou não condutor disponível, sendo este um boolean)
// 7ª image (imagem do veículo)
// Eu queria dispo-los na página que eu estou a construir de acordo com as seguintes condições:
// 1º Só podem aparecer 5 de cada vez sendo que se existirem mais do que 5 deverá avançar para uma segunda página com os restantes;
// 2ª Os veículos com o id ímpar deve de aparecer à esquerda a sua imagem e a informação dele à direita, já os veículos com id par deve de aparecer à direita a sua imagem e à esquerda a sua informação;
// 3º Deve de existir uma barra a separar cada um deles;
// 4ª Caso um veículo tenha 0.0 no atributo priceOneDay, deve de aparecer a frase "to be discussed"
// 5ª Caso um veículo tenha false no atributo isDriver deve de aparecer a frase "not available" e se tiver true deve de aparecer "available";
// 6ª As informações do veículo devem de aparecer da seguinte forma:
//  Nome do veículo (maior)
// Resto das informações (menor)
// 7ª Colocar cada informação sobre o veículo numa row dividida por duas cols e estas têm que estar centradas
// 8ª a arrow function que for criada deve de receber como argumento o dicionário com os dados dos veículos que se encontra noutro ficheiro e é necessário dar import deste ficheiro
// 9ª Cada veículo deve de ter por baixo um botão que depois irá dar à página de alugar o veículo pretendido
// Será que me podias ajudar a fazer isto em reat?
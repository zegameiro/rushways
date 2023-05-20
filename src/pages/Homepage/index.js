import React from "react";
import { useState } from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import NavbarRush from '../../Components/Navbar';
import Footer from '../../Components/Footer';


const Homepage = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const vanImage = require('../../images/Homepage/van.png')
    const carImage = require('../../images/Homepage/car_fleet.png')
    const brandImage = require('../../images/Homepage/brand.png')
    
    return (
        <>
            <NavbarRush />
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div style={{ position: "relative" }}>
                        <img
                        className="d-block w-100"
                        src="https://rare-gallery.com/uploads/posts/353750-4k-wallpaper.jpg"
                        alt="First slide"
                        style={{ width: "600px", height: "600px" }}
                        />
                        <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.3)", 
                        }}
                        ></div>
                        <Carousel.Caption style={{ position: "absolute" }} className="text-center">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ position: "relative" }}>
                        <img
                        className="d-block w-100"
                        src="https://cache.doutorfinancas.pt/wp-content/uploads/2020/12/09090702/Design-sem-nome-13.jpg"
                        alt="Second slide"
                        style={{ width: "600px", height: "600px" }}
                        />
                        <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.3)", 
                        }}
                        ></div>
                        <Carousel.Caption style={{ position: "absolute" }} className="text-center">
                            <h3>Second slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.infraestruturasdeportugal.pt/sites/default/files/styles/img_1500x550/public/2021-06/Tunel-do-Marao.jpg?itok=dTO78Zjo"
                    alt="Third slide"
                    width="600px"
                    height="600px"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Footer />
        </>
    );

}

export default Homepage;
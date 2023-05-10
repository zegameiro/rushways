import React from "react";

import NavbarRush from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import '../Homepage/index.css'

const Homepage = () => {

    const vanImage = require('../../images/Homepage/van.png')
    const carImage = require('../../images/Homepage/car_fleet.png')
    const brandImage = require('../../images/Homepage/brand.png')
    
    return (
        <>
            <NavbarRush />
            <div style={{height:2700}}>
                <div className="first_element">
                    <h1>Get Moving with us</h1>
                    <h4 className="one">Join the RushWays community and stop<p></p>
                        worring about your transportation needs
                    </h4>
                    <a href="/services">
                        <button className="ChooseService" ><h5>Choose Service</h5></button>
                    </a>
                    <h4 className="two">Choose what type of service fits you better</h4>
                </div>
                <div className="second_element">
                    <h1 className="phrase1">Why our costumers <p>choose <span className="RushWays">RushWays</span></p></h1>
                    <h2 className="phrase2">
                        <pre>“Since the beginning of our contract<br></br>
                        with RushWays, they have always<br></br>
                        been very helpful and we are<br></br>
                        looking forward to keep their<br></br>
                        service for a long time”</pre>
                    </h2>
                    <h3 className="phrase3">Escola profissional de Aveiro is with us since 2020</h3>
                </div>
                <div className="third_element">
                    <img src={vanImage} alt="van" className="image1"></img>
                </div>
                <div className="container homepage-container-1">
                    <div className="text">
                        <h1 className="phrase4">Vehicles in<br></br><span className="RushWays">RushWays</span></h1>
                        <h4 className="phrase5">Find more information about the vehicles that <br></br> are available to you and explore various type<br></br> of services</h4>
                    </div>
                    <div>
                        <img src={carImage} alt="fleet" className="image2"></img>
                    </div>
                    
                </div>
                <div className="fourth_element">
                    <img src={brandImage} alt="brand" className="image3"></img>
                </div>
            </div>
            <Footer />
        </>
    );

}

export default Homepage;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import NavbarRush from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import ServicesBackButton from "../../Components/ServicesBackButton";

const OcasionalServicesDif = () => {
    return (
        <div>
            <NavbarRush />
            <br />
            <ServicesBackButton />
            <br />
            <div style={{textAlign:"center"}}>
                <h1>Ocasional Services</h1>
                <br />
                <h3>Occasional transportation services, also known as on-demand or ad-hoc transportation services, are becoming increasingly popular in today's fast-paced world. These services provide flexible and convenient transportation options to people who need to travel on short notice or for one-time events.</h3>
                <br />
                <br />
            </div>
            <Footer />
        </div>
    );
};

export default OcasionalServicesDif;
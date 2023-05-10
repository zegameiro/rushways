import React from "react";

import NavbarRush from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import ServicesBackButton from "../../Components/ServicesBackButton";

import "./index.css";

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
                <div className="center">
                    <div className="article-card">
                        <div className="content">
                            <p className="date">Jan 1, 2022</p>
                            <p class="title">Article Title Goes Here</p>
                        </div>
                        <img src="https://images.unsplash.com/photo-1482877346909-048fb6477632?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80" alt="article-cover" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OcasionalServicesDif;
import React from 'react';

import './index.css'
import '../../Components/ServicesBackButton'
import ServicesBackButton from '../../Components/ServicesBackButton';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import MovingServices_1 from '../../images/MovingServices/MovingServices_1.jpg';
import MovingServices_2 from '../../images/MovingServices/MovingServices_2.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const MovingServices = () => {

    return (
        <>
            <Navbar />
            <div className='container top-bar'>
                <ServicesBackButton />
                <div>
                    <h1 className="moving-services-header">Moving Services</h1>
                </div>
            </div>
            <div className='container image-cards-container'>
                <div className="card">
                    <div className="card-body">
                        <a href='/movingteam'>
                        <h5 className="card-title">Moving Team</h5>
                        <p className="card-text">Complete moving team that will carry out the moving for you</p>
                        </a>
                    </div>
                    <a href='/movingteam'>
                        <img src={MovingServices_1} className="card-img-bottom" alt="Moving team carrying boxes"></img>
                    </a>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Rent a van</h5>
                        <p className="card-text">Just rent a van to transport the goods (no moving team)</p>
                    </div>
                    <img src={MovingServices_2} className="card-img-bottom" alt="Man putting boxes in a rented van"></img>
                </div>
            </div>
            <Footer />
        </>
    );

}

export default MovingServices;
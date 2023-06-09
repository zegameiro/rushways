import React from 'react';

import './index.css'
import '../../Components/ServicesBackButton'
import ServicesBackButton from '../../Components/ServicesBackButton';
import NavbarRush from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import MovingServices_1 from '../../images/MovingTeam/MovingTeam_1.jpg';
import MovingServices_2 from '../../images/MovingTeam/MovingTeam_2.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ThankYouScreen from '../../Components/ThankYouScreen';
import { useState } from 'react';


const MovingTeam = () => {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        // 👇️ toggle shown state
        // setIsShown(current => !current);

        // 👇️ or simply set it to true
        setIsShown(true);
    };

    return (
        <>
            <NavbarRush />
            <div className='container moving-services-top-bar'>
                <a href='/movingservices'>
                    <ServicesBackButton />
                </a>
                <div>
                    <h1 className="moving-team-header">Moving Team</h1>
                </div>
            </div>
            <div className='banner-image-container mt-0'>
                <img src={MovingServices_1} className="banner-img" alt="Moving team carrying boxes"></img>
                <img src={MovingServices_2} className="banner-img" alt="Man putting boxes in a rented van"></img>
            </div>
            <div className='container'>
                <h2 className='form-title mb-4'>Information:</h2>
                <div className='container'>
                    <form>
                        <div className="form-floating mb-3 w-25 mx-4">
                            <input type="text" className="form-control shadow-none" id="floatingInput" placeholder="Vera" />
                            <label htmlFor="floatingInput">FIRST NAME</label>
                        </div>
                        <div className="form-floating mb-3 w-25 mx-4">
                            <input type="text" className="form-control shadow-none" id="floatingInput" placeholder="Nunes" />
                            <label htmlFor="floatingInput">LAST NAME</label>
                        </div>
                        <div className="form-floating mb-3 w-25 mx-4">
                            <input type="number" className="form-control shadow-none" id="floatingInput" placeholder="36" />
                            <label htmlFor="floatingInput">AGE</label>
                        </div>
                        <div className="form-floating mb-3 w-25 mx-4">
                            <input type="phone-number" className="form-control shadow-none" id="floatingInput" placeholder="912345678" />
                            <label htmlFor="floatingInput">PHONE NUMBER</label>
                        </div>
                        <div className="form-floating mb-3 w-25 mx-4">
                            <input type="email" className="form-control shadow-none" id="floatingInput" placeholder="veran123456@ua.pt" />
                            <label htmlFor="floatingInput">EMAIL</label>
                        </div>
                        <div className="form-floating mb-3 w-25 mx-4">
                            <input type="date" className="form-control shadow-none" id="floatingInput" placeholder="11-05-2023" />
                            <label htmlFor="floatingInput">PREFERRED DAY</label>
                        </div>
                        <div className="form-floating w-100 mx-4">
                            <textarea className="form-control shadow-none" placeholder="Large sofa 8x2 meters" id="floatingTextarea2" style={{ height: 100 + 'px' }}></textarea>
                            <label htmlFor="floatingTextarea2">EXTRA DETAILS (LARGE ITEMS, ETC.)</label>
                        </div>

                    </form>
                    <div className='container mb-5' style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className='buttons'>
                            <button type="cancel" className="btn btn-secondary">Cancel</button>
                            <button type="submit" onClick={handleClick} className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
                <div>{isShown && <ThankYouScreen />}</div>
            </div>
            <Footer />
        </>
    );


}

export default MovingTeam;
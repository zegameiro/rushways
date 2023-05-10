import React from "react";

import NavbarRush from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import '../AboutUs/index.css'

const AboutUs = () => {


    return (
        <>
            <NavbarRush />
            <div style={{height:1000}}>
                <div className="about_us">
                    <h1 className="titulo">Who are we</h1>
                    <h4 className="one">RushWays is your go-to destination for all your transportation rental needs. Our mission is<br></br> to make it easy and convenient for individuals and businesses alike to find and book the <br></br> perfect rental vehicle for their specific needs.<p className="p1"></p>

                                    At RushWays, we understand that transportation can be a crucial element in achieving your <br></br> goals, whether it's getting your employees to a company retreat or moving your belongings<br></br> to a new home. That's why we've created an online platform that allows you to quickly and <br></br> easily browse through our wide selection of rental vehicles, compare prices and availability,<br></br> and make reservations all in one place. <p className="p2"></p>

                                    We take pride in our commitment to customer satisfaction, and we strive to provide <br></br> the highest level of service to each and every one of our customers. Our team is dedicated to <br></br> ensuring that your rental experience with us is seamless and stress-free, from the <br></br> moment you start your search to the moment you return your rental.<p className="p3"></p>

                                    We believe that transportation should never be a barrier to achieving your goals. That's <br></br>why we're here to provide you with the perfect rental solution for any occasion, so you can <br></br> focus on what really matters. Thank you for choosing RushWays as your trusted rental partner.</h4>
                </div>
            </div>
            <Footer />
        </>
    );
        
}

export default AboutUs;


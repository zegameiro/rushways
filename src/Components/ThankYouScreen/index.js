import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const ThankYouScreen = () => {

    return (
        <div className='thank-you-screen'>
            <p className='thank-you-text'>
                Thank you for you're selection!
                Our company will enter in contact with you during the next 2-3 days to discuss the price and additional information.<br/>
                Get your sofas ready. We're coming!
            </p>
            <a href='/'>
                <button type="button" className="btn btn-primary return-homepage">Return to Homepage</button>
            </a>
        </div>
    );
}

export default ThankYouScreen;


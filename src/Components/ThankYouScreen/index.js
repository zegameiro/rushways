import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const ThankYouScreen = () => {

    return (
        <div className='thank-you-screen'>
            <p>
                Thank you for you're selection!
                Our company will enter in contact with you during the next 2-3 days to discuss the price and additional information
            </p>
            <button type="button" class="btn btn-primary">Return to Homepage</button>
        </div>
    );
}

export default ThankYouScreen;


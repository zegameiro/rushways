import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './index.css';

const ServicesBackButton = () => {

    return (
        <div>
            <a href='/services'>
                <Button className="btn btn-secondary services-back-button"><b><FontAwesomeIcon icon={faArrowLeft} /> Services </b></Button>
            </a>
        </div>
    );
}

export default ServicesBackButton;

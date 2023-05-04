import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './index.css';

const ServicesBackButton = () => {

    return (
        <div className='services-back-button'>
            <Button variant='outline-primary' style={{ marginRight: "10px" }}> <b><FontAwesomeIcon icon={faArrowLeft} /> Services </b> </Button>
        </div>
    );
}

export default ServicesBackButton;

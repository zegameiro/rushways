import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

import './index.css';

const Navbar = () => {

    const logoImage = require('../../images/rw_logo_colored_no_back.png')

    return (
        <nav className='navbar'>
            <img src={ logoImage } alt="logo"/>
            <div className='links'>
                <Button variant='outline-primary'>Home</Button>
                <Button variant='outline-primary'>About</Button>
            </div>
        </nav>
    );
}

export default Navbar;
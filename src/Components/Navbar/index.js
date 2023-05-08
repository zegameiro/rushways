import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'

import './index.css';


const Navbar = () => {

    const logoImage = require('../../images/Logos/rw_logo_colored_no_back.png')

    return (
        <nav className='navbar'>
            <a href='/'>
                <img href="/" src={ logoImage } alt="logo"/>
            </a>
            <div className='links'>
                <Dropdown as={ButtonGroup} style={{paddingRight: "550px"}}>
                    <Button variant="outline"> <b><FontAwesomeIcon icon={faBus} /> Services </b> </Button>

                    <Dropdown.Toggle split variant="outline" id="dropdown-split-basic"/>
                    <Dropdown.Menu style={{borderColor:"orangered"}}>
                        <Dropdown.Item href="/ocasionalservices" className='dropdown-menu-item'><b>Short Term Rental Service</b></Dropdown.Item>
                        <Dropdown.Item href="#/action-2" className='dropdown-menu-item'><b>Long Term Contracts</b></Dropdown.Item>
                        <Dropdown.Item href="/movingservices" className='dropdown-menu-item'><b>Moving service</b></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Button variant='outline' style={{marginRight:"10px"}}> <b><FontAwesomeIcon icon={faUser} /> Login </b> </Button>
                <Button variant='outline'> <b> <FontAwesomeIcon icon={faUserPlus} /> Sign Up </b> </Button>
            </div>
        </nav>
    );
}

export default Navbar;
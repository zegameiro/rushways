import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'

import '../Navbar/index.css';


const NavbarRush = () => {

    const logoImage = require('../../images/Logos/rw_logo_colored_no_back.png')
    const NavDropdownTitle = 
        <b>
            <FontAwesomeIcon icon={faBus} /> Services
        </b>;

    return (    
        <>
        {['lg'].map((expand) => (
          <Navbar key={expand} bg="light" variant="warning" expand={expand} className="mb-3" >
            <Container fluid>
              <Navbar.Brand href="/">
                <img src={logoImage} width="300px" style={{paddingTop:"10px"}} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                style={{color:"orangered"}}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <a href='/'>
                        <img src={logoImage} width="300px"/>
                    </a>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-center flex-grow-1 text-center dropdown-navbar">
                    <NavDropdown
                      title={NavDropdownTitle}
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="/ocasionalservicesdif">Ocasional Services</NavDropdown.Item>
                      <NavDropdown.Item href="/longtermcontracts">Long Term Contracts</NavDropdown.Item>
                      <NavDropdown.Item href="/movingservices">Moving Services</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/services">Services</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1"> <b> <FontAwesomeIcon icon={faUser} /> Login </b> </Nav.Link>
                    <Nav.Link href="#action2"> <b> <FontAwesomeIcon icon={faUserPlus} /> Sign Up </b> </Nav.Link>
                </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
}

export default NavbarRush;
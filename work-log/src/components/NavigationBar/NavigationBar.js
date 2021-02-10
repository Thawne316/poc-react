import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

class NavigationBar extends Component {
    render() {
        const margin = {
            marginLeft: '100px',
            marginRight: '100px',
            marginTop: '10px',
            marginBottom: '10px',
            color:'white'
        }
        return (
            <div>
                <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="#home" style={margin}>Poc trial three</Navbar.Brand>
                    <Nav >
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/Home">Home</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/DetailsForm">Form</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/Login">Logout</NavLink>
                    </Nav>
            </Navbar>
            </div>
        );
    }
}

export default NavigationBar;
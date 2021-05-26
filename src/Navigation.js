import React from 'react';
import {Container, Nav, Navbar, } from "react-bootstrap";
import {NavLink} from "react-router-dom";
function Navigation() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand className="text-white" to="/" >Whats Happening In The World?!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-white nav-link">Home</NavLink>
                        <NavLink to="/sg" className="text-white nav-link">Singapore</NavLink>
                        <NavLink to="/my" className="text-white nav-link">Malaysia</NavLink>
                        <NavLink to="/ng" className="text-white nav-link">Nigeria</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Navigation;

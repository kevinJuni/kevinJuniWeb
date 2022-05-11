import React from "react";
import "./MainLayout.css"
import {  Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavDropdown } from "react-bootstrap";
const MainHeaderLayout = () =>{
    



    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <div className="brand_cus">
                    KEVIN`s WEB
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="">
                    <Nav.Link href="/itroduce">itroduce</Nav.Link>
                    <Nav.Link href="/work">work</Nav.Link>
                    <Nav.Link href="/connect">connect</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
    
}

export default MainHeaderLayout;
import React,{Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavDropdown,Row,Col, Container,Media} from "react-bootstrap";
import logo from "C:/Users/hp/Documents/MassjidApp/my-app/src/logo.png"


function Header(){
        return(
            <div>
               
             
                <Navbar collapseOnSelect expand='lg' bg='light' variant= 'light' fixed="top">
                <Navbar.Brand href="#home">
                    <img src={String(logo)} alt=" " width={50} ></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Islam</Nav.Link>
                            <Nav.Link href="#pricing">News</Nav.Link>
                            <Nav.Link href="#pricing">Bogota's Muslims</Nav.Link>
                            <Nav.Link href="#pricing">Links</Nav.Link>   
                            <Nav.Link href="#pricing">Contact Us</Nav.Link>  
                        </Nav>
                        <Nav>
                        <NavDropdown title="Languages" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Arabic</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Spanich</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Englis</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
            
            </div>
            
        )   
    
    
}

export default Header
import React,{Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavDropdown,Row,Col, Container,Media} from "react-bootstrap";
import thuluth from "C:/Users/hp/Documents/MassjidApp/my-app/src/Main/thuluth.png"
import logo from "C:/Users/hp/Documents/MassjidApp/my-app/src/logo.png"

function Header(){
    let pageHeader = React.createRef<HTMLDivElement>();
    const [navbarColor, setNavbarColor] = React.useState("");
    React.useEffect(()=>{
        const updateNavbarColor = () => {
            if (
              document.documentElement.scrollTop > 399 ||
              document.body.scrollTop > 399
            ) {
              setNavbarColor("fixed-top");
            } else if (
              document.documentElement.scrollTop < 400 ||
              document.body.scrollTop < 400
            ) {
              setNavbarColor("");
            };
        }
            window.addEventListener("scroll", updateNavbarColor,true);
            console.log(navbarColor)
            return function cleanup() {
              window.removeEventListener("scroll", updateNavbarColor,true);
            };
    })
        return(
            <div>
               
               <section id="Home" style={{paddingTop:0}}>
                <Container>
                <Row>

                    <Col md={12} >
                        <img src={String(thuluth)} alt=" " width={"100%"} style={{height:"15rem"}}></img>
                    </Col>
                </Row>
                </Container>
            </section>
              <Navbar collapseOnSelect expand='sm' bg='dark' variant= 'dark'  className={navbarColor} >
                <Navbar.Brand href="#home">
                    <img src={String(logo)} alt=" " width={50} ></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#Home">Home</Nav.Link>
                            <Nav.Link href="#Islam">Islam</Nav.Link>
                            <Nav.Link href="#News">News</Nav.Link>
                            <Nav.Link href="#pricing">Bogota's Muslims</Nav.Link>
                            <Nav.Link href="#Location">Location</Nav.Link>   
                            <Nav.Link href="#ContactUs">Contact Us</Nav.Link>  
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
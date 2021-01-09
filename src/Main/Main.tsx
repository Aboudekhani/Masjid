import React from "react"
import { Row, Col, Container, Button, ListGroup, Navbar,Nav,NavDropdown } from "react-bootstrap"
import thuluth from "C:/Users/hp/Documents/MassjidApp/my-app/src/thuluth-benterkia.jpg"
import Carousel from 'react-bootstrap/Carousel'
import slider from "C:/Users/hp/Documents/MassjidApp/my-app/src/Main/slider-bg.png"
import Card from 'react-bootstrap/Card'
import masjidIcon from "C:/Users/hp/Documents/MassjidApp/my-app/src/Main/masjid-icon.png"
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fab , faInstagramSquare as instagram} from'@fortawesome/free-brands-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons"
import logo from "C:/Users/hp/Documents/MassjidApp/my-app/src/logo.png"

library.add(fab,fas,instagram)
function Main() {
    return (
        <div>
              <Navbar collapseOnSelect expand='lg' bg='light' variant= 'light' fixed="top">
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
                            <Nav.Link href="#pricing">Links</Nav.Link>   
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
            

           
            <section id="Home">
                <Row>

                    <Col md={12}>
                        <img src={String(thuluth)} alt=" " width={"100%"} ></img>
                    </Col>
                </Row>

            </section>
            <section id="Islam" >
                <Carousel>

                    <Carousel.Item>
                        <img src={String(slider)} alt=" " width={"100%"} ></img>

                        <Carousel.Caption>
                            <h3>What is Islam?</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={String(slider)} alt=" " width={"100%"} ></img>

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={String(slider)} alt=" " width={"100%"} ></img>


                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            <section id="News" style={{ padding: "5rem" }}>
                <Container>
                    <Row>
                        <Col md={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={String(masjidIcon)} />
                                <Card.Body>
                                    <Card.Title>News 1</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                </Card.Text>
                                    <Button variant="primary">Read More ... </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={String(masjidIcon)} />
                                <Card.Body>
                                    <Card.Title>News 2 </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                </Card.Text>
                                    <Button variant="primary">Read More ... </Button>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={String(masjidIcon)} />
                                <Card.Body>
                                    <Card.Title>News 3</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                </Card.Text>
                                    <Button variant="primary">Read More ... </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id="ContactUs">
                <h1>Contact Us</h1>
                <Row>
                    <Col md={6}>
                    <div>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Name"
                                aria-label="Name"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Email"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Message</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl as="textarea" aria-label="Message" />
                        </InputGroup>
                    </div>
                    </Col>
                    <Col md={6}>
                    <address>
                                    <strong>Masjid Abu Baker BOGOTA</strong><br/>
                                    Street Name<br/>
                                    <abbr title="Phone">P:</abbr> (999) 999-9999
                    </address>
                    <h3>Connect with us</h3>
                        <Row >
                            <Col md={6}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item> <FontAwesomeIcon icon={['fab', 'facebook-square']} /> Facebook </ListGroup.Item>
                                    <ListGroup.Item><FontAwesomeIcon icon= {['fab', 'instagram-square']} /> Instgram</ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col md={6}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><FontAwesomeIcon icon= {['fab', 'twitter-square']} /> Twitter</ListGroup.Item>
                                    <ListGroup.Item> <FontAwesomeIcon icon={['fab', 'youtube-square']} /> Youtube</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>
        </div>
    )
}

export default Main
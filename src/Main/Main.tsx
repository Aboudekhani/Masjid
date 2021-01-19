import React from "react"
import { Row, Col, Container, Button, ListGroup, Navbar,Nav,NavDropdown } from "react-bootstrap"
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
import Map from "../Map/Map"
library.add(fab,fas,instagram)
function Main() {
    return (
        <div>
             
          <Container>
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
                                <Card.Img variant="bottom" src={String(masjidIcon)} />
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
                       
                                    <div className="e-card" id="basic_card" >
                                        <div className="e-card-header">
                                            <div className="e-card-header-caption">
                                                <div className="e-card-title">Debunking Five Data Science Myths</div>
                                                <div className="e-card-sub-title">By John Doe | Jan 20, 2018 </div>
                                            </div>
                                        </div>
                                        <div className="e-card-content">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </div>
                                        <div className="e-card-actions">
                                            <button className="e-btn e-outline e-primary">
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                    <br/>
                                <div className="e-card e-card-horizontal" style={{ width: `100%` }}>
                                    <img src={masjidIcon} alt="Sample" style={{ height: `100%` }} />
                                    <div className="e-card-stacked">
                                        <div className="e-card-header">
                                            <div className="e-card-header-caption">
                                                <div className="e-card-header-title">Philips Trimmer</div>
                                            </div>
                                        </div>
                                        <div className="e-card-content">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                         </div>
                                    </div>
                                </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id ="Location">
                <Row>
                    <Col md={9}>
                         <Map />
                    </Col>
                    <Col md={3}>
                    <address style={{marginTop:"15rem"}}>
                                    <strong>Masjid Abu Baker BOGOTA</strong><br/>
                                    Street Name<br/>
                                    <abbr title="Phone">P:</abbr> (999) 999-9999
                    </address>
                    </Col>
                </Row>
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
            </Container>
        </div>
    )
}

export default Main
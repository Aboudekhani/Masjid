import React from 'react';
import './App.css';
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Main from './Main/Main';




function App() {
  return (
    <Container >
       <Header/>
      <Main/>

      
        
    </Container>
   
  );
}

export default App;

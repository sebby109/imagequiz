import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import flowers from './data';
import React from 'react';
import ReactDOM from 'react-dom';
import Images from './Images';



function Home(props) {

    return (
        <div>
        {flowers.map((flowers) => (
            <li>{ <img src={flowers['picture']} /> } <br/> {flowers['name']} </li>
        ))}
        </div>
    );


}

export default Home;
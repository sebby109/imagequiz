import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import flowers from './data';
import React from 'react';
import ReactDOM from 'react-dom';



function Home() {

    let getImg = () => {
        const getDiv = document.getElementById("first");
        const listItems = flowers.map((flowers) =>
            <li>{ <img src={flowers['picture']} /> } <br/> {flowers['name']} </li>
        );
        ReactDOM.render(
            <ul>{listItems}</ul>,
            getDiv
        );
    }

    return (
        <Row>
            <Col>

                <div id="first" makeCall={getImg()}></div>
            </Col>
        </Row>
    );


}

export default Home;
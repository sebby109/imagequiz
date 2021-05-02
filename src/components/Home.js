import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import flowers from './Photos';
import React from 'react';
import ReactDOM from 'react-dom';
import Data from './Data';
import { useHistory } from 'react-router-dom';
import MakeCard from './MakeCard';
import api from '../communication/api';

function Home() {
    const history = useHistory();
    const [message, setMessage] = useState('');
    const [places, setPlaces] = useState([]);

    let sendToData = () => {
        let message = 'test'
        setMessage(message);
        history.push('./data');
    }

    useEffect( () => {
        if(places.length === 0){
            api.getPlaces().then(x => setPlaces(x)).catch(e => console.log(e));
        }
    });

    return (
            <div>
                    {places.map((places) => (
                        <MakeCard image_url={places.picture} name={places.name} pos={places.pos} />
                    ))}
            </div>
    );
}

export default Home;
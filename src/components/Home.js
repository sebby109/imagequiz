import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import flowers from './Photos';
import React from 'react';
import ReactDOM from 'react-dom';
import Data from './Data';
import { useHistory } from 'react-router-dom';
import MakeCard from './MakeCard';

function Home() {
    const history = useHistory();
    const [message, setMessage] = useState('');

    let sendToData = () => {
        let message = 'test'
        setMessage(message);
        history.push('./data');
    }

    return (
        <div>
        {flowers.map((flowers) => (
            <MakeCard image_url={flowers.picture} name={flowers.name} />
        ))}
        </div>
    );
}

export default Home;
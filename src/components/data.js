import Row from 'react-bootstrap/Row';
import current_image from './CurrentImage';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import flowers from './Photos';
import api from '../communication/api';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Display from './Display';

function Data() {
    const [currents, setCurrents] = useState([]);
    const [places, setPlaces] = useState([]);
    const [single_q, setSingle_q] = useState([]);

    let getCurrent = () => {
        if (currents.length === 0) {
            api.getCurrent().then(x => setCurrents(x)).catch(e => console.log(e));
        }
    };
    getCurrent()

    let getPlaces = () => {
        if (places.length === 0) {
            api.getPlaces().then(x => setPlaces(x)).catch(e => console.log(e));
        }
    };
    getPlaces()

    let findPos = () => {
        let i = 0;
        let last = currents.length - 1;
        for(var k = 0; k < places.length; k++) {
            if (places[k].name === currents[last].name) {
                i = k;
            }
        }
        return i;
    };

    useEffect(() => {
        if (single_q.length === 0) {
            api.getQuiz(findPos()).then(x => setSingle_q(x)).catch(e => alert.log(e));
        }
    });

    return (
        <Container>
            {single_q === [] ? [] : <Display name1={single_q[0]} name2={single_q[1]} name3={single_q[2]} image={single_q[3]} pos={findPos()} />}
        </Container>
    );
}


export default Data;
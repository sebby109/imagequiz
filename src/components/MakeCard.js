import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';
import current_image from './CurrentImage';
import api from '../communication/api';
import { useState, useEffect } from 'react';

function MakeCard(props) {
    const history = useHistory();
    const [places, setPlaces] = useState([]);

    let changePage = () => {
        let selection = {name: props.name, pos: props.pos, image: props.image_url};
        api.addCurrent(selection).then(r => console.log(r)).catch(e => alert(e));
        history.push('/data');
    }

    return (
        <Card style={{ width: '18rem', float: 'left', position: 'relative', margin:'50px'}} onClick={changePage}>
            <Card.Img variant="top" src={props.image_url} />
            <Card.Body>
                <Card.Title style={{ textAlign: "center"}}>{props.name}</Card.Title>
            </Card.Body>
        </Card>
    );
}
export default MakeCard;
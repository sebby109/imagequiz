import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { render } from '@testing-library/react';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Photos from './Photos';
import current_image from './CurrentImage';
import flowers from './Photos';

function MakeCard(props) {
    const history = useHistory();

    let changePage = () => {
        current_image.push({name: props.name, image: props.image_url});
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
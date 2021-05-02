import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../communication/api';

function Display(props) {
    const history = useHistory();
    const [score, setScore] = useState(0);
    let ans = props.name1;

    let handleClick = (event) => {
        let choice = event.target.value;
        if(choice === ans){
            api.addAnswer(choice).catch(e => console.log(e));
            api.addScore(toString(1)).catch(e => alert("failed at add score"));
        }
        else{
            api.addAnswer("wrong").catch(e => alert(e));
        }
        history.push('/results')
    }

    return (
        <Form style={{margin: '10px'}}>
            <Form.Group style={{ width: '18rem', float: 'left', position: 'relative' }}>
                <img src={props.image} style={{ width: '250px', height: '200px' }}/>
            </Form.Group>
            <Row>
            <Button variant="primary" type="submit" style={{margin: '10px'}} value={props.name1} onClick={handleClick} >
                {props.name1}
            </Button>
            </Row>
            <Row>
            <Button variant="primary" type="submit" style={{margin: '10px'}} value={props.name2} onClick={handleClick} >
                {props.name2}
            </Button>
            </Row>
            <Row>
            <Button variant="primary" type="submit" style={{margin: '10px'}} value={props.name3} onClick={handleClick} >
                {props.name3} {props.pos}
            </Button>
            </Row>
        </Form>
    );
}
export default Display;
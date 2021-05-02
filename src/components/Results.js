import React from 'react';
import current_image from './CurrentImage';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import api from '../communication/api';

function Results(props) {
    const history = useHistory();
    const [ans, setAns] = useState("");
    const [score, setScore] = useState(0);
    let result = "Correct";

    let getAnswer = () => {
        api.getAnswer().then(x => setAns(x)).catch(e => alert("failed at get answer"));
    }
    getAnswer()

    let getScore = () => {
        if(ans === "wrong"){
            result = "Incorrect";
        }
        else{
            api.getScore().then(x => setScore(x)).catch(e => alert("update fail"));
        }
    }

    let handleClick = (event) => {
        let choice = event.target.value;

        if (choice === "home"){
            history.push('/');
        }
        else{
            history.push('/data');
        }
    }
    // score kept adding infinite. need to fix before displaying
    return (
        <Container >
            <div style={{textAlign:"center"}} >
                {result} 
                <br />
                <br />
                <Button variant="primary" type="submit" style={{margin:'10px'}} value="home" onClick={handleClick}>Home</Button>
                <Button variant="primary" type="submit" style={{margin:'10px'}} value="retake" onClick={handleClick}>Retake quiz</Button>
            </div>
        </Container>
    );
}
export default Results;
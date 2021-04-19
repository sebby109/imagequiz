import flowers from './Photos';
import React from 'react';
import ReactDOM from 'react-dom';
import current_image from './CurrentImage';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router-dom';

function Results(props) {
    // -2 because the last element will be there choice, and the previous will be right answer to compare.
    let pos = current_image.length - 2;
    let user_answer = current_image[pos + 1].name;
    let curr_name = current_image[pos].name;
    let result = '';
    let score = 0;
    const history = useHistory();

    let getAnswer = () => {
        if (current_image[pos].name === current_image[pos + 1].name) {
            score = 1;
            result = "Correct!";
        }

        else {
            result = "Incorrect answer.";
        }
    }
    getAnswer()

    let handleClick = (event) => {
        let choice = event.target.value;

        if (choice === "home"){
            history.push('/');
        }
        else{
            history.push('/data');
        }
    }

    return (
        <Container>
            <div style={{textAlign:"center"}}>
                {result} 
                <br />
                <b>Your score: {score}/1</b>
                <br />
                <Button variant="primary" type="submit" style={{margin:'10px'}} value="home" onClick={handleClick}>Home</Button>
                <Button variant="primary" type="submit" style={{margin:'10px'}} value="retake" onClick={handleClick}>Retake quiz</Button>
            </div>
        </Container>
    );
}
export default Results;
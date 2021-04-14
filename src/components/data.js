import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './Home';
import current_image from './CurrentImage';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import flowers from './Photos';
import { useHistory } from 'react-router-dom';


function Data() {
    let curr_pos = current_image.length - 1
    let curr_name = current_image[curr_pos].name;
    let im_url = current_image[curr_pos].image;
    var pos = 0;
    var other_pos = [1,2];
    const history = useHistory();

    let getPos = () => {  
        for (var i=0; i<flowers.length;i++){
            if (flowers[i].name === curr_name){
                pos = i;
                break;
            }
        }

        if(pos === 26){
            other_pos[0] = 24;
            other_pos[1]= 25;
        }
        else if(pos == 25){
            other_pos[0] = 24;
            other_pos[1]= 26;
        }

        else if(pos > 0){
            other_pos[0] = pos + 1;
            other_pos[1]= pos + 2;
        }
    }
    getPos()


    let handleSubmit = (event) =>{
        current_image.push({name: event.target.value})
        history.push('/results');
    }

    return (
        <Form>
            <Form.Group style={{ width: '18rem', float: 'left', position: 'relative' }}>
                <img src={im_url} style={{width:'250px', height:'200px'}}/>
            </Form.Group>
            <Form.Group style={{ width: '18rem', float: 'left', position: 'relative' }}>
            <Row>
                <Button variant="primary" type="submit" style={{margin:'10px'}} value={curr_name} onClick={handleSubmit}>
                    {curr_name}
                </Button>
            </Row>
            <Row>
                <Button variant="primary" type="submit" style={{margin:'10px'}} value={flowers[other_pos[0]].name} onClick={handleSubmit}>
                    {flowers[other_pos[0]].name}
                </Button>
            </Row>
            <Row>
                <Button variant="primary" type="submit" style={{margin:'10px'}} value={flowers[other_pos[1]].name} onClick={handleSubmit}>
                    {flowers[other_pos[1]].name}
                </Button>
            </Row>
            </Form.Group>
        </Form>
    );
}


export default Data;
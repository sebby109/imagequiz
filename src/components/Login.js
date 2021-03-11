import { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom';


function Login(props) {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let onLoginSubmitted = (props) => {
        if (email.trim().length === 0 || password.trim().length === 0) {
            return;
        }
        props.onLoggedIn(email);
        history.push('/');
    }

    let OnEmailChanged = (event) => {
        //console.log(event);
        setEmail(event.target.value);
    }

    let onPasswordChanged = (event) => {
        setPassword(event.target.value);
    }

    return (
        <Row>
            <Col>
                <Form onSubmit={onLoginSubmitted}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={OnEmailChanged} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={onPasswordChanged} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            </Col>
        </Row>
    );
}

export default Login;
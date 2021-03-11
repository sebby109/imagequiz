
import {
    Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavagationBar(props) {
    return (

        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Practicum 5</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/login">login</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}
export default NavagationBar;
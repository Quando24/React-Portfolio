import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

const Navigation = (props) => {

    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Raquan Stanley's Portfolio</Navbar.Brand>
            
            
            <Nav className="me-auto">
                <Nav.Link onClick={() => {props.updateSection(0)}} href="#about">About Me</Nav.Link>
                <Nav.Link onClick={() => {props.updateSection(1)}} href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link onClick={() => {props.updateSection(2)}} href="#resume">Resume</Nav.Link>
                <Nav.Link onClick={() => {props.updateSection(3)}} href="#contact">Contact Me</Nav.Link>
                
            </Nav>
            
        </Container>
        </Navbar>
        
        
    )
}

export default Navigation
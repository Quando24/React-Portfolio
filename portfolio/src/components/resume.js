import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Resume = () => {

    return (
        <Container fluid={true}>
            <Row>
                <Col>
            <a className="" href="assets/Resume 2.0.pdf" download="newfilename"
    id="link3">
            Resume
            </a>
            </Col>
            </Row>
            
        </Container>)
}

export default Resume
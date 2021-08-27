import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Resume = () => {

    return (
        <Container className="p-4" fluid={true}>
            <Row>
                <Col>
                <div className="d-flex justify-content-center">
            <a className="" href="assets/Resume 2.0.pdf" download="newfilename"
    id="link3">
            <Button variant={"info"}>Resume</Button>
            </a>
            </div>
            </Col>
            </Row>
            
        </Container>)
}

export default Resume
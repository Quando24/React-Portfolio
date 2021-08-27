import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Footer = () => {

    return (
        <Container  style={{ "backgroundColor": "grey", "height": "60px"}} fluid>

            <Row style={{"height": "100%"}} className="d-flex align-items-center" md={{span: 12}}>
                <Col md={{span: 4}}>
                    <div className="d-flex justify-content-center">
                    <a href="https://github.com/Quando24">GitHub</a>
                    </div>
                </Col>
                <Col md={{span: 4}}>
                <div className="d-flex justify-content-center">
                    <a href="https://www.linkedin.com/in/raquan-stanley/">LinkedIn</a>
                    </div>
                </Col>
                <Col md={{span: 4}}>
                <div className="d-flex justify-content-center">
                    <a href="mailto:raquan.stanley@gmail.com">Email</a>
                    </div>
                </Col>
            </Row>


        </Container>
    )

}

export default Footer
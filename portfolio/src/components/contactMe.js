import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

const ContactMe = () => {

    const [ errorMessage, setErrorMessage ] = useState("")

    let validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
      
    return (

        <Container className="p-4" fluid={true}>

            <Row>

                <Col md={{ span: 5, offset: 3}}>

                <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={(e) => {
                            if (e.target.value.length === 0) {

                                setErrorMessage("The name field is required")
                            } else {
                                setErrorMessage("")
                            }
                        }} type="name" placeholder="John Doe" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={(e) => {
                            if (e.target.value.length === 0) {
                                setErrorMessage("The email field is required")
                            } else {
                                if (!validateEmail(e.target.value)) {
                                    setErrorMessage("The email address you entered is not valid")
                                } else {
                                    setErrorMessage("")
                                }
                            }
                        }} type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control onBlur={(e) => {
                            if (e.target.value.length === 0) {
                                setErrorMessage("The message field is required")
                            } else {
                                setErrorMessage("")
                            }
                        }} as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                {errorMessage.length > 0 && <Alert variant={"danger"}>{errorMessage}</Alert>}
                <Button variant={"primary"}>Submit</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactMe
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

const About = () => {

    return(
        
        <Container fluid>
            <h1 id="AboutMe">About Me</h1>
            <p>My name is Raquan Stanley, and I am a 23 year old fullstack web-developer! I was born and rasied in New
                York city, and after graduating high school, I attended Syracuse University and earned an economics, BA
                degree.</p>
            <Col>
                <img src="assets/Profile-Picture.jpeg" alt="Profile Picture" class="img-thumbnail float-right"
                    style={{'width': '200px', 'height': 'auto'}} />
            
            </Col>
        </Container>
        

    
    )
}

export default About
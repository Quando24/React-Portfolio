import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'

const Portfolio = () => {

    return (
    <Container fluid={true}>
        <h1 id="Portfolio">My Portfolio</h1>
    
        <Row className="g-4" md={2} xs={1}>
            
            <Card>
                <Card.Img variant="top" src="/assets/Note-taker-pic.png"></Card.Img>
                <Card.Body>
                    <Card.Title>Note Taker</Card.Title>
                    <Card.Text>This is my first homework assignment where I had to create an app and deploy it to Heroku. This assignment required me to use 
                        starter code that was given, and complete the rest of it. In terms of the given code, it was completed on the front end side of the application,
                        and my job was to simply build and complete the back end side using express.js.
                    </Card.Text>
                    
                    <a href="https://special-note-taker.herokuapp.com/" style={{"marginRight": "20px"}}><Button variant="primary" >Live
                        Webpage</Button></a>
                    <a href="https://github.com/Quando24/New-note-taker"
                        ><Button variant="primary">Repository</Button></a>
                        
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="/assets/Tech-blog-pic.png"></Card.Img>
                <Card.Body>
                    <Card.Title>Tech-Blog</Card.Title>
                    <Card.Text>This application was a homework assignment, where I was supposed to create
                            a Tech-Blog from scratch, that was then deployed to Heroku. This assignment required me to use multiple npm packages, which enabled the ability
                            for users to not only create blog posts, but to also comment on other developers' posts.
                    </Card.Text>
                    
                    <a href="https://floating-lake-87498.herokuapp.com/" style={{"marginRight": "20px"}}><Button variant="primary" >Live
                        Webpage</Button></a>
                    <a href="https://floating-lake-87498.herokuapp.com/"
                        ><Button variant="primary">Repository</Button></a>
                        
                </Card.Body>
            </Card>
            
            
            <Card>
                <Card.Img variant="top" src="/assets/crypto-market-display_.png"></Card.Img>
                <Card.Body>
                    <Card.Title>Cryptocurrency Market Display</Card.Title>
                    <Card.Text>
                    This project was co-developed between me and two other skilled developers.
                            As a group, we wanted to develop an application where both rookie and experienced
                            cryptocurrency investors, can use a simple user interface to access the price and percentage
                            change of any given cryptocurrency.
                    </Card.Text>
                    
                    <a href="https://quando24.github.io/crypto-market-display/" style={{"marginRight": "20px"}}><Button variant="primary" >Live
                        Webpage</Button></a>
                    <a href="https://github.com/Quando24/crypto-market-display"
                        ><Button variant="primary">Repository</Button></a>
                        
                </Card.Body>
            </Card>
           
                
            
        </Row>
    
        
    </Container>
    )

}

export default Portfolio
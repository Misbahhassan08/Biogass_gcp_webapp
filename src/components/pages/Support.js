import React,{useEffect,useState} from "react";
import Form from 'react-bootstrap/Form'
import { Button,FloatingLabel,Card,Container,Row,Col } from 'react-bootstrap';

function Support(){
    useEffect(() => {
        document.title = "Support"
    }, []);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
    };

    return (
        <>
        <div className="layout-right-side">
        <Container className="">
            <Card className="text-center border-0 get-in-touch">
                <Card.Body>
                    <Card.Title className="text-green text-center justify-content-center">24/7 Support</Card.Title>
                    <Card.Text className="mx-auto mb-5" style={{ width: '40rem' }}>Some quick example text to build on the card title and make up the bulk of the card's content make up the bulk of the card's content.</Card.Text>
                    <Form className="contact-form" noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row>
                            <Col className="">
                                <Form.Control type="text" placeholder="First name" required />
                            </Col>

                            <Col className="">
                                <Form.Control type="text" placeholder="Last name" required />
                            </Col>
                        </Row>

                        <Row>
                            <Col className="">
                                <Form.Control type="email" placeholder="Email" required />
                            </Col>

                            <Col className="">
                                <Form.Control type="text" placeholder="Phone" required />
                            </Col>
                        </Row>

                        <Form.Group className="mb-3" controlId="formBasicCompany">
                            <Form.Control type="text" placeholder="Company" required />
                        </Form.Group>
                    

                        <Form.Group className="mb-3" controlId="formBasicPosition">
                            <Form.Control type="text" placeholder="Position" required />
                        </Form.Group>

                        <FloatingLabel controlId="floatingTextarea2" label="Message">
                            <Form.Control
                            as="textarea"
                            placeholder="Message"
                            style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <Button variant="warning" type="submit" className="mt-4">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            </Container>
            </div>
        </>
    )
}

export default Support;
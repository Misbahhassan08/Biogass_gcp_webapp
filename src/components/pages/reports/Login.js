import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"
import { Card,Container,Row,Form,Button } from 'react-bootstrap'

function ReportsLogin() {
    useEffect(() => {
        document.title = "Report Login"
    }, []);

    const [validated, setValidated] = useState(false);
    let navigate = useNavigate();

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }else{
        navigate(process.env.PUBLIC_URL+'/reports/sample-report');
      }
  
      setValidated(true);
    };

    return (
        <div className="layout-right-side">
        <Container className="">
        <Row className="justify-content-md-center align-items-center manually-card">
            <Card style={{ width: '40rem' }}>
                <Card.Body>
                    <Card.Title className="mt-2 text-light-blue main-title mb-0 text-uppercase">Sample Report</Card.Title>
                    <Card.Text className="mt-3 pt-3 text-dark border-top">Fill your Information veiw all Sample Reports</Card.Text>

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Control
                                type="text"
                                id="inputusername"
                                aria-describedby="usernameHelpBlock"
                                className="mt-3"
                                placeholder="Username"
                                required
                        /> 

                        <Form.Control
                                type="password"
                                id="inputPinPassword"
                                aria-describedby="PinPasswordHelpBlock"
                                className="mt-3"
                                placeholder="Password"
                                required
                        />

                        <Form.Control
                                type="password"
                                id="inputRole"
                                aria-describedby="RoleHelpBlock"
                                className="mt-3"
                                disabled
                                placeholder="Operator/Reader"
                        />                                                     

                        <Button variant="warning" type="submit" className="mt-2">Submit
                        </Button>
                    </Form>  
                </Card.Body>
            </Card>
        </Row>
        </Container>   
        </div>  
    )
}

export default ReportsLogin
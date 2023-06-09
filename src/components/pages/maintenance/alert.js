import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  Form,
  Carousel,
  CardGroup,
} from "react-bootstrap";

function Alert() {
  useEffect(() => {
    document.title = "Alert";
  }, []);

  const [ setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <div className="layout-right-side alerts">
        <Container>
         

          <Row className="home-card mx-auto">
            <Col>
              <Card onClick={handleShow}>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                   
                    <CardGroup>
                      <Card className="card1">
                        <form className="list-item1">
                          
                          
                          <Carousel fade>
                            <Carousel.Item>
                            <ul>
                         
                            <li>
                              Total Alerts
                              <Button variant="dark1" className="notification-btn">3</Button>
                            </li>
                          </ul>
                         
                          
                          <InputGroup size="sm" className="mb-3 align-items-center" >
                          <div className="error-detail"><span className="empty"></span>
                            <InputGroup.Text id="inputGroup-sizing-sm">
                              Alert1:
                            </InputGroup.Text>
                            </div> 
                            <div className="error-detail">
                            <h2>Error Details</h2>
                            <Form.Control
                              aria-label="Small"
                              aria-describedby="inputGroup-sizing-sm"
                              value="CO2 tank level Low"
                            />
                            </div>
                            <div className="action">
                            <h3>Action</h3>
                            <Button variant="dark6">Steps to change tank</Button>
                            </div>
                            <div className="btns">
                            <Button variant="dark6">Remind in 1 day</Button>
                            <Row>
                            <Button variant="dark7">Ignore</Button>
                            <Button variant="dark7">Resolved</Button>
                            </Row>
                            
                            </div>
                          </InputGroup>
                              
                            </Carousel.Item>
                            <Carousel.Item>
                            <ul>
                         
                            <li>
                              Total Alerts
                              <Button variant="dark1" className="notification-btn">3</Button>
                            </li>
                          </ul>
                         
                          
                          <InputGroup size="sm" className="mb-3 align-items-center" >
                          <div className="error-detail"><span className="empty"></span>
                            <InputGroup.Text id="inputGroup-sizing-sm">
                              Alert2:
                            </InputGroup.Text>
                            </div> 
                            <div className="error-detail">
                            <h2>Error Details</h2>
                            <Form.Control
                              aria-label="Small"
                              aria-describedby="inputGroup-sizing-sm"
                              value="CO2 tank level Low"
                            />
                            </div>
                            <div className="action">
                            <h3>Action</h3>
                            <Button variant="dark6">Steps to change tank</Button>
                            </div>
                            <div className="btns">
                            <Button variant="dark6">Remind in 1 day</Button>
                            <Row>
                            <Button variant="dark7">Ignore</Button>
                            <Button variant="dark7">Resolved</Button>
                            </Row>
                            
                            </div>
                          </InputGroup>

                            
                            </Carousel.Item>
                            <Carousel.Item>
                            <ul>
                         
                            <li>
                              Total Alerts
                              <Button variant="dark1" className="notification-btn">3</Button>
                            </li>
                          </ul>
                         
                          
                          <InputGroup size="sm" className="mb-3 align-items-center" >
                          <div className="error-detail"><span className="empty"></span>
                            <InputGroup.Text id="inputGroup-sizing-sm">
                              Alert3:
                            </InputGroup.Text>
                            </div> 
                            <div className="error-detail">
                            <h2>Error Details</h2>
                            <Form.Control
                              aria-label="Small"
                              aria-describedby="inputGroup-sizing-sm"
                              value="CO2 tank level Low"
                            />
                            </div>
                            <div className="action">
                            <h3>Action</h3>
                            <Button variant="dark6">Steps to change tank</Button>
                            </div>
                            <div className="btns">
                            <Button variant="dark6">Remind in 1 day</Button>
                            <Row>
                            <Button variant="dark7">Ignore</Button>
                            <Button variant="dark7">Resolved</Button>
                            </Row>
                            
                            </div>
                          </InputGroup>

                              
                            </Carousel.Item>
                          </Carousel>
                          <p>
                            Status:<span> OK</span>
                          </p>
                        </form>
                      </Card>
                     
                    </CardGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

         
        </Container>
      </div>
    </>
  );
}

export default Alert;

import React,{useEffect} from "react";
import {Link} from "react-router-dom"
import { Card,Container,Row,Col } from 'react-bootstrap'
import SystemSetupData from "./SystemSetupData"

function SystemSetup(){
    useEffect(() => {
        document.title = "System Setup"
     }, []);

    return (
        <>
        <div className="layout-right-side">
        <Container>
            <Card className="text-center border-0 ">
                <Card.Body>
                    <Card.Title className="text-green text-center justify-content-center text-uppercase font-38">Let's set this bad boy up</Card.Title>
                    <Card.Text className="mx-auto mb-4" style={{ width: '40rem' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Card.Text>
                    
                </Card.Body>
            </Card>
            <Row className="maintenance-row system-setup-row">

            {SystemSetupData.map((item, index) =>{
                return ( 
                    <Col className="px-4 col-lg-4" key={index}>
                        
                            <Link to={process.env.PUBLIC_URL + item.path}>
                                <Card className="p-5">
                                <Card.Body className="text-center">
                                <img src={item.icon} alt={item.title} />
                                </Card.Body>
                                </Card>
                            </Link>
                            <Card.Title className="text-center justify-content-center mt-3 mb-5 text-dark text-uppercase">{item.title}</Card.Title>
                      
                    </Col>
                )
            })}

            </Row>
            </Container>
            </div>
        </>
    )
}

export default SystemSetup;
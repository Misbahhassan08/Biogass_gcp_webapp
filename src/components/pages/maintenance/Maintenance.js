import React,{useEffect} from "react";
import { Card,Container,Row,Col } from 'react-bootstrap'
import MaintenanceData from "./MaintenanceData"

function Maintenance(){
    useEffect(() => {
        document.title = "Maintenance"
     }, []);

    return (
        <>
        <div className="layout-right-side">
        <Container>
            <Card className="text-center border-0 ">
                <Card.Body>
                    <Card.Title className="text-green text-center justify-content-center text-uppercase font-38">Maintenance</Card.Title>
                    <Card.Text className="mx-auto mb-4" style={{ width: '40rem' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Card.Text>
                    
                </Card.Body>
            </Card>
            <Row className="maintenance-row">

            {MaintenanceData.map((item, index) =>{
                return ( 
                    <Col className="px-4 col-lg-4" key={index}>
                        
                            <Card className="p-5">
                            <Card.Body className="text-center mx-auto">
                            <img src={item.icon} alt={item.title} />
                            </Card.Body>
                            </Card>
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

export default Maintenance;
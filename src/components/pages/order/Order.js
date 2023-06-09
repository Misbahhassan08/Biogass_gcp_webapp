import React,{useEffect} from "react";
import {Link} from "react-router-dom"
import { Card,Container,Row,Col } from 'react-bootstrap'
import OrderData from "./OrderData"

function Order(){
    useEffect(() => {
        document.title = "Order"
     }, []);

    return (
        <>
        <div className="layout-right-side">
        <Container>
            <Card className="text-center border-0 ">
                <Card.Body>
                    <Card.Title className="text-green text-center justify-content-center text-uppercase font-38">Need supplies?</Card.Title>
                    <Card.Text className="mx-auto mb-4" style={{ width: '40rem' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Card.Text>
                    
                </Card.Body>
            </Card>
            <Row className="order-row">

            {OrderData.map((item, index) =>{
                return ( 
                    
                    <Col className="px-4 col-lg-4" key={index}>
                            <Card className=" p-0 border-0 ">
                            <Card.Body className="text-center p-0">
                            <img src={item.featured} alt={item.title} className="img-fluid"/>
                            </Card.Body>
                            </Card>
                            <Card.Title className="text-center justify-content-center mt-4 mb-4 text-dark text-uppercase">{item.title}</Card.Title>
                            <button className="text-center buy-now border-0 bg-transparent"><Link className="btn btn-warning text-capitalize" to={`${process.env.PUBLIC_URL}/order/${item.slug}`}>buy now</Link></button>
                    </Col>
                    
                )
            })}

            </Row>
           
            </Container>
            </div>
        </>
    )
}

export default Order;
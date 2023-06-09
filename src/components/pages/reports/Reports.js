import React,{useEffect} from "react";
import { Card,Container,Row,Col,ListGroup } from 'react-bootstrap'
import {Link} from "react-router-dom"
import ReportsData from "./ReportsData"
import * as IoIcons from 'react-icons/io';

function Report(){
    useEffect(() => {
        document.title = "Reports"
     }, []);

    return (
        <>
        <div className="layout-right-side">
        <Container>
            <Card className="text-center border-0 ">
                <Card.Body className="mobile-padding-0">
                    <Card.Title className="text-green text-center justify-content-center text-uppercase font-38">What kind of reports can I run for you?</Card.Title>
                    <Card.Text className="mx-auto mb-4" style={{ width: '40rem' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Card.Text>
                    
                </Card.Body>
            </Card>
            <Row className="report-row">

            {ReportsData.map((item, index) =>{
                return ( 
                    
                    <Col className="px-4 col-lg-4" key={index}>
                    <Link to={process.env.PUBLIC_URL + item.path}>
                            <Card className=" p-0 border-0 ">
                            <Card.Body className="text-center p-0">
                            <img src={item.icon} alt={item.title} className="img-fluid"/>
                            </Card.Body>
                            </Card>
                            <Card.Title className="text-center justify-content-center mt-3 mb-5 text-dark text-uppercase">{item.title}</Card.Title>
                    </Link>
                    </Col>
                    
                )
            })}

            </Row>
            <Row className="report-row1">
            <Card.Title className="text-green border-top text-uppercase text-light-blue font-size-24 pt-5 mt-2 px-0 mb-4">What kind of reports can I run for you?</Card.Title>
            <ListGroup>
            <ListGroup.Item className="border-0 px-0 pb-0 "><IoIcons.IoIosCheckmarkCircle />Outbreak flow/process?</ListGroup.Item>
            <ListGroup.Item className="border-0 px-0 pb-0 " ><IoIcons.IoIosCheckmarkCircle />User Reports </ListGroup.Item>
            <ListGroup.Item className="border-0 px-0 pb-0 "><IoIcons.IoIosCheckmarkCircle />Templates/Forms? </ListGroup.Item>
            <ListGroup.Item className="border-0 px-0 pb-0 "><IoIcons.IoIosCheckmarkCircle />Process Documents?</ListGroup.Item>
            <ListGroup.Item className="border-0 px-0 pb-0 "><IoIcons.IoIosCheckmarkCircle />What information do we want to display?</ListGroup.Item>
            <ListGroup.Item className="border-0 px-0 pb-0 "><IoIcons.IoIosCheckmarkCircle />Need to consider thresholds for "normal" readings</ListGroup.Item>
          </ListGroup>

            </Row>
            </Container>
            </div>
        </>
    )
}

export default Report;
import React, { useState, useEffect } from "react";
import {
  
  Container,
  Row,
  Col,
  Card,
  Accordion,
  
} from "react-bootstrap";

function Systemstatsone() {
  useEffect(() => {
    document.title = "Systemstatsone";
  }, []);

  const [ setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <div className="layout-right-side systemstatsone">
        <Container>
         

          <Row className=" mx-auto">
            <Col>
              <Card onClick={handleShow}>
                <Card.Body >
                <div className="list-item1 p-5">
                <Accordion defaultActiveKey="0" flush className="accord-cstm">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Select System Stat to view</Accordion.Header>
        <Accordion.Body className="p-0">
        <ul className="py-0 px-3 mt-3">
          <li className="mb-2"> Run hrs (per rack)/Bay
          </li>
          <li className="mb-2">Gas tank levels
          </li>
          <li className="mb-2">Internal QC</li>
        </ul>
       
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
              </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

         
        </Container>
      </div>
    </>
  );
}

export default Systemstatsone;

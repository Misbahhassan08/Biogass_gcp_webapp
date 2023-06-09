import React, { useState, useEffect } from "react";
import {
  
  Container,
  Row,
  Col,
  Card,
  Accordion,
  
} from "react-bootstrap";

function Qc() {
  useEffect(() => {
    document.title = "Qc";
  }, []);

  const [ setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <div className="layout-right-side qc">
        <Container>
         

          <Row className="mx-auto">
            <Col>
              <Card onClick={handleShow}>
                <Card.Body >
                <div className="list-item1 p-5">
                <Accordion defaultActiveKey="0" flush className="accord-cstm">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Select QC test to run</Accordion.Header>
        <Accordion.Body className="p-0">
        <ul className="py-0 px-3 mt-3">
          <li className="mb-2"> Weekly QC Strain testing
          </li>
          <li className="mb-2">Card QC 
          </li>
          <li className="mb-2">New bay/slot inserted – Confirm</li>
          <li className="mb-2">bay use – Rack/Bay</li>
          <li className="mb-2">Monthly system QC – optics/??</li>
          <li className="mb-2">Annual QC – Service technican
          </li>
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

export default Qc;

import React, { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from "react-router-dom";
import {
  Container,Row,Col,Card,Accordion
  
} from "react-bootstrap";

function Qcreports() {
  useEffect(() => {
    document.title = "Qcreports";
  }, []);

  const [ setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [date, setDate] = useState(new Date())
  return (
    <>
      <div className="layout-right-side Qcreports">
        <Container>
          <Row className=" mx-auto">
            <Col className="p-0">
              <Card onClick={handleShow}>
                <Card.Body>
                  <div className="list-item1 p-5">
                    <Accordion
                      defaultActiveKey="0"
                      flush
                      className="accord-cstm"
                    >
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Select QC report</Accordion.Header>
                        <Accordion.Body className="p-0">
                          <ul className="py-0 px-3 mt-3">
                            <li className="mb-2">
                              {" "}
                              Daily system QC: Temp, CO2 log
                            </li>
                            <li className="mb-2">Weekly QC Strain testing</li>
                            <li className="mb-2">Card QC</li>
                            <li className="mb-2">Media/dilution QC</li>
                            <li className="mb-2">Monthly system QC</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <div className="calendar-container">
                <Calendar onChange={setDate} value={date} />
              </div>
            </Col>
          </Row>
          <Link
            to={`${process.env.PUBLIC_URL}/reports/qc-status`}
            className="w-25 report-info-btn mx-auto px-4 py-2 rounded-pill d-flex justify-content-center align-items-center mt-4"
          >
            Current QC Status
          </Link>
        </Container>
      </div>
    </>
  );
}

export default Qcreports;

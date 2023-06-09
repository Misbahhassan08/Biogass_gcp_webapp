import React, { useEffect } from "react";
import {} from "react-router-dom";
import {   Row,Form, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function IsolateReportsStatus() {
  useEffect(() => {
    document.title = "Isolate reports Status";
  }, []);

  return (
    <>
      <div className="layout-right-side isolatereports-status">
        <Container className="text-center">
          <Row className="home-card mt-0">
            <Col>
            <Form.Select aria-label="Default select example">
            <option>Recent</option>
            <option value="1">Today</option>
            <option value="2">7 days</option>
            <option value="3">Month</option>
          </Form.Select>
            </Col>
            <Col>
            <Form.Select aria-label="Default select example">
            <option>Status</option>
            <option value="1">Unverified</option>
            <option value="2">Verified</option>
          </Form.Select>
            </Col>
            
            <Col>
            <Form.Control type="text" placeholder="Search" aria-label="Search"/>
            </Col>
            <Col>
            <Link
            to={`${process.env.PUBLIC_URL}/reports/report1`} className="report-info-btn px-10 py-3 rounded-pill generate-report"
          >Generate Report</Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default IsolateReportsStatus;

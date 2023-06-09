import React, {  useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,Row,Col,Form
}from "react-bootstrap";

function IsolatereportsNew() {
    useEffect(() => {
      document.title = "Isloate reports new";
    }, []);
  
   
    return (
      <>
        <div className="layout-right-side isolatenewreports">
          <Container>     
  <Row>
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
  <option value="1">UnVerified</option>
  <option value="2">Verified</option>
</Form.Select>
  </Col>
  <Col>
  <Form.Select aria-label="Default select example">
  <option>Look Up</option>
  <option value="1">Quick-send isolates</option>
  <option value="2">Alert isolates
  </option>
  <option value="3">WGS isolates</option>
  <option value="4">Accession #</option>
  <option value="5">Isolate #</option>
</Form.Select>
  </Col>
  </Row>
  <Row className="mx-auto justify-content-center align-items-center text-center  mt-3">
  <Col><Link
  to={`${process.env.PUBLIC_URL}/reports/generate-reports`} className="report-info-btn px-5 py-3 rounded-pill"
>Generate Report</Link></Col>
  </Row>
          </Container>
        </div>
      </>
    );
  }
  
  export default IsolatereportsNew;
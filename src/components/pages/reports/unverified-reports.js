import React, {  useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,Row,Col,Form,InputGroup, Table
}from "react-bootstrap";

function Unverifiedreports() {
    useEffect(() => {
      document.title = "Unverified reports";
    }, []);
  
   
    return (
      <>
        <div className="layout-right-side unverifiedreports reports-attrtab-cstm">
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
  <Table bordered className="axis-table mt-5">
                <thead>
                
                <tr>
                  <th className="text-center"></th>
                  <th className="text-center">Accession</th>
                  <th className="text-center">Result</th>
                  <th className="text-center action-th">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-light"><InputGroup className="mb-3 checkbox">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" label="Checkbox"/>
                </InputGroup></td>
                <td>kc-020203-01</td>
                <td>Success</td>
                <td><Link
                to={`${process.env.PUBLIC_URL}/reports/generate-reports`} className="report-info-btn px-5 py-2 rounded-pill  d-flex justify-content-center w-25 mx-auto"
              >View</Link></td>
                </tr>
                <tr>
                  <td className="text-light"><InputGroup className="mb-3 checkbox">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" label="Checkbox"/>
                </InputGroup></td>
                <td></td>
                <td>Fail</td>
                <td><Link
                to={`${process.env.PUBLIC_URL}/reports/generate-reports`} className="report-info-btn px-5 py-2 rounded-pill  d-flex justify-content-center w-25 mx-auto"
              >Archieve</Link></td>
                </tr>
                <tr>
                  <td className="text-light"><InputGroup className="mb-3 checkbox">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" label="Checkbox"/>
                </InputGroup></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                <tr>
                  <td className="text-light"><InputGroup className="mb-3 checkbox">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" label="Checkbox"/>
                </InputGroup></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                
              </tbody>
                </Table>
          </Container>
        </div>
      </>
    );
  }
  
  export default Unverifiedreports;
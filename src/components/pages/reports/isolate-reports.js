import React, { useEffect } from "react";
import {} from "react-router-dom";
import { Card,  Row, Col, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function IsolateReports() {
  useEffect(() => {
    document.title = "Isolate reports";
  }, []);

  return (
    <>
      <div className="layout-right-side reports-table-cstm">
        <Container className="text-center">
          <Row className="home-card mt-0">
            <Col>
              <Card className="border-0">
                <Card.Body className="mobile-padding-0">
                 
                <div className="table-responsive">
                  <Table className="reports-tab">
                  <tr className="one">
                  <th >Sample/Accession Number</th>
                  <th>Date</th>
                  <th>Info/details</th>
                  <th>Reports</th>
                </tr>
                
              
              <tr className="two">
              <td>CNS:123ABC/Title</td>
              <td></td>
              <td>NG-AR 167(1st line of cvs)</td>
              <td><Link
              to={`${process.env.PUBLIC_URL}/reports/report1`} className="report-info-btn px-4 py-2 rounded-pill "
            >Report</Link></td>
              </tr>
              <tr className="three">
              <td>124ABC</td>
              <td></td>
              <td>NG-AR 167</td>
              <td><Link
              to={`${process.env.PUBLIC_URL}/reports/report1`} className="report-info-btn px-4 py-2 rounded-pill "
            >Report</Link></td>
              </tr>
                  </Table>
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

export default IsolateReports;

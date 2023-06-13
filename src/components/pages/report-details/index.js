import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function SampleDetails() {
  return (
    <div className="layout-right-side">
      <Container>
        <Row>
          <Col className="px-4">
            <Link to={process.env.PUBLIC_URL + "/sample-report/concentration-details"}>
              <Card.Title className="text-center justify-content-center mt-3 mb-5 text-dark text-uppercase">
                SAMPLE DETAILS
              </Card.Title>
            </Link>
          </Col>

          {
            //Graph Card
          }
          <Col className="px-4">
            <Link to={process.env.PUBLIC_URL + "/sample-report/end-results"}>
              <Card.Title className="text-center justify-content-center mt-3 mb-5 text-dark text-uppercase">
                END RESULTS
              </Card.Title>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SampleDetails;

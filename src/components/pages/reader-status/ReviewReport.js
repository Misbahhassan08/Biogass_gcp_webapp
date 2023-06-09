import React, { useEffect } from "react";
import { Card, Form, Row, Col, Button, Container } from "react-bootstrap";
import "status-indicator/styles.css";

function ReviewReport() {
  useEffect(() => {
    document.title = "Review Report";
    //jquery( 'a[href*="/"]' ).addClass('active');
  }, []);

  return (
    <>
      <div className="layout-right-side">
        <Container>
          <Card className="border-0">
            <Card.Body className="mt-4">
              <Card.Title>
                <status-indicator positive pulse></status-indicator>COMPLETED
              </Card.Title>
              <Card className="border-0 border-top mt-4">
                <Form>
                  <Row className="mt-4">
                    <Col>
                      <Form.Label htmlFor="inputId">ID</Form.Label>
                      <Form.Control
                        type="text"
                        id="inputId"
                        aria-describedby="IdHelpBlock"
                      />
                    </Col>
                    <Col>
                      <Form.Label htmlFor="inputFirmVersion">
                        Firmware version
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="inputFirmVersion"
                        aria-describedby="FirmVersionHelpBlock"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label htmlFor="inputSerialNo">
                        Serial Number
                      </Form.Label>
                      <Form.Control
                        type="number"
                        id="inputSerialNo"
                        aria-describedby="SerialNoHelpBlock"
                      />
                    </Col>
                    <Col>
                      <Form.Label htmlFor="inputAPIverion">
                        API version
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="inputAPIverion"
                        aria-describedby="APIverionHelpBlock"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label htmlFor="inputLastMaintenance">
                        Last Maintenance
                      </Form.Label>
                      <Form.Control
                        type="date"
                        id="inputLastMaintenance"
                        aria-describedby="LastMaintenanceHelpBlock"
                      />
                    </Col>
                    <Col>
                      <Form.Label htmlFor="inputOSversion">
                        Price Software OS verison
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="inputOSversion"
                        aria-describedby="OSversionHelpBlock"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label htmlFor="inputNextMaintenanceDue">
                        Next Maintenance Due
                      </Form.Label>
                      <Form.Control
                        type="date"
                        id="inputNextMaintenanceDue"
                        aria-describedby="NextMaintenanceDueHelpBlock"
                      />
                    </Col>
                    <Col>
                      <Form.Label htmlFor="inputActualRunningVirus">
                        Actual Running Virus
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="inputActualRunningVirus"
                        aria-describedby="ActualRunningVirusHelpBlock"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Label htmlFor="inputAPIActualRunning">
                        API Actual Code Running
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="inputAPIActualRunning"
                        aria-describedby="APIActualRunningHelpBlock"
                      />
                    </Col>
                  </Row>
                  <Button variant="warning" type="submit" className="mt-4">
                    Review Report
                  </Button>
                </Form>
              </Card>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default ReviewReport;

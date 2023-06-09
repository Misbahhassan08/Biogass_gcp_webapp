import React, {  useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,Row,Col,Form,Card
}from "react-bootstrap";

function Generatereports() {
    useEffect(() => {
      document.title = "generate reports new";
    }, []);
  
   
    return (
      <>
        <div className="layout-right-side generate-reports">
          <Container>     
  <Row>
  <Col>
  <div class="mt-2 text-light-blue main-title mb-0 text-uppercase card-title h5 mb-4">Create Monthly report </div>
  <Link
  to={`${process.env.PUBLIC_URL}/reports/generate-reports`} className="report-info-btn px-4  py-2 rounded-pill"
>To CDC</Link>
<Link
  to={`${process.env.PUBLIC_URL}/reports/generate-reports`} className="report-info-btn px-4 mx-2 py-2 rounded-pill"
>To Sentinel Site</Link>
<Form.Control type="text" placeholder="Sent code
"  className="mt-4 w-75"/>
  </Col>
  <Col>
  <div class="mt-2 text-light-blue main-title mb-0 text-uppercase card-title h5 mb-4 ">Create Annual report</div>
  <Link
  to={`${process.env.PUBLIC_URL}/reports/generate-reports`} className="report-info-btn px-4  py-2 rounded-pill"
>To CDC</Link>
  </Col>
  
  </Row>
  <Row className=" mx-auto">
            <Col>
              <Card className="mt-4">
                <Card.Body >
                <div class="mt-2 text-light-blue main-title mb-0 text-uppercase card-title h5 mb-4 text-center justify-content-center">GENERATE CUSTOM REPORT</div>
                <Row className="generate-form">
                  <Col>
                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <Form.Label htmlFor="inputCassetteBarcode" className="mt-2 ">Time period
                    </Form.Label>
                    <Form.Control type="text" id="inputCassetteBarcode"  aria-describedby="CassetteBarcodeHelpBlock"  className="mt-1"  />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <Form.Label htmlFor="inputCassetteBarcode" className="mt-2 ">Technician
                    </Form.Label>
                    <Form.Control type="text" id="inputCassetteBarcode"  aria-describedby="CassetteBarcodeHelpBlock"  className="mt-1"  />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <Form.Label htmlFor="inputCassetteBarcode" className="mt-2 ">Antibiotics
                    </Form.Label>
                    <Form.Control type="text" id="inputCassetteBarcode"  aria-describedby="CassetteBarcodeHelpBlock"  className="mt-1"  />
                    </Form.Group>
                  </Col>
                  <Col>
                  <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                  <Form.Label htmlFor="inputCassetteBarcode" className="mt-2 ">Rack
                  </Form.Label>
                  <Form.Control type="text" id="inputCassetteBarcode"  aria-describedby="CassetteBarcodeHelpBlock"  className="mt-1"  />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                  <Form.Label htmlFor="inputCassetteBarcode" className="mt-2 ">Bay #
                  </Form.Label>
                  <Form.Control type="text" id="inputCassetteBarcode"  aria-describedby="CassetteBarcodeHelpBlock"  className="mt-1"  />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                  <Form.Label htmlFor="inputCassetteBarcode" className="mt-2 ">Resistance
                  </Form.Label>
                  <Form.Control type="text" id="inputCassetteBarcode"  aria-describedby="CassetteBarcodeHelpBlock"  className="mt-1"  />
                  </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <Form.Label htmlFor="inputCassetteBarcode" className="mt-2 ">Other??

                </Form.Label>
                <Form.Control type="text" id="inputCassetteBarcode"  aria-describedby="CassetteBarcodeHelpBlock"  className="mt-1"  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <Form.Label htmlFor="inputCassetteBarcode" className="mt-2 ">Alert Isolate 
                </Form.Label>
                <Form.Control type="text" id="inputCassetteBarcode"  aria-describedby="CassetteBarcodeHelpBlock"  className="mt-1"  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <Form.Label htmlFor="inputCassetteBarcode" className="mt-2">Sentinel Site
                </Form.Label>
                <Form.Control type="text" id="inputCassetteBarcode"  aria-describedby="CassetteBarcodeHelpBlock"  className="mt-1"  />
                </Form.Group>
              </Col>
                </Row>
                
                </Card.Body>
              </Card>
            </Col>
          </Row>
 
          </Container>
        </div>
      </>
    );
  }
  
  export default Generatereports;
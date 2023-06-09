import React, { useState, useEffect } from "react";
import {} from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Form,
  CardGroup,
} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import * as FaIcons from "react-icons/fa";

function RackCompleted() {
  useEffect(() => {
    document.title = "Rack Status Completed";
  }, []);

  const [setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <div className="layout-right-side">
        <Container>
          <h2 className="main-title text-center mb-5 text-light-blue">
            Rack Status/Rack1/Completed
          </h2>

          <Row className="home-card mx-auto">
            <Col>
              <Card onClick={handleShow}>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    <h2 className="main-title text-center mb-2 text-light-blue">
                      Rack 1
                    </h2>
                    <CardGroup>
                      <Card className="cardcomplete1">
                        <form className="list-item1">
                          <ul>
                            <div className="d-flex mb-3">
                              <div className="status-info text-light">
                                <FaIcons.FaThermometerHalf className="color-yellow" />
                                36c
                              </div>
                              <div className="status-info text-light mx-3">
                                <FaIcons.FaGlassMartiniAlt className="color-yellow" />
                                5%
                              </div>
                            </div>
                            <li>
                              Complete
                              <Button variant="dark1 notification-btn">
                                4
                              </Button>
                            </li>
                          </ul>
                          <h2 className="mb-3">Complete</h2>
                          <div className="table-responsive">
                            <Table striped bordered hover>
                              <thead>
                                <tr>
                                  <th className="text-light">#</th>
                                  <th className="text-light">Accession</th>
                                  <th className="text-light">Bay</th>
                                  <th className="text-light">Info/Details</th>
                                  <th className="text-light">Result</th>
                                  <th className="text-light">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="text-light">1</td>
                                  <td>
                                    <Form.Control type="text" placeholder="" />
                                  </td>
                                  <td>
                                    <Form.Control type="text" placeholder="" />
                                  </td>
                                  <td>
                                    <Form.Control type="text" placeholder="" />
                                  </td>
                                  <td>
                                    <Form.Control type="text" placeholder="" />
                                  </td>
                                  <td>
                                    <Form.Control type="text" placeholder="" />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-light">2</td>
                                  <td>
                                    <Form.Control type="text" placeholder="" />
                                  </td>
                                  <td>
                                    <Form.Control type="text" placeholder="" />
                                  </td>
                                  <td>
                                    <Form.Control type="text" placeholder="" />
                                  </td>
                                  <td>
                                    <Form.Control type="text" placeholder="" />
                                  </td>
                                  <td>
                                    <Form.Control type="text" placeholder="" />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-light">3</td>
                                  <td>
                                    <Form.Control type="text" placeholder="" />
                                  </td>
                                  <td>
                                    <Form.Control type="text" placeholder="" />
                                  </td>
                                  <td>
                                    <Form.Control type="text" placeholder="" />
                                  </td>
                                  <td>
                                    <Form.Control type="text" placeholder="" />
                                  </td>
                                  <td>
                                    <Form.Control type="text" placeholder="" />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-light">4</td>
                                  <td>
                                    <Form.Control type="text" placeholder="" />
                                  </td>
                                  <td>
                                    <Form.Control type="text" placeholder="" />
                                  </td>
                                  <td>
                                    <Form.Control type="text" placeholder="" />
                                  </td>
                                  <td>
                                    <Form.Control type="text" placeholder="" />
                                  </td>
                                  <td>
                                    <Form.Control type="text" placeholder="" />
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>

                          <p class="status">
                            Status:<span> OK</span>
                          </p>
                        </form>
                      </Card>
                    </CardGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default RackCompleted;

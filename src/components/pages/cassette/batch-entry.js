import React, { useEffect } from "react";
import {} from "react-router-dom";
import { Link } from "react-router-dom";
import { Card, Form, Row, Col, Container } from "react-bootstrap";
import * as IoIcons from "react-icons/io";
import Table from "react-bootstrap/Table";
import * as FaIcons from "react-icons/fa";

function CassetteResult() {
  useEffect(() => {
    document.title = "Batch Entry";
  }, []);

  return (
    <>
      <div className="layout-right-side cassette-load-batch">
        <Container className="text-center">
          <Row className="home-card mt-0">
            <Col>
              <Card className="border-0">
                <Card.Body className="mobile-padding-0">
                
                <div className="table-responsive">
                  <Table  className="batch-entry-table">
                    <thead>
                    <tr>
                        <th colspan="3">SCAN SAMPLE BARCODE</th>
                        <th colspan="3">SCAN CASSETTE BARCODE</th>
                      </tr>
                      <tr>
                        <th>Fill your sample barcode</th>
                        <th colspan="2">Isolate #</th>
                        <th colspan="3">Fill your cassette barcode</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="cassette-barcode-input first-td">
                        <div className="upperdiv">
                          <Form.Control
                            type="text"
                            id="inputCassetteBarcode"
                            aria-describedby="CassetteBarcodeHelpBlock"
                            className="mt-1"
                            placeholder="Cassette Barcode"
                          />
                          <p className="close-icon">
                            <IoIcons.IoIosClose />
                          </p>
                          </div>
                          <div className="bottomdiv">
                          <div className="add-more-barcode  ">
                          <Link
                            to={`${process.env.PUBLIC_URL}/cassette/manually`}
                          >
                            <FaIcons.FaEdit className="color-yellow" />
                            <p className="mb-0 bold-corbel text-dark">
                              Scanner not working, Enter manually
                            </p>
                          </Link>
                        </div>
                        </div>
                        </td>

                        <td
                          
                          colspan="2"
                          className="isolate-td second-td"
                        >
                          <table className="table-inner">
                            <tr className="d-flex">
                              <Form.Select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </Form.Select>
                              <Form.Control
                                type="text"
                                placeholder="Enter text"
                              />
                            </tr>
                          </table>
                        </td>

                        <td className="cassette-barcode-input cassette-barcode-input1 third-td">
                        <div className="upperdiv">
                          <label className="text-dark bold-corbel">A</label>
                          <Form.Control
                            type="text"
                            id="inputCassetteBarcode"
                            aria-describedby="CassetteBarcodeHelpBlock"
                            className="mt-1"
                            placeholder="Cassette Barcode"
                          />
                          <p className="close-icon">
                            <IoIcons.IoIosClose />
                          </p>
                          </div>
                          <div className="bottomdiv">
                          <label className="text-dark bold-corbel">B</label>
                          <Form.Control
                            type="text"
                            id="inputCassetteBarcode"
                            aria-describedby="CassetteBarcodeHelpBlock"
                            className="mt-1"
                            placeholder="Cassette Barcode"
                          />
                          <p className="close-icon">
                            <IoIcons.IoIosClose />
                          </p>
                          </div>
                        </td>
                        <td  className="fourth-td">
                          <Link to={''} className="report-info-btn px-4 py-2 rounded-pill ">Done</Link>
                        </td>
                        <td  className="fifth-td">
                          <Link to={''}><IoIcons.IoMdTrash /></Link>
                        </td>
                      </tr>
                      

                      <tr>
                        <td className="cassette-barcode-input first-td">
                        <div className="upperdiv">
                          <Form.Control
                            type="text"
                            id="inputCassetteBarcode"
                            aria-describedby="CassetteBarcodeHelpBlock"
                            className="mt-1"
                            placeholder="Cassette Barcode"
                          />
                          <p className="close-icon">
                            <IoIcons.IoIosClose />
                          </p>
                          </div>
                          <div className="bottomdiv">
                          <div className="add-more-barcode  ">
                          <Link
                            to={`${process.env.PUBLIC_URL}/cassette/manually`}
                          >
                            <FaIcons.FaEdit className="color-yellow" />
                            <p className="mb-0 bold-corbel text-dark">
                              Scanner not working, Enter manually
                            </p>
                          </Link>
                        </div>
                        </div>
                        </td>

                        <td
                          
                          colspan="2"
                          className="isolate-td second-td"
                        >
                          <table className="table-inner">
                            <tr className="d-flex">
                              <Form.Select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </Form.Select>
                              <Form.Control
                                type="text"
                                placeholder="Enter text"
                              />
                            </tr>
                          </table>
                        </td>

                        <td className="cassette-barcode-input cassette-barcode-input1 third-td">
                        <div className="upperdiv">
                          <label className="text-dark bold-corbel">A</label>
                          <Form.Control
                            type="text"
                            id="inputCassetteBarcode"
                            aria-describedby="CassetteBarcodeHelpBlock"
                            className="mt-1"
                            placeholder="Cassette Barcode"
                          />
                          <p className="close-icon">
                            <IoIcons.IoIosClose />
                          </p>
                          </div>
                          <div className="bottomdiv">
                          <label className="text-dark bold-corbel">B</label>
                          <Form.Control
                            type="text"
                            id="inputCassetteBarcode"
                            aria-describedby="CassetteBarcodeHelpBlock"
                            className="mt-1"
                            placeholder="Cassette Barcode"
                          />
                          <p className="close-icon">
                            <IoIcons.IoIosClose />
                          </p>
                          </div>
                        </td>
                        <td  className="fourth-td">
                          <Link to={''} className="report-info-btn px-4 py-2 rounded-pill ">Done</Link>
                        </td>
                        <td  className="fifth-td">
                          <Link to={''}><IoIcons.IoMdTrash /></Link>
                        </td>
                      </tr>
                      <tr>
                      <td className="cassette-barcode-input first-td">
                      <div className="upperdiv">
                        <Form.Control
                          type="text"
                          id="inputCassetteBarcode"
                          aria-describedby="CassetteBarcodeHelpBlock"
                          className="mt-1"
                          placeholder="Cassette Barcode"
                        />
                        <p className="close-icon">
                          <IoIcons.IoIosClose />
                        </p>
                        </div>
                        <div className="bottomdiv">
                        <div className="add-more-barcode  ">
                        <Link
                          to={`${process.env.PUBLIC_URL}/cassette/manually`}
                        >
                          <FaIcons.FaEdit className="color-yellow" />
                          <p className="mb-0 bold-corbel text-dark">
                            Scanner not working, Enter manually
                          </p>
                        </Link>
                      </div>
                      </div>
                      </td>

                      <td
                        
                        colspan="2"
                        className="isolate-td second-td"
                      >
                        <table className="table-inner">
                          <tr className="d-flex">
                            <Form.Select>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </Form.Select>
                            <Form.Control
                              type="text"
                              placeholder="Enter text"
                            />
                          </tr>
                        </table>
                      </td>

                      <td className="cassette-barcode-input cassette-barcode-input1 third-td">
                      <div className="upperdiv">
                        <label className="text-dark bold-corbel">A</label>
                        <Form.Control
                          type="text"
                          id="inputCassetteBarcode"
                          aria-describedby="CassetteBarcodeHelpBlock"
                          className="mt-1"
                          placeholder="Cassette Barcode"
                        />
                        <p className="close-icon">
                          <IoIcons.IoIosClose />
                        </p>
                        </div>
                        <div className="bottomdiv">
                        <label className="text-dark bold-corbel">B</label>
                        <Form.Control
                          type="text"
                          id="inputCassetteBarcode"
                          aria-describedby="CassetteBarcodeHelpBlock"
                          className="mt-1"
                          placeholder="Cassette Barcode"
                        />
                        <p className="close-icon">
                          <IoIcons.IoIosClose />
                        </p>
                        </div>
                      </td>
                      <td  className="fourth-td">
                          <Link to={''} className="report-info-btn px-4 py-2 rounded-pill ">Done</Link>
                        </td>
                        <td  className="fifth-td">
                          <Link to={''}><IoIcons.IoMdTrash /></Link>
                        </td>
                    </tr>
                    <tr>
                    <td className="cassette-barcode-input first-td">
                    <div className="upperdiv">
                      <Form.Control
                        type="text"
                        id="inputCassetteBarcode"
                        aria-describedby="CassetteBarcodeHelpBlock"
                        className="mt-1"
                        placeholder="Cassette Barcode"
                      />
                      <p className="close-icon">
                        <IoIcons.IoIosClose />
                      </p>
                      </div>
                      <div className="bottomdiv">
                      <div className="add-more-barcode  ">
                      <Link
                        to={`${process.env.PUBLIC_URL}/cassette/manually`}
                      >
                        <FaIcons.FaEdit className="color-yellow" />
                        <p className="mb-0 bold-corbel text-dark">
                          Scanner not working, Enter manually
                        </p>
                      </Link>
                    </div>
                    </div>
                    </td>

                    <td
                      
                      colspan="2"
                      className="isolate-td second-td"
                    >
                      <table className="table-inner">
                        <tr className="d-flex">
                          <Form.Select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Select>
                          <Form.Control
                            type="text"
                            placeholder="Enter text"
                          />
                        </tr>
                      </table>
                    </td>

                    <td className="cassette-barcode-input cassette-barcode-input1 third-td">
                    <div className="upperdiv">
                      <label className="text-dark bold-corbel">A</label>
                      <Form.Control
                        type="text"
                        id="inputCassetteBarcode"
                        aria-describedby="CassetteBarcodeHelpBlock"
                        className="mt-1"
                        placeholder="Cassette Barcode"
                      />
                      <p className="close-icon">
                        <IoIcons.IoIosClose />
                      </p>
                      </div>
                      <div className="bottomdiv">
                      <label className="text-dark bold-corbel">B</label>
                      <Form.Control
                        type="text"
                        id="inputCassetteBarcode"
                        aria-describedby="CassetteBarcodeHelpBlock"
                        className="mt-1"
                        placeholder="Cassette Barcode"
                      />
                      <p className="close-icon">
                        <IoIcons.IoIosClose />
                      </p>
                      </div>
                    </td>
                    <td  className="fourth-td">
                          <Link to={''} className="report-info-btn px-4 py-2 rounded-pill ">Done</Link>
                        </td>
                        <td  className="fifth-td">
                          <Link to={''}><IoIcons.IoMdTrash /></Link>
                        </td>
                  </tr>
                  <tr>
                  <td className="cassette-barcode-input first-td">
                  <div className="upperdiv">
                    <Form.Control
                      type="text"
                      id="inputCassetteBarcode"
                      aria-describedby="CassetteBarcodeHelpBlock"
                      className="mt-1"
                      placeholder="Cassette Barcode"
                    />
                    <p className="close-icon">
                      <IoIcons.IoIosClose />
                    </p>
                    </div>
                    <div className="bottomdiv">
                    <div className="add-more-barcode  ">
                    <Link
                      to={`${process.env.PUBLIC_URL}/cassette/manually`}
                    >
                      <FaIcons.FaEdit className="color-yellow" />
                      <p className="mb-0 bold-corbel text-dark">
                        Scanner not working, Enter manually
                      </p>
                    </Link>
                  </div>
                  </div>
                  </td>

                  <td
                    
                    colspan="2"
                    className="isolate-td second-td"
                  >
                    <table className="table-inner">
                      <tr className="d-flex">
                        <Form.Select>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Form.Select>
                        <Form.Control
                          type="text"
                          placeholder="Enter text"
                        />
                      </tr>
                    </table>
                  </td>

                  <td className="cassette-barcode-input cassette-barcode-input1 third-td">
                  <div className="upperdiv">
                    <label className="text-dark bold-corbel">A</label>
                    <Form.Control
                      type="text"
                      id="inputCassetteBarcode"
                      aria-describedby="CassetteBarcodeHelpBlock"
                      className="mt-1"
                      placeholder="Cassette Barcode"
                    />
                    <p className="close-icon">
                      <IoIcons.IoIosClose />
                    </p>
                    </div>
                    <div className="bottomdiv">
                    <label className="text-dark bold-corbel">B</label>
                    <Form.Control
                      type="text"
                      id="inputCassetteBarcode"
                      aria-describedby="CassetteBarcodeHelpBlock"
                      className="mt-1"
                      placeholder="Cassette Barcode"
                    />
                    <p className="close-icon">
                      <IoIcons.IoIosClose />
                    </p>
                    </div>
                  </td>
                  <td  className="fourth-td">
                          <Link to={''} className="report-info-btn px-4 py-2 rounded-pill ">Done</Link>
                        </td>
                        <td  className="fifth-td">
                          <Link to={''}><IoIcons.IoMdTrash /></Link>
                        </td>
                </tr>
                    </tbody>
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

export default CassetteResult;

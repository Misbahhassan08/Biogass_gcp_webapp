import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import { rackStatusEndPoint } from "../../../config";
import BeatLoader from "react-spinners/BeatLoader";

function ReaderStatus() {
  const [status, setStatus] = useState();

  const statusUrl = rackStatusEndPoint;

  const override: CSSProperties = {
    display: "block",
    margin: "20% auto",
    borderColor: "red",
    textAlign: "center"
  };

  useEffect(() => {
    document.title = "Reader Status";

    getStatus()

    const interval = setInterval(() => {
      getStatus();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const getStatus = async () => {
    try {
      const response = await fetch(statusUrl);
      const json = await response.json();
      setStatus(json);
      console.log(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div className="layout-right-side rack-status">
        <Container>
          <h2 className="main-title text-center mb-5 text-light-blue">
            RACK STATUS / HOME SCREEN
          </h2>

          <Row className="home-card mx-auto">
            {status ? (
              status.map((index) => {
                return (
                  <Col className="col-md-6 mb-5">
                    <Card>
                      <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                          <h2 className="main-title text-center mb-2 text-light-blue">
                            Rack {index.rackNum}
                          </h2>

                          <ul className="list-item">
                            <div className="d-flex justify-content-center mb-3">
                              <div className="status-info text-light">
                                <FaIcons.FaThermometerHalf className="color-yellow" />
                                {index.temp}°C
                              </div>
                              <div className="status-info text-light mx-3">
                                <FaIcons.FaGlassMartiniAlt className="color-yellow" />
                                {index.progress}%
                              </div>
                            </div>
                            <li>
                              <label>Open Bay</label>
                              <Button variant="dark1">{index.openBay}</Button>
                            </li>
                            <li>
                              <label>Running</label>
                              <Link to={`${process.env.PUBLIC_URL}/cassette`}>
                                <Button variant="dark2">{index.running}</Button>
                              </Link>
                            </li>
                            <li>
                              <label>Complete</label>
                              <Link
                                to={`${process.env.PUBLIC_URL}/rack1/completed`}
                              >
                                <Button variant="dark3">
                                  {index.complete}
                                </Button>
                              </Link>
                            </li>
                            <li>
                              <label>Bay Errors</label>
                              <Link
                                to={`${process.env.PUBLIC_URL}/rack1/error`}
                              >
                                <Button variant="dark4">
                                  {index.bayError}
                                </Button>
                              </Link>
                            </li>
                            <li className="error">Status: {index.status}</li>
                          </ul>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <BeatLoader
                color={"#39c2d3"}
                loading={status}
                cssOverride={override}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            )}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ReaderStatus;

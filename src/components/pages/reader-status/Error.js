import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  Form,
  Carousel,
  CardGroup,
} from "react-bootstrap";
import { rackStatusEndPoint } from "../../../config";
import BeatLoader from "react-spinners/BeatLoader";

function RackError() {
  const [status, setStatus] = useState();
  const [cardClass, setCardClass] = useState("cardOpen");
  const [openCardIndex, setOpenCardIndex] = useState(0);

  const statusUrl = rackStatusEndPoint;

  useEffect(() => {
    document.title = "Rack Status Error";
    getStatus();

    // const interval = setInterval(() => {
    //   getStatus();
    // }, 10000);
    // return () => clearInterval(interval);
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

  function toggleCard(index) {
    // setOpenCardIndex(index === openCardIndex ? -1 : index);
    setOpenCardIndex(index);
  }

  return (
    <>
      <div className="layout-right-side error">
        <Container>
          <h2 className="main-title text-center mb-5 text-light-blue">
            Rack Status/Rack1/Error
          </h2>

          <Row className="home-card mx-auto">
            {status &&
              status.map((index, cardIndex) => {
                console.log(index.errorList[0], "error list");
                return (
                  <Col
                    key={index}
                    className={
                      cardIndex === openCardIndex
                        ? "errorSliderColOpen"
                        : "errorSliderColClose"
                    }
                  >
                    <Card.Body>
                      <Card.Title></Card.Title>
                      {cardIndex === openCardIndex ? (
                        <h2 className="main-title text-center mb-2 text-light-blue">
                          Rack {index.rackNum}
                        </h2>
                      ) : (
                        <h2 className="main-title text-center mb-2 text-light-blue">
                          {index.rackNum}
                        </h2>
                      )}
                      <Card.Text>
                        <Card
                          className={
                            cardIndex === openCardIndex
                              ? "cardOpen"
                              : "cardClose"
                          }
                          onClick={() => {
                            toggleCard(cardIndex);
                          }}
                        >
                          <form className="list-item1">
                            <ul>
                              <div className="d-flex mb-3">
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
                                Total Error
                                <Button
                                  variant="dark1"
                                  className="notification-btn"
                                >
                                  {index.bayError}
                                </Button>
                              </li>
                            </ul>
                            <h2>Error Details</h2>
                            <h3>Action</h3>
                            <InputGroup size="sm" className="mb-3">
                              <InputGroup.Text id="inputGroup-sizing-sm">
                                Error-A:
                              </InputGroup.Text>
                              <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                                value={index.errorList[0]}
                              />
                              <Button variant="dark6">Eject cassette</Button>
                            </InputGroup>
                            <InputGroup size="sm" className="mb-3">
                              <InputGroup.Text id="inputGroup-sizing-sm">
                                Error-B:
                              </InputGroup.Text>
                              <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                                value={index.errorList[1]}
                              />
                              <Button variant="dark7"></Button>
                            </InputGroup>
                            <p>Bay-{index.rackNum}</p>
                            <p>
                              Status:<span> {index.status} </span>
                            </p>
                          </form>
                        </Card>
                      </Card.Text>
                    </Card.Body>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default RackError;

import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import TextFields from "./modules/axis-text-fields";
import DataTypeSelect from "./modules/dataType";
import SimpleGraphData from "./modules/simpleGraphData";
import NormalizedGraphData from "./modules/normalizedGraph/normalizedGraphs";

function BuildReportGraph() {
  const get_graph_data =
    "https://a7ce-182-178-148-176.ngrok-free.app/api/get_graph_meta_data";

  const [sensor, setSensor] = useState([]);
  const [dataType, setDataType] = useState();
  const [checkResponse, setCheckResponse] = useState(false);
  const [renderGraphData, setRenderGraphData] = useState();
  const [graphName, setGraphName] = useState();
  const [normalizedGraph, setNormalizedGraph] = useState(false);
  const [minDateTime, setMinDateTime] = useState();
  const [maxDateTime, setMaxDateTime] = useState();
  const [minYValue, setMinYValue] = useState();
  const [maxYValue, setMaxYValue] = useState();

  function getSensorsClicked(value) {
    setSensor(value);
  }

  function getDataTypeClicked(value) {
    setDataType(value);
  }

  function getMinDateTime(value) {
    setMinDateTime(value);
  }

  function getMaxDateTime(value) {
    setMaxDateTime(value);
  }

  function getMinYValue(value) {
    setMinYValue(value);
    // console.log(value,"this is the y min value");
  }

  function getMaxYValue(value) {
    setMaxYValue(value);
    // console.log(value, "this is the y max value");
  }

  function requestData() {
    const requestJson = {
      Data_Point: sensor,
      // Data_Req: dataType,
      // userId: Math.random().toString(36).slice(2),
    };
    console.log(requestJson, "this is data request")

    // if (requestJson) {
    //   const requestPayload = JSON.stringify(requestJson);

    //   console.log(requestPayload, "this is the data published");
    //   mqtt.requestData(requestTopic, requestPayload);
    // }

    requestDataApi(requestJson);

    setRenderGraphData(sensor.sort());

    setGraphName(dataType);
    // console.log(minDateTime, "this is min value");
    checkNormalizedGraph();

    resetChart();
  }

  function requestDataApi(reqObj) {
    fetch(get_graph_data, {
      method: "POST",
      body: JSON.stringify(reqObj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        let newdata = data["result"];
        console.log(newdata, "new data")
        localStorage.setItem("mqttResponseDataNormalized", JSON.stringify(newdata));
        checkData();
        // setRowsData(newdata);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function checkData() {
    if (localStorage.getItem("mqttResponseDataNormalized")) {
      setCheckResponse(true);
    } else {
      console.error("Error");
    }
  }

  function checkNormalizedGraph() {
    if (dataType === "Nrm") {
      setNormalizedGraph(true);
      console.log(normalizedGraph, "this is the normalized graph");
    } else {
      setNormalizedGraph(false);
      console.log(normalizedGraph, "this is the normalized graph");
    }
  }

  function resetChart() {
    setCheckResponse(false);
  }

  useEffect(() => {
    document.title = "Build Report";
  }, []);

  return (
    <>
      <div className="layout-right-side justify-content-center">
        <div>
          <Container>
            <Card className="text-center border-0 ">
              <Card.Body>
                {" "}
                <Card.Title className="text-green text-center justify-content-center text-uppercase font-38">
                  Graph Report
                </Card.Title>
                <Card.Text className="mx-auto mb-4" style={{ width: "40rem" }}>
                  Get Multiple Sensor Data With Normalized Data
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
          <Container style={{ backgroundColor: "#2484ac" }}>
            <Row className="border-bottom border-warning">
              <Col className="p-3 mt-2 align-self-center ">
                <h4 className="color-yellow">Format Graph</h4>
              </Col>
              <Col className="p-3" style={{ borderLeft: "1px solid #ffc107" }}>
                <Row>
                  <Col className="col-md-3"></Col>
                  <Col className="text-center pe-4">
                    <Row className="text-warning">
                      <span>X-axis</span>
                    </Row>
                    <Row className="text-white">
                      <Col>
                        <span>Min</span>
                      </Col>
                      <Col>
                        <span>Max</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="text-center pe-4">
                    <Row className="text-warning">
                      <span>Y-axis</span>
                    </Row>
                    <Row className="text-white">
                      <Col>
                        <span>Min</span>
                      </Col>
                      <Col>
                        <span>Max</span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col
                className="p-3 col-md-6"
                style={{ borderRight: "1px solid #ffc107" }}
              >
                <h5 className="text-white">Change Scale:</h5>
              </Col>
              <Col className="py-3">
                <TextFields
                  getSensors={getSensorsClicked}
                  getMaxDateTime={getMaxDateTime}
                  getMinDateTime={getMinDateTime}
                  getMinYValue={getMinYValue}
                  getMaxYValue={getMaxYValue}
                />
              </Col>
            </Row>
          </Container>
          <Container className="mt-5" style={{ backgroundColor: "#2484ac" }}>
            <Row>
              <Col className="p-3 mt-2 col-md-6 align-self-center">
                <h5 className="text-white">Data Type:</h5>
              </Col>
              <Col className="py-3" style={{ borderLeft: "1px solid #ffc107" }}>
                <DataTypeSelect getDataType={getDataTypeClicked} />
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="text-center mt-5">
              <Col>
                <Button
                  type="submit"
                  className="mx-2 menu-btn menu-btn1"
                  onClick={() => {
                    requestData();
                  }}
                >
                  Build Graph
                </Button>
              </Col>
            </Row>
          </Container>

          {normalizedGraph
            ? checkResponse && (
                // renderGraphData.map((item, index) => (
                <NormalizedGraphData
                  key={renderGraphData}
                  dataType={graphName}
                  xMinValue={minDateTime}
                  xMaxValue={maxDateTime}
                  yMinValue={minYValue}
                  yMaxValue={maxYValue}
                  loop={renderGraphData}
                  // index={index}
                />
              )
            : // ))
              checkResponse &&
              renderGraphData.map((item, index) => (
                <SimpleGraphData
                  key={index}
                  dataType={graphName}
                  xMinValue={minDateTime}
                  xMaxValue={maxDateTime}
                  yMinValue={minYValue}
                  yMaxValue={maxYValue}
                  index={index}
                />
              ))}
        </div>
      </div>
    </>
  );
}

export default BuildReportGraph;

import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import TextFields from "./modules/axis-text-fields";
import DataTypeSelect from "./modules/dataType";
import SimpleGraphData from "./modules/simpleGraphData";
import NormalizedGraphData from "./modules/normalizedGraph/normalizedGraphs";
import Groups from "./modules/groups";
import Sensors from "./modules/sensors";
import CustomFavNameDialog from "./modules/customFav";
import { baseApiUrl } from "../../../../config";
import dayjs from "dayjs";

function BuildReportGraph() {
  const get_graph_data = baseApiUrl + "/api/get_graph_meta_data";
  const save_fav_setting = baseApiUrl + "/api/save_fav_setting";

  const [sensor, setSensor] = useState([]);
  const [dataType, setDataType] = useState();
  const [checkResponse, setCheckResponse] = useState(false);
  const [renderGraphData, setRenderGraphData] = useState();
  const [graphName, setGraphName] = useState();
  const [normalizedGraph, setNormalizedGraph] = useState(false);
  const [minTime, setMinTime] = useState();
  const [maxTime, setMaxTime] = useState();
  const [minYValue, setMinYValue] = useState();
  const [maxYValue, setMaxYValue] = useState();
  const [selectedGroupId, setselectedGroupId] = useState();
  const [isCutomSetting, setIsCutomSetting] = useState(false);
  const [customSettingName, setCustomSettingName] = useState("");
  const [favList, setFavList] = useState();
  const [gfsid, setGfsid] = useState()

  function getSensorsClicked(value) {
    setSensor(value);
  }

  function getDataTypeClicked(value) {
    setDataType(value);
  }

  function getMinTime(value) {
    setMinTime(value);
  }

  function getMaxTime(value) {
    setMaxTime(value);
  }

  function getMinYValue(value) {
    setMinYValue(value);
    // console.log(value,"this is the y min value");
  }

  function getMaxYValue(value) {
    setMaxYValue(value);
    // console.log(value, "this is the y max value");
  }

  function getGroupId(value) {
    setselectedGroupId(value);
  }

  function getCustomSettingName(value) {
    setCustomSettingName(value);
    // console.log(value, "this is custom setting");
  }

  function getFavList(value) {
    setFavList(value);
    if (value !== "custom") {
      setIsCutomSetting(false);
    } else {
      setIsCutomSetting(true);
    }
  }

  function requestData() {
    const requestJson = {
      Data_Point: sensor[0],
      // Rack_Num: 1,
    };
    console.log(requestJson, "this is data request");

    requestDataApi(requestJson);

    setRenderGraphData(sensor[0]);

    setGraphName(dataType);
    // console.log(minTime, "this is min value");
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
        console.log(newdata, "new data");
        localStorage.setItem(
          "mqttResponseDataNormalized",
          JSON.stringify(newdata)
        );
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

  function customSettingsObject() {
    let type = {};
    switch (dataType) {
      case "Raw":
        type = {
          Raw: true,
          Cal: false,
          Nrm: false,
        };
        break;
      case "Cal":
        type = {
          Raw: false,
          Cal: true,
          Nrm: false,
        };
        break;
      case "Nrm":
        type = {
          Raw: false,
          Cal: false,
          Nrm: true,
        };
        break;
      default:
        break;
    }

    const data = {
      GroupID: selectedGroupId,
      Fav_setting_name: customSettingName,
      Wells: sensor,
      ScaleGraph: {
        xaxis: {
          Min: dayjs(minTime).format("HH:mm:ss"),
          Max: dayjs(maxTime).format("HH:mm:ss"),
        },
        yaxis: {
          Min: minYValue,
          Max: maxYValue,
        },
      },
      Data: type,
      Wavelength: [
        {
          ALL: true,
        },
        {
          Vio: false,
          Blu: false,
          Grn: false,
          Red: false,
          Yel: false,
          Org: false,
        },
      ],
    };

    //---------- save custom object -----------

    fetch(save_fav_setting, {
      method: "POST",
      body: JSON.stringify(data),
      cors: "no-cors",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        let newdata = data["result"];
        console.log(newdata.GFSID);
        setGfsid(newdata.GFSID)
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log(data, "this is object");
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
          <Container>
          <Groups getGroupId={getGroupId} getFavList={getFavList} getSensorsClicked={getSensorsClicked} getDataTypeClicked={getDataTypeClicked} getMinTime={getMinTime} getMaxTime={getMaxTime} getMinYValue= {getMinYValue} getMaxYValue={getMaxYValue} />
          </Container>
          <Container style={{ backgroundColor: "#2484ac" }}>
            <Row className="border-bottom border-warning">
              <Col className="p-3 mt-2 align-self-center ">
                <h4 className="color-yellow">Format Graph</h4>
              </Col>
              <Col className="p-3" style={{ borderLeft: "1px solid #ffc107" }}>
                <Row>
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
                <Sensors getSensors={getSensorsClicked} />
              </Col>
              <Col className="py-3">
                <TextFields
                  getMaxTime={getMaxTime}
                  getMinTime={getMinTime}
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
              {/* <Col>
                <Button
                  type="submit"
                  className="mx-2 menu-btn menu-btn1"
                  onClick={() => {
                    requestData();
                  }}
                >
                  Build Graph
                </Button>
              </Col> */}
              <Col>
                <Button type="submit" className="mx-2 menu-btn menu-btn2">
                  Add Group
                </Button>
              </Col>
              <Col>
                <Button type="submit" className="mx-2 menu-btn menu-btn1">
                  Cancel
                </Button>
              </Col>
              <Col>
                <Button type="submit" className="mx-2 menu-btn menu-btn2" onClick={requestData}>
                  Apply
                </Button>
              </Col>
              <Col>
                <Button
                  type="submit"
                  className="mx-2 menu-btn menu-btn1"
                  onClick={() => {
                    customSettingsObject();
                  }}
                >
                  Save Settings
                </Button>
                {isCutomSetting && (
                  <CustomFavNameDialog
                    getCustomSettingName={getCustomSettingName}
                  />
                )}
              </Col>
            </Row>
          </Container>

          {normalizedGraph
            ? checkResponse && (
                // renderGraphData.map((item, index) => (
                <NormalizedGraphData
                  key={renderGraphData}
                  dataType={graphName}
                  xMinValue={minTime}
                  xMaxValue={maxTime}
                  yMinValue={minYValue}
                  yMaxValue={maxYValue}
                  loop={renderGraphData}
                  // index={index}
                />
              )
            : // ))
              checkResponse &&
              renderGraphData.map((item, index) => (
                console.log(renderGraphData, "this is the index"),
                <SimpleGraphData
                  key={index}
                  dataType={graphName}
                  xMinValue={minTime}
                  xMaxValue={maxTime}
                  yMinValue={minYValue}
                  yMaxValue={maxYValue}
                  resetChart={resetChart}
                  index={index}
                />
              ))}
        </div>
      </div>
    </>
  );
}

export default BuildReportGraph;

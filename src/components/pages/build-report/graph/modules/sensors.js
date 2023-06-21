import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";
import TextField from "@mui/material/TextField";
import DateTimeModal from "./dateTimeModal";
import { useState } from "react";

function Sensors(props) {
  const [editA0, setEditA0] = useState(false);
  const [editA1, setEditA1] = useState(false);
  const [editA2, setEditA2] = useState(false);
  const [editA3, setEditA3] = useState(false);
  const [editA4, setEditA4] = useState(false);

  const [editB0, setEditB0] = useState(false);
  const [editB1, setEditB1] = useState(false);
  const [editB2, setEditB2] = useState(false);
  const [editB3, setEditB3] = useState(false);
  const [editB4, setEditB4] = useState(false);

  const [editC0, setEditC0] = useState(false);
  const [editC1, setEditC1] = useState(false);
  const [editC2, setEditC2] = useState(false);
  const [editC3, setEditC3] = useState(false);
  const [editC4, setEditC4] = useState(false);

  const [clickedASensors, setclickedASensors] = useState([]);
  const [clickedBSensors, setclickedBSensors] = useState([]);
  const [clickedCSensors, setclickedCSensors] = useState([]);

  // const [sensorsClicked, setSensorsClicked] = useState([]);

  useEffect(() => {
    const clickedSensors = [];
    if (editA0) {
      clickedSensors.push(0);
    }
    if (editA1) {
      clickedSensors.push(1);
    }
    if (editA2) {
      clickedSensors.push(2);
    }
    if (editA3) {
      clickedSensors.push(3);
    }
    if (editA4) {
      clickedSensors.push(4);
    }
    setclickedASensors(clickedSensors);
  }, [editA0, editA1, editA2, editA3, editA4]);

  useEffect(() => {
    const clickedSensors = [];
    if (editB0) {
      clickedSensors.push(0);
    }
    if (editB1) {
      clickedSensors.push(1);
    }
    if (editB2) {
      clickedSensors.push(2);
    }
    if (editB3) {
      clickedSensors.push(3);
    }
    if (editB4) {
      clickedSensors.push(4);
    }
    setclickedBSensors(clickedSensors);
  }, [editB0, editB1, editB2, editB3, editB4]);

  useEffect(() => {
    const clickedSensors = [];
    if (editC0) {
      clickedSensors.push(0);
    }
    if (editC1) {
      clickedSensors.push(1);
    }
    if (editC2) {
      clickedSensors.push(2);
    }
    if (editC3) {
      clickedSensors.push(3);
    }
    if (editC4) {
      clickedSensors.push(4);
    }
    setclickedCSensors(clickedSensors);
  }, [editC0, editC1, editC2, editC3, editC4]);

  useEffect(() => {
    // const sensors = clickedASensors.concat(clickedBSensors.concat(clickedCSensors))
    const sensors = [clickedASensors, clickedBSensors, clickedCSensors];
    // const sensors = {
    //   "A": [clickedASensors],
    //   "B": [clickedBSensors],
    //   "C": [clickedCSensors],    }
    // sensorsClicked(sensors);
    props.getSensors(sensors);
  }, [clickedASensors, clickedBSensors, clickedCSensors]);

  useEffect(() => {
    if (props.settingsButtonClicked) {
      const data = localStorage.getItem("UserFavSettingObj");
      const parsedObj = JSON.parse(data);
      const requiredSensors = parsedObj.Wells;
      // console.log(parsedObj.Wells, "parsed object");

      for (let i = 0; i < 5; i++) {
        const stateNameA = `setEditA${i}`;
        eval(`${stateNameA}(false);`);

        const stateNameB = `setEditB${i}`;
        eval(`${stateNameB}(false);`);

        const stateNameC = `setEditC${i}`;
        eval(`${stateNameC}(false);`);
              
      }  
      
      for (let i = 0; i < 3; i++) {
          for (let j = 0; j < requiredSensors[i].length; j++) {
            if (i == 0) {
              const sensorValue = requiredSensors[i][j];
              const stateVariable = `setEditA${sensorValue}`;
              eval(`${stateVariable}(true);`);
              // console.log(`setEditA${sensorValue}`, "this is the sensors in ", i);
            }
            if (i == 1) {
              const sensorValue = requiredSensors[i][j];
              const stateVariable = `setEditB${sensorValue}`;
              eval(`${stateVariable}(true);`);
            }
            if (i == 2) {
              const sensorValue = requiredSensors[i][j];
              const stateVariable = `setEditC${sensorValue}`;
              eval(`${stateVariable}(true);`);
            }
          }          
        }
      props.settingsButtonClickedFalse();
    }
  }, [props.settingsButtonClicked]);

  return (
    <>
      <Row>
        {/* sensors A */}
        <Col className="col-md-4 Axis-Text-Field-Row">
          <Row>
            <h5 className="text-white "> A </h5>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="A0"
                  style={{ color: "white" }}
                  checked={editA0}
                  onChange={(e) => {
                    setEditA0(e.target.checked);
                  }}
                />
              }
              label="A0"
            />
          </Row>
          <Row>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="A1"
                  style={{ color: "white" }}
                  checked={editA1}
                  onChange={(e) => {
                    setEditA1(e.target.checked);
                  }}
                />
              }
              label="A1"
            />
          </Row>
          <Row>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="A2"
                  style={{ color: "white" }}
                  checked={editA2}
                  onChange={(e) => {
                    setEditA2(e.target.checked);
                  }}
                />
              }
              label="A2"
            />
          </Row>
          <Row>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="A3"
                  style={{ color: "white" }}
                  checked={editA3}
                  onChange={(e) => {
                    setEditA3(e.target.checked);
                  }}
                />
              }
              label="A3"
            />
          </Row>
          <Row>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="A4"
                  style={{ color: "white" }}
                  checked={editA4}
                  onChange={(e) => {
                    setEditA4(e.target.checked);
                  }}
                />
              }
              label="A4"
            />
          </Row>
        </Col>

        {/* sensors B */}
        <Col className="col-md-4 Axis-Text-Field-Row">
          <Row>
            <h5 className="text-white "> B </h5>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="B0"
                  style={{ color: "white" }}
                  checked={editB0}
                  onChange={(e) => {
                    setEditB0(e.target.checked);
                  }}
                />
              }
              label="B0"
            />
          </Row>
          <Row>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="B1"
                  style={{ color: "white" }}
                  checked={editB1}
                  onChange={(e) => {
                    setEditB1(e.target.checked);
                  }}
                />
              }
              label="B1"
            />
          </Row>
          <Row>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="B2"
                  style={{ color: "white" }}
                  checked={editB2}
                  onChange={(e) => {
                    setEditB2(e.target.checked);
                  }}
                />
              }
              label="B2"
            />
          </Row>
          <Row>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="B3"
                  style={{ color: "white" }}
                  checked={editB3}
                  onChange={(e) => {
                    setEditB3(e.target.checked);
                  }}
                />
              }
              label="B3"
            />
          </Row>
          <Row>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="B4"
                  style={{ color: "white" }}
                  checked={editB4}
                  onChange={(e) => {
                    setEditB4(e.target.checked);
                  }}
                />
              }
              label="B4"
            />
          </Row>
        </Col>

        {/* sensors A */}
        <Col className="col-md-4 Axis-Text-Field-Row">
          <Row>
            <h5 className="text-white "> C </h5>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="C0"
                  style={{ color: "white" }}
                  checked={editC0}
                  onChange={(e) => {
                    setEditC0(e.target.checked);
                  }}
                />
              }
              label="C0"
            />
          </Row>
          <Row>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="C1"
                  style={{ color: "white" }}
                  checked={editC1}
                  onChange={(e) => {
                    setEditC1(e.target.checked);
                  }}
                />
              }
              label="C1"
            />
          </Row>
          <Row>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="C2"
                  style={{ color: "white" }}
                  checked={editC2}
                  onChange={(e) => {
                    setEditC2(e.target.checked);
                  }}
                />
              }
              label="C2"
            />
          </Row>
          <Row>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="C3"
                  style={{ color: "white" }}
                  checked={editC3}
                  onChange={(e) => {
                    setEditC3(e.target.checked);
                  }}
                />
              }
              label="C3"
            />
          </Row>
          <Row>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="C4"
                  style={{ color: "white" }}
                  checked={editC4}
                  onChange={(e) => {
                    setEditC4(e.target.checked);
                  }}
                />
              }
              label="C4"
            />
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Sensors;

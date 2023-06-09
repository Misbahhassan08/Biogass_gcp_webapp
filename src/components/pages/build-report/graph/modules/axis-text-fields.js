import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";
import TextField from "@mui/material/TextField";
import DateTimeModal from "./dateTimeModal";
import { useState } from "react";

function TextFields(props) {
  const [edit0, setEdit0] = useState(true);
  const [edit1, setEdit1] = useState(true);
  const [edit2, setEdit2] = useState(true);
  const [edit3, setEdit3] = useState(true);
  const [edit4, setEdit4] = useState(true);
  const [sensorsClicked, setSensorsClicked] = useState([]);

  //------------------------------------ STATES FOR THE DATETIME SELECTED --------------------------------------

  const [x0min, setX0min] = useState();
  const [x0max, setX0max] = useState();

  const [x1min, setX1min] = useState();
  const [x1max, setX1max] = useState();

  const [x2min, setX2min] = useState();
  const [x2max, setX2max] = useState();

  const [x3min, setX3min] = useState();
  const [x3max, setX3max] = useState();

  const [x4min, setX4min] = useState();
  const [x4max, setX4max] = useState();

  const [xMinValue, setXMinValue] = useState();
  const [xMaxValue, setXMaxValue] = useState();

  //------------------------------------ STATES FOR THE DATETIME SELECTED --------------------------------------

  const [y0min, setY0min] = useState();
  const [y0max, setY0max] = useState();

  const [y1min, setY1min] = useState();
  const [y1max, setY1max] = useState();

  const [y2min, setY2min] = useState();
  const [y2max, setY2max] = useState();

  const [y3min, setY3min] = useState();
  const [y3max, setY3max] = useState();

  const [y4min, setY4min] = useState();
  const [y4max, setY4max] = useState();

  const [yMinValue, setYMinValue] = useState();
  const [yMaxValue, setYMaxValue] = useState();

  const style = {
    width: "50%",
    "& .MuiInputBase-input": {
      height: 15,
    },
    "& .MuiFilledInput-root, .MuiFilledInput-root:hover": {
      background: "#fff",
    },
    "& .css-1ff8729-MuiInputBase-root-MuiFilledInput-root": {
      borderRadius: 0,
    },
    "& .MuiInputBase-colorPrimary.Mui-disabled": {
      backgroundColor: "#ffffff59",
    },
    "& .MuiInputBase-colorPrimary.Mui-disabled:hover": {
      background: "#ffffff80",
    },
  };

  //------------------------------------ GET THE SENSORS & DATETIME & Y AXIS CLICKED --------------------------------------

  useEffect(() => {
    const clickedSensors = [];
    const xMinvalue = [];
    const xMaxvalue = [];

    const yMinvalue = [];
    const yMaxvalue = [];

    if (!edit0) {
      clickedSensors.push(0);
      if (x0min) {
        xMinvalue.push(x0min);
      }
      if (x0max) {
        xMaxvalue.push(x0max);
      }
      if (y0min) {
        yMinvalue.push(y0min);
        // console.log(yMinValue, "this is y0");
      }
      if (y0max) {
        yMaxvalue.push(y0max);
        // console.log(yMaxValue, "this is y0");
      }
    }
    if (!edit1) {
      clickedSensors.push(1);
      if (x1min) {
        xMinvalue.push(x1min);
      }
      if (x1max) {
        xMaxvalue.push(x1max);
      }
      if (y1min) {
        yMinvalue.push(y1min);
      }
      if (y1max) {
        yMaxvalue.push(y1max);
      }
    }
    if (!edit2) {
      clickedSensors.push(2);
      if (x2min) {
        xMinvalue.push(x2min);
      }
      if (x2max) {
        xMaxvalue.push(x2max);
      }
      if (y2min) {
        yMinvalue.push(y2min);
      }
      if (y2max) {
        yMaxvalue.push(y2max);
      }
    }
    if (!edit3) {
      clickedSensors.push(3);
      if (x3min) {
        xMinvalue.push(x3min);
      }
      if (x3max) {
        xMaxvalue.push(x3max);
      }
      if (y3min) {
        yMinvalue.push(y3min);
      }
      if (y3max) {
        yMaxvalue.push(y3max);
      }
    }
    if (!edit4) {
      clickedSensors.push(4);
      if (x4min) {
        xMinvalue.push(x4min);
      }
      if (x4max) {
        xMaxvalue.push(x4max);
      }
      if (y4min) {
        yMinvalue.push(y4min);
      }
      if (y4max) {
        yMaxvalue.push(y4max);
      }
    }
    setSensorsClicked(clickedSensors);
    setXMinValue(xMinvalue);
    setXMaxValue(xMaxvalue);
    setYMinValue(yMinvalue);
    setYMaxValue(yMaxvalue);
    // console.log(xMinValue, "this is the min X value");
    // console.log(xMaxValue, "this is the max X value");
    // console.log(yMinValue, "this is the min Y value");
    // console.log(yMaxValue, "this is the max Y value");
  }, [
    edit0,
    edit1,
    edit2,
    edit3,
    edit4,
    x0min,
    x1min,
    x2min,
    x3min,
    x4min,
    x0max,
    x1max,
    x2max,
    x3max,
    x4max,
    y1min,
    y2min,
    y3min,
    y0min,
    y4min,
    y0max,
    y1max,
    y2max,
    y3max,
    y4max,
  ]);

  //------------------------------------ SAVE THE DATETIME IN STATE --------------------------------------

  function getDateTime(value, id) {
    switch (id) {
      case "x0-min":
        setX0min(value);
        break;
      case "x0-max":
        setX0max(value);
        break;
      case "x1-min":
        setX1min(value);
        break;
      case "x1-max":
        setX1max(value);
        break;
      case "x2-min":
        setX2min(value);
        break;
      case "x2-max":
        setX2max(value);
        break;
      case "x3-min":
        setX3min(value);
        break;
      case "x3-max":
        setX3max(value);
        break;
      case "x4-min":
        setX4min(value);
        break;
      case "x4-max":
        setX4max(value);
        break;
      default:
        break;
    }
  }

  //-------------------------------------- PASS THE SENSORS CLICKED TO PARENT----------------------------

  useEffect(() => {
    props.getSensors(sensorsClicked);
    props.getMinDateTime(xMinValue);
    props.getMaxDateTime(xMaxValue);
    props.getMinYValue(yMinValue);
    props.getMaxYValue(yMaxValue);
  }, [sensorsClicked]);

  return (
    <>
      <Row className="Axis-Text-Field-Row">
        <Col className="col-md-3">
          <FormControlLabel
            sx={{ color: "white" }}
            control={
              <Checkbox
                id="P0"
                style={{ color: "white" }}
                checked={edit0}
                onChange={(e) => {
                  setEdit0(e.target.checked);
                }}
              />
            }
            label="P0"
          />
        </Col>

        {/* P0 X AXIS COL */}
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            {/* P0 X MIN */}
            <DateTimeModal
              disabled={edit0}
              style={style}
              id={"x0-min"}
              getDateTime={getDateTime}
            />

            {/* P0 X MAX */}
            <DateTimeModal
              disabled={edit0}
              style={style}
              id={"x0-max"}
              getDateTime={getDateTime}
            />
          </div>
        </Col>
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            {/* P0 Y MIN */}
            <TextField
              hiddenLabel
              type="number"
              disabled={edit0}
              id="y0-min"
              variant="filled"
              size="small"
              sx={style}
              value={y0min}
              onChange={(e) => {
                setY0min(parseFloat(e.target.value));
              }}
            />

            {/* P1 X MAX */}
            <TextField
              hiddenLabel
              type="number"
              disabled={edit0}
              id="y0-max"
              variant="filled"
              size="small"
              sx={style}
              value={y0max}
              onChange={(e) => {
                setY0max(parseFloat(e.target.value));
              }}
            />
          </div>
        </Col>
      </Row>

      {
        // row a1
      }
      <Row className="Axis-Text-Field-Row">
        <Col className="col-md-3">
          <FormControlLabel
            sx={{ color: "white" }}
            control={
              <Checkbox
                id="P1"
                style={{ color: "white" }}
                checked={edit1}
                onChange={(e) => {
                  setEdit1(e.target.checked);
                  console.log(edit1);
                }}
              />
            }
            label="P1"
          />
        </Col>

        {/* P1 X AXIS COL */}
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            {/* P1 X MIN */}
            <DateTimeModal
              disabled={edit1}
              style={style}
              id={"x1-min"}
              getDateTime={getDateTime}
            />

            {/* P1 X MAX */}
            <DateTimeModal
              disabled={edit1}
              style={style}
              id={"x1-max"}
              getDateTime={getDateTime}
            />
          </div>
        </Col>
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            {/* P1 Y MIN */}
            <TextField
              hiddenLabel
              type="number"
              disabled={edit1}
              id="y1-min"
              variant="filled"
              size="small"
              sx={style}
              value={y1min}
              onChange={(e) => {
                setY1min(parseFloat(e.target.value));
              }}
            />

            {/* P1 Y MAX */}
            <TextField
              hiddenLabel
              type="number"
              disabled={edit1}
              id="y1-max"
              variant="filled"
              size="small"
              sx={style}
              value={y1max}
              onChange={(e) => {
                setY1max(parseFloat(e.target.value));
              }}
            />
          </div>
        </Col>
      </Row>

      {
        // row a2
      }
      <Row className="Axis-Text-Field-Row">
        <Col className="col-md-3">
          <FormControlLabel
            sx={{ color: "white" }}
            control={
              <Checkbox
                id="P2"
                style={{ color: "white" }}
                checked={edit2}
                onChange={(e) => {
                  setEdit2(e.target.checked);
                  console.log(edit2);
                }}
              />
            }
            label="P2"
          />
        </Col>

        {/* P2 X AXIS COL */}
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            {/* P2 X MIN */}
            <DateTimeModal
              disabled={edit2}
              style={style}
              id={"x2-min"}
              getDateTime={getDateTime}
            />

            {/* P2 X MAX */}
            <DateTimeModal
              disabled={edit2}
              style={style}
              id={"x2-max"}
              getDateTime={getDateTime}
            />
          </div>
        </Col>
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            {/* P2 Y MIN */}
            <TextField
              hiddenLabel
              type="number"
              disabled={edit2}
              id="y2-min"
              variant="filled"
              size="small"
              sx={style}
              value={y2min}
              onChange={(e) => {
                setY2min(parseFloat(e.target.value));
              }}
            />

            {/* P2 Y MAX */}
            <TextField
              hiddenLabel
              type="number"
              disabled={edit2}
              id="y2-max"
              variant="filled"
              size="small"
              sx={style}
              value={y2max}
              onChange={(e) => {
                setY2max(parseFloat(e.target.value));
              }}
            />
          </div>
        </Col>
      </Row>

      {
        // row a3
      }
      <Row className="Axis-Text-Field-Row">
        <Col className="col-md-3">
          <FormControlLabel
            sx={{ color: "white" }}
            control={
              <Checkbox
                id="P3"
                style={{ color: "white" }}
                checked={edit3}
                onChange={(e) => {
                  setEdit3(e.target.checked);
                  console.log(edit3);
                }}
              />
            }
            label="P3"
          />
        </Col>

        {/* P3 X AXIS COL */}
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            {/* P3 X MIN */}
            <DateTimeModal
              disabled={edit3}
              style={style}
              id={"x3-min"}
              getDateTime={getDateTime}
            />

            {/* P3 X MAX */}
            <DateTimeModal
              disabled={edit3}
              style={style}
              id={"x3-max"}
              getDateTime={getDateTime}
            />
          </div>
        </Col>
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            {/* P3 Y MIN */}
            <TextField
              hiddenLabel
              type="number"
              disabled={edit3}
              id="y3-min"
              variant="filled"
              size="small"
              sx={style}
              value={y3min}
              onChange={(e) => {
                setY3min(parseFloat(e.target.value));
              }}
            />

            {/* P3 Y MAX */}
            <TextField
              hiddenLabel
              type="number"
              disabled={edit3}
              id="y3-max"
              variant="filled"
              size="small"
              sx={style}
              value={y3max}
              onChange={(e) => {
                setY3max(parseFloat(e.target.value));
              }}
            />
          </div>
        </Col>
      </Row>

      {
        // row a4
      }
      <Row className="Axis-Text-Field-Row">
        <Col className="col-md-3">
          <FormControlLabel
            sx={{ color: "white" }}
            control={
              <Checkbox
                id="P4"
                style={{ color: "white" }}
                checked={edit4}
                onChange={(e) => {
                  setEdit4(e.target.checked);
                  console.log(edit4);
                }}
              />
            }
            label="P4"
          />
        </Col>

        {/* P4 X AXIS COL */}
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            {/* P4 X MIN */}
            <DateTimeModal
              disabled={edit4}
              style={style}
              id={"x4-min"}
              getDateTime={getDateTime}
            />

            {/* P4 X MAX */}
            <DateTimeModal
              disabled={edit4}
              style={style}
              id={"x4-max"}
              getDateTime={getDateTime}
            />
          </div>
        </Col>
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            {/* P4 Y MIN */}
            <TextField
              hiddenLabel
              type="number"
              disabled={edit4}
              id="y4-min"
              variant="filled"
              size="small"
              sx={style}
              value={y4min}
              onChange={(e) => {
                setY4min(parseFloat(e.target.value));
              }}
            />

            {/* P4 Y MAX */}
            <TextField
              hiddenLabel
              type="number"
              disabled={edit4}
              id="y4-max"
              variant="filled"
              size="small"
              sx={style}
              value={y4max}
              onChange={(e) => {
                setY4max(parseFloat(e.target.value));
              }}
            />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default TextFields;

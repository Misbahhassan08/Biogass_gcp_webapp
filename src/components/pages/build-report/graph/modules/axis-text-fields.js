import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";
import TextField from "@mui/material/TextField";
import DateTimeModal from "./dateTimeModal";
import { useState } from "react";

function TextFields(props) {

  const [xMinValue, setXMinValue] = useState();
  const [xMaxValue, setXMaxValue] = useState();

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

  function getDateTime(value, id) {
    switch (id) {
      case "x-min":
        setXMinValue(value);
        break;
      case "x-max":
        setXMaxValue(value);
        break;
      default:
        break;
    }
  }

  //-------------------------------------- PASS THE SENSORS CLICKED TO PARENT----------------------------

  useEffect(() => {
    props.getMinTime(xMinValue);
    props.getMaxTime(xMaxValue);
    props.getMinYValue(yMinValue);
    props.getMaxYValue(yMaxValue);
    // console.log(xMinValue, 'xMinValue');
    // console.log(xMaxValue, 'xMaxValue');
    // console.log(yMinValue, 'yMinValue');
    // console.log(yMaxValue, 'yMaxValue');
  }, [xMinValue, xMaxValue, yMinValue, yMaxValue]);

  return (
    <>
      <Row className="Axis-Text-Field-Row">

        {/* P0 X AXIS COL */}
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            {/* P0 X MIN */}
            <DateTimeModal
              // disabled={edit0}
              style={style}
              id={"x-min"}
              getDateTime={getDateTime}
            />

            {/* P0 X MAX */}
            <DateTimeModal
              // disabled={edit0}
              style={style}
              id={"x-max"}
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
              // disabled={edit0}
              id="y-min"
              variant="filled"
              size="small"
              sx={style}
              value={yMinValue}
              onChange={(e) => {
                setYMinValue(parseFloat(e.target.value));
              }}
            />

            {/* P1 X MAX */}
            <TextField
              hiddenLabel
              type="number"
              // disabled={edit0}
              id="y-max"
              variant="filled"
              size="small"
              sx={style}
              value={yMaxValue}
              onChange={(e) => {
                setYMaxValue(parseFloat(e.target.value));
              }}
            />
          </div>
        </Col>
      </Row>

    </>
  );
}

export default TextFields;

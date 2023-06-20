import React, { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function WaveTypeSelect(props) {
  const [waveType, setWaveType] = React.useState("");

  const handleChange = (event) => {
    setWaveType(event.target.value);
  };

  useEffect(() => {
    props.getWaveType(waveType);
  }, [waveType]);

  useEffect(() => {
    if (props.settingsButtonClicked) {
      const data = localStorage.getItem("UserFavSettingObj");
      const parsedObj = JSON.parse(data);
      const requiredDataType = parsedObj.Wavelength;
      console.log(requiredDataType[1], "parsed object");

      if (requiredDataType[0].ALL) {
        setWaveType("All");
      } else {
        for (let key in requiredDataType[1]) {
          if (requiredDataType[1][key] === true) {
            setWaveType(key);
          }
        }
      }

      props.settingsButtonClickedFalse();
    }
  }, [props.settingsButtonClicked]);

  return (
    <div>
      <FormControl
        sx={{ m: 1, width: "95%" }}
        size="small"
        label="demo-select-small-label"
        id="demo-select"
      >
        <InputLabel className="dataTypeInput" id="demo-select-small-label">
          waveType
        </InputLabel>
        <Select
          className="dataTypeSelect"
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={waveType}
          label="WaveType"
          onChange={handleChange}
          sx={{
            width: "100%",
          }}
        >
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Vio"}>Violet</MenuItem>
          <MenuItem value={"Blu"}>Blue</MenuItem>
          <MenuItem value={"Grn"}>Green</MenuItem>
          <MenuItem value={"Yel"}>Yellow</MenuItem>
          <MenuItem value={"Org"}>Orange</MenuItem>
          <MenuItem value={"Red"}>Red</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}

export default WaveTypeSelect;

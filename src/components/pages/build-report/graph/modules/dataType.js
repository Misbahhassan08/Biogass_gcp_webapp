import React, { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function DataTypeSelect(props) {
  const [dataType, setDataType] = React.useState("");

  const handleChange = (event) => {
    setDataType(event.target.value);
  };

  useEffect(() => {
    props.getDataType(dataType);
  }, [dataType]);

  return (
    <div>
      <FormControl
        sx={{ m: 1, width: "95%" }}
        size="small"
        label="demo-select-small-label"
        id="demo-select"
      >
        <InputLabel id="demo-select-small-label">dataType</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={dataType}
          label="DataType"
          onChange={handleChange}
          sx={{
            width: "100%",
          }}
        >
          <MenuItem value={"Raw"}>Raw Data</MenuItem>
          <MenuItem value={"Cal"}>Calibrated</MenuItem>
          <MenuItem value={"Nrm"}>Normalized</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default DataTypeSelect;

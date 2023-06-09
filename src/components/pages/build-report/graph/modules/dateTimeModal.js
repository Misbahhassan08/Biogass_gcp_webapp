import React, { useState } from "react";
import dayjs from "dayjs";


import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers";

export default function DateTimeModal(props) {
  const [value, setValue] = useState("");

  const handleValueChange = (newvalue) => {
    setValue(newvalue);

  };

  function handleAccept(){
    props.getDateTime(value, props.id)
  //   console.log("clicked ok");
  }

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

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDateTimePicker
        className="date-time-modal"
        disabled={props.disabled}
        ampm={false}
        format="YYYY-MM-DD HH:mm:ss"
        sx={{
          backgroundColor: props.disabled ? "#808080" : "white",
          color: "#000",
        }}
        value={value}
        onChange={handleValueChange}
        onAccept={handleAccept}
        on

        slotProps={{
          textField: {
            className: "Mui-min-max-field",
            id: props.id,
            variant: "filled",
            hiddenLabel: true,
            size: "small",
            // disabled: props.disabled,
            sx: style,
          },
        }}
      />
    </LocalizationProvider>
  );
}

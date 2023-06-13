import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({ open, onClose, onSave }) {
  const [inputValue, setInputValue] = React.useState("");

  const handleClose = () => {
    onClose();
  };

  const handleSave = () => {
    onSave(inputValue);
    setInputValue("");
    onClose();
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Observation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the observation that you want to store.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="text"
            label="Enter Text"
            type="text"
            value={inputValue}
            onChange={handleChange}
            multiline
            minRows={3}
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

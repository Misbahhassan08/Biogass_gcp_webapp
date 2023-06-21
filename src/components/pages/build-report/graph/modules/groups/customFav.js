import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function CustomFavNameDialog(props) {
  const [openDialog, setOpenDialog] = useState(true);
  const [settingName, setSettingName] = useState("");

  function handleSettingName(event) {
    setSettingName(event.target.value);
  }

  function handleSubmit() {
    setOpenDialog(false);
    props.getCustomSettingName(settingName);
  }

  return (
    <div>
      <Dialog
        open={openDialog}
        // onClose={() => setUserDialogOpen(false)}
        disableEscapeKeyDown
      >
        <DialogTitle>Enter Setting Name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the setting name to save in data base.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="Setting Name"
            label="Setting Name"
            type="text"
            fullWidth
            variant="standard"
            value={settingName}
            onChange={handleSettingName}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenDialog(false);
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

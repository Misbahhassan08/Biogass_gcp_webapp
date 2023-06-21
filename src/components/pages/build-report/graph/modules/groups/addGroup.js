import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { fetchPostReq } from "../../../../../../services/restService";
import { baseApiUrl } from "../../../../../../config";

export default function AddGroupDialog(props) {
  const api_add_group = baseApiUrl + "/api/add_group";
  const [groupName, setGroupName] = useState("");

  function handleGroupName(event) {
    setGroupName(event.target.value);
  }

  function handleSubmit() {
    const data = {
      group_name: groupName,
    };
    props.close();
    sendPostReq(api_add_group, data);
  }

  const sendPostReq = async (url, data) => {
    const response = await fetchPostReq(url, data);
    if (response.result[0] === "Success") {
      window.location.reload();
    }

    console.log("====================================");
    console.log(response.result);
    console.log("====================================");
  };

  return (
    <div>
      <Dialog open={props.open} disableEscapeKeyDown>
        <DialogTitle>Enter New Group Name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the new group name to save in data base.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="Group Name"
            label="Group Name"
            type="text"
            fullWidth
            variant="standard"
            value={groupName}
            onChange={handleGroupName}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";
import { baseApiUrl } from "../../../../../../config";
import dayjs from "dayjs";
import {
  fetchGetReq,
  fetchPostReq,
} from "../../../../../../services/restService";
import AddGroupDialog from "./addGroup";

function Groups(props) {
  const [groupData, setGroupData] = useState([]);
  const [groupId, setGroupId] = useState("");
  const [groupName, setGroupName] = useState("");
  const [selectedFavList, setSelectedFavList] = useState("");
  const [favListSettingObj, setFavListSettingObj] = useState();
  const [openGroupNameDialog, setOpenGroupNameDialog] = useState(false);

  const [favList, setFavList] = useState([]);

  const get_list_of_groups = baseApiUrl + "/api/get_list_of_group";
  const get_list_of_fav_setting = baseApiUrl + "/api/get_list_of_fav_settings";

  const handleGroupIDChange = (event) => {
    const selectedGroupId = event.target.value;
    setGroupId(selectedGroupId);

    // Find the corresponding group name

    const selectedGroup = groupData[0].find(
      (group) => group.GroupID === selectedGroupId
    );
    if (selectedGroup) {
      const selectedGroupName = selectedGroup.GroupName;
      setGroupName(selectedGroupName);
      getFavList(selectedGroupId, selectedGroupName);
    }
  };

  const handleGroupNameChange = (event) => {
    const selectedGroupName = event.target.value;
    setGroupName(selectedGroupName);

   // Find the corresponding group ID
  const selectedGroup = groupData[0].find((group) => group.GroupName === selectedGroupName);
  if (selectedGroup) {
    const selectedGroupId = selectedGroup.GroupID;
    setGroupId(selectedGroupId);
    getFavList(selectedGroupId, selectedGroupName);
  }
  };

  const handleFavListChange = (event) => {
    setSelectedFavList(event.target.value);
    if (event.target.value !== "custom") {
      const index = favList
        .map((item) => item.SettingsName)
        .indexOf(event.target.value);
      var settingObj = favList[index].SettingObj;
      var v = JSON.parse(settingObj.replace(/'/g, '"'));
      setFavListSettingObj(v);
      localStorage.setItem("UserFavSettingObj", JSON.stringify(v));
      console.log(v, "setting object");
      props.setFavSetting()
    }
    // console.log(selectedFavList, "this is fav list");
  };

  const getFavList = async (id, name) => {
    const data = [
      {
        CsvfileID: 3,
        GroupID: id,
        GroupName: name,
      },
    ];

    const response = await fetchPostReq(get_list_of_fav_setting, data);
    console.log(data, "post request send");
    setFavList(response.result);
  };

  const getGroupData = async () => {
    const response = await fetchGetReq(get_list_of_groups);
    setGroupData(response.result);
    console.log("====================================");
    console.log(response.result, "group data");
    console.log("====================================");
  };

  useEffect(() => {
    getGroupData();
  }, []);

  useEffect(() => {
    props.getGroupId(groupId);
  }, [groupId]);

  useEffect(() => {
    props.getFavList(selectedFavList);
  }, [selectedFavList]);

  return (
    <Row className="gap-4 mb-5 align-self-center text-center">
      <Row style={{ backgroundColor: "#2484ac" }} className="">
        <FormControl
          sx={{ m: 1, width: "95%" }}
          size="small"
          label="demo-select-small-label"
          id="demo-select"
        >
          <InputLabel className="dataTypeInput" id="demo-select-small-label">
            Group ID
          </InputLabel>
          <Select
            className="dataTypeSelect"
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="DataType"
            sx={{
              width: "100%",
            }}
            value={groupId}
            onChange={handleGroupIDChange}
          >
            {groupData[0] &&
              groupData[0].map((item, index) => (
                <MenuItem value={item.GroupID} key={index}>
                  {item.GroupID}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Row>

      <Row
        style={{
          backgroundColor: "#2484ac",
          display: "flex",
          alignItems: "center",
        }}
      >
        <FormControl
          sx={{ m: 1, width: "95%" }}
          size="small"
          label="demo-select-small-label"
          id="demo-select"
        >
          <InputLabel className="dataTypeInput" id="demo-select-small-label">
            Group Name
          </InputLabel>
          <Select
            className="dataTypeSelect"
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="DataType"
            sx={{
              width: "100%",
            }}
            value={groupName}
            onChange={handleGroupNameChange}
          >
            {groupData[0] &&
              groupData[0].map((item, index) => (
                <MenuItem value={item.GroupName} key={index}>
                  {item.GroupName}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        
      </Row>
      <Row style={{ backgroundColor: "#2484ac" }}>
        <FormControl
          sx={{ m: 1, width: "95%" }}
          size="small"
          label="demo-select-small-label"
          id="demo-select"
        >
          <InputLabel className="dataTypeInput" id="demo-select-small-label">
            Select Fav Setting
          </InputLabel>
          <Select
            className="dataTypeSelect"
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="DataType"
            sx={{
              width: "100%",
            }}
            value={selectedFavList}
            onChange={handleFavListChange}
          >
            <MenuItem value={"custom"}>Custom</MenuItem>
            {favList.map((item, index) => (
              // console.log(index, "index"),
              <MenuItem value={item.SettingsName} key={index}>
                {" "}
                {item.SettingsName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Row>

      <Row className="align-self-center">
        <Button
          type="submit"
          className=" menu-btn menu-btn1"
          onClick={() => {
            setOpenGroupNameDialog(true);
          }}
        >
          Add Group
        </Button>
        <AddGroupDialog
          open={openGroupNameDialog}
          close={() => {
            setOpenGroupNameDialog(false);
          }}
        />
      </Row>
    </Row>
  );
}

export default Groups;

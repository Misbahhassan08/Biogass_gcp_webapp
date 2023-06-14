import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { baseApiUrl } from "../../../../../config";
import dayjs from "dayjs";

function Groups(props) {
  const [groupData, setGroupData] = useState([]);
  const [groupId, setGroupId] = useState("");
  const [groupName, setGroupName] = useState("");
  const [selectedFavList, setSelectedFavList] = useState("");
  const [favListSettingObj, setFavListSettingObj] = useState();

  const [favList, setFavList] = useState([]);

  const get_list_of_groups = baseApiUrl + "/api/get_list_of_group";
  const get_list_of_fav_setting = baseApiUrl + "/api/get_list_of_fav_settings";

  const handleGroupIDChange = (event) => {
    setGroupId(event.target.value);
  };

  const handleGroupNameChange = (event) => {
    const name = event.target.value;
    setGroupName(name);
    getFavList(groupId, name);
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
      localStorage.setItem("UserFavSettingObj", JSON.stringify(v))
      console.log(v, "setting object");
      // renderGraph(v);
    }
    // console.log(selectedFavList, "this is fav list");
  };

  // function renderGraph(favObj) {
  //   //----------get sensor clicked data ---------------
  //   const sensorclicked = favObj.Wells[0];
  //   // console.log(sensorclicked, "sensorsclicked");

  //   //----------get datatype-----------------
  //   let dataType;
  //   if (favObj.Data.Raw) {
  //     dataType = "Raw";
  //   } else if (favObj.Data.Cal) {
  //     dataType = "Cal";
  //   } else if (favObj.Data.Nrm) {
  //     dataType = "Nrm";
  //   }
  //   // console.log(dataType);

  //   //--------------- min and Max Time ----------------

  //   const minTime = dayjs(favObj.ScaleGraph.xaxis.Min, "HH:mm:ss");
  //   const maxTime = dayjs(favObj.ScaleGraph.xaxis.Max, "HH:mm:ss");
  //   //console.log(maxTime);

  //   //---------------min and max y ---------------
  //   const minYValue = favObj.ScaleGraph.yaxis.Min;
  //   const maxYValue = favObj.ScaleGraph.yaxis.Max;

  //   props.getSensorsClicked([sensorclicked]);
  //   props.getDataTypeClicked(dataType);
  //   props.getMinTime(minTime);
  //   props.getMaxTime(maxTime);
  //   props.getMinYValue(minYValue);
  //   props.getMaxYValue(maxYValue);
  // }

  function getFavList(id, name) {
    const data = [
      {
        CsvfileID: 3,
        GroupID: id,
        GroupName: name,
      },
    ];

    // console.log(data, "this is post request");

    fetch(get_list_of_fav_setting, {
      method: "POST",
      body: JSON.stringify(data),
      cors: "no-cors",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        let newdata = data["result"];
        // console.log(JSON.stringify(newdata));
        console.log(newdata);
        setFavList(newdata);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    fetch(get_list_of_groups)
      .then((res) => res.json())
      .then((data) => {
        let newdata = data["result"];
        console.log(newdata);
        setGroupData(newdata);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    props.getGroupId(groupId);
  }, [groupId]);

  useEffect(() => {
    props.getFavList(selectedFavList);
  }, [selectedFavList]);

  return (
    <Row className="gap-4 mb-5 align-self-center text-center">
      <Col style={{ backgroundColor: "#2484ac" }} className="">
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
            {groupData.map((item) => (
              <MenuItem value={item[0].GroupID}>{item[0].GroupID}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Col>

      <Col style={{ backgroundColor: "#2484ac" }}>
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
            {groupData.map((item) => (
              <MenuItem value={item[0].GroupName}>{item[0].GroupName}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Col>
      <Col style={{ backgroundColor: "#2484ac" }}>
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
      </Col>

      <Col className="align-self-center">
        <Button type="submit" className=" menu-btn menu-btn2">
          Add Group
        </Button>
      </Col>
    </Row>
  );
}

export default Groups;

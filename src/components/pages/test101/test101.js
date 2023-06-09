import React, { Fragment, useEffect, useState, useRef } from "react";
import mqtt from "precompiled-mqtt";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import SystemSetupData from "../system-setup/SystemSetupData";
import { Link, json } from "react-router-dom";
// import ReactSimpleRange from "react-simple-range";
import ReportOne from "./reports";
import TableRows from "./TableRows";

const clientId = "mqttjs_" + Math.random().toString(16).substr(2, 8);

const host = "ws://broker.emqx.io:8083/mqtt";
const topic_led_brightness = "biogas/led/brightness/";
const topic_motor_speed = "biogas/motor/speed_/";
const topic_led_sensor = "biogas/ledsensor/";
const topic_mag_sensor = "/testtopic/sensor";
const topic_stepper_count = "/stepper_/test_";
const topic_linear_stepper_count = "/linearstepper_/test_";
const topic_bulkData_reponse = "biogas_/database_/response_";
const topic_bulkData_request = "biogas_/database_/request_";
const topic_bulkData_grid = "biogas_/pandas_/dataframe_/";

const rowsInput = {
  Data_Point: "0",
  Sample_Num: "1",
  Time_Stamp: "2023-04-06 08:07:49.659752",
  Time_Per: "20.75",
  Temp: "40",
  Gain: "30",
  Int_Time: "320",
  Allowable_Dev: "150",
  Raw_Used_Vio: "342,342,342,342,342,342",
  Raw_Values_Vio_450nm: "342,342,342,342,342,342",
  Raw_Selected_Vio_450nm: "342,342,342,342,342,342",
  Raw_Avg_Vio_450nm: "342",
  Raw_StdDev_Vio_450nm: "342,342,342,342,342,342",
  Call_Used_Vio: "347.33,347.33,347.33,347.33,347.33,347.33",
  Call_Values_Vio_450nm: "",
  Cal_Selected_Vio_450nm: "",
  Cal_Avg_Vio_450nm: "",
  Cal_StdDev_Vio_450nm: "",
  Raw_Used_Blu: "342,342,342,342,342,342",
  Raw_Values_Blu_500nm: "342,342,342,342,342,342",
  Raw_Selected_Blu_500nm: "342,342,342,342,342,342",
  Raw_Avg_Blu_500nm: "456",
  Raw_StdDev_Blu_500nm: "",
  Call_Used_Blu: "",
  Call_Values_Blu_500nm: "",
  Cal_Selected_Blu_500nm: "347.33,347.33,347.33,347.33,347.33,347.33",
  Cal_Avg_Blu_500nm: "",
  Cal_StdDev_Blu_500nm: "",
  Raw_Used_Grn: "342,342,342,342,342,342",
  Raw_Values_Grn_550nm: "342,342,342,342,342,342",
  Raw_Selected_Grn_550nm: "342,342,342,342,342,342",
  Raw_Avg_Grn_550nm: "456",
  Raw_StdDev_Grn_550nm: "",
  Call_Used_Grn: "",
  Call_Values_Grn_550nm: "",
  Cal_Selected_Grn_550nm: "347.33,347.33,347.33,347.33,347.33,347.33",
  Cal_Avg_Grn_550nm: "",
  Cal_StdDev_Grn_550nm: "",
};
const TableData = [rowsInput];

const options = {
  keepalive: 60,
  clientId: clientId,
  protocolId: "MQTT",
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  will: {
    topic: "WillMsg",
    payload: "Connection Closed abnormally..!",
    qos: 0,
    retain: false,
  },
};

// -------------------------- MQTT client object initilization -----------------------------------------
const client = mqtt.connect(host, options);
// -------------------------- Test101 object explination -----------------------------------------
const Test101 = (props) => {
  const MAX = 100;
  const [dcMotor_speed_value, set_dcMotor_sped_value] = useState(0);
  const [var_stepper_counts, setStepperCounts] = useState(0);
  const [linear_var_stepper_counts, linear_setStepperCounts] = useState(0);
  const [updated, setUpdated] = useState(false);
  // Motor Status value (on/off)
  const [subscribeValue, setSubscribeValue] = useState("OFF"); // subscribeValue of mag sensor

  //LED Section
  const [led1_bright, setLed1_value] = useState(0);
  const [led2_bright, setLed2_value] = useState(0);
  const [led3_bright, setLed3_value] = useState(0);
  const [led4_bright, setLed4_value] = useState(0);
  const [led5_bright, setLed5_value] = useState(0);

  const [led_sensor_1_value, set_led1_sensor_value] = useState(0);
  const [led_sensor_2_value, set_led2_sensor_value] = useState(0);
  const [led_sensor_3_value, set_led3_sensor_value] = useState(0);
  const [led_sensor_4_value, set_led4_sensor_value] = useState(0);
  const [led_sensor_5_value, set_led5_sensor_value] = useState(0);
  const data_led0 = [];
  const data_led1 = [];
  const data_led2 = [];
  const data_led3 = [];
  const data_led4 = [];
  const data = [
    { name: "0.0", uv: 10, pv: 10, rv: 10, gv: 10, bv: 10, dv: 10 },
    { name: "1.0", uv: 10, pv: 10, rv: 10, gv: 10, bv: 10, dv: 10 },
    { name: "2.0", uv: 10, pv: 10, rv: 10, gv: 10, bv: 10, dv: 10 },
    { name: "3.0", uv: 10, pv: 10, rv: 10, gv: 10, bv: 10, dv: 10 },
    { name: "4.0", uv: 10, pv: 10, rv: 10, gv: 10, bv: 10, dv: 10 },
    { name: "5.0", uv: 10, pv: 10, rv: 10, gv: 10, bv: 10, dv: 10 },
  ];

  // use table section
  const [rowsData, setRowsData] = useState([]);
  const addTableRows = (data) => {
    const rowsInput = {
      Data_Point: data["Data_Point"][0],
      Sample_Num: data["Sample_Num"][0],
      Time_Stamp: data["Time_Stamp"][0],
      Time_Per: data["Time_Per"][0],
      Temp: data["Temp"][0],
      Gain: data["Gain"][0],
      Int_Time: data["Int_Time"][0],
      Allowable_Dev: data["Allowable_Dev"][0],
      Raw_Used_Vio: data["Raw_Used_Vio"][0],
      Raw_Values_Vio_450nm: data["Raw_Values_Vio_450nm"][0],
      Raw_Selected_Vio_450nm: data["Raw_Selected_Vio_450nm"][0],
      Raw_Avg_Vio_450nm: data["Raw_Avg_Vio_450nm"][0],
      Raw_StdDev_Vio_450nm: data["Raw_StdDev_Vio_450nm"][0],
      Call_Used_Vio: data["Call_Used_Vio"][0],
      Call_Values_Vio_450nm: data["Call_Values_Vio_450nm"][0],
      Cal_Selected_Vio_450nm: data["Cal_Selected_Vio_450nm"][0],
      Cal_Avg_Vio_450nm: data["Cal_Avg_Vio_450nm"][0],
      Cal_StdDev_Vio_450nm: data["Cal_StdDev_Vio_450nm"],
      Raw_Used_Blu: data["Raw_Used_Blu"][0],
      Raw_Values_Blu_500nm: data["Raw_Values_Blu_500nm"][0],
      Raw_Selected_Blu_500nm: data["Raw_Selected_Blu_500nm"][0],
      Raw_Avg_Blu_500nm: data["Raw_Selected_Blu_500nm"][0],
      Raw_StdDev_Blu_500nm: data["Raw_StdDev_Blu_500nm"][0],
      Call_Used_Blu: data["Call_Used_Blu"][0],
      Call_Values_Blu_500nm: data["Call_Values_Blu_500nm"][0],
      Cal_Selected_Blu_500nm: data["Cal_Selected_Blu_500nm"][0],
      Cal_Avg_Blu_500nm: data["Cal_Avg_Blu_500nm"][0],
      Cal_StdDev_Blu_500nm: data["Cal_StdDev_Blu_500nm"][0],
      Raw_Used_Grn: data["Raw_Used_Grn"][0],
      Raw_Values_Grn_550nm: data["Raw_Values_Grn_550nm"][0],
      Raw_Selected_Grn_550nm: data["Raw_Selected_Grn_550nm"][0],
      Raw_Avg_Grn_550nm: data["Raw_Avg_Grn_550nm"][0],
      Raw_StdDev_Grn_550nm: data["Raw_StdDev_Grn_550nm"][0],
      Call_Used_Grn: data["Call_Used_Grn"],
      Call_Values_Grn_550nm: data["Call_Values_Grn_550nm"][0],
      Cal_Selected_Grn_550nm: data["Cal_Selected_Grn_550nm"],
      Cal_Avg_Grn_550nm: data["Cal_Avg_Grn_550nm"][0],
      Cal_StdDev_Grn_550nm: data["Cal_StdDev_Grn_550nm"][0],
    };

    TableData.push(rowsInput);
    setRowsData([...TableData, rowsInput]);
  };

  // received valued comparison
  const subChanged = useCompare(subscribeValue);

  useEffect(() => {
    document.title = "Motor On/off";
    setInterval(() => {
      //  console.log('Interval triggered');
      let obj = { machineID: 0, request: true };
      client.publish(topic_bulkData_request, JSON.stringify(obj), {
        qos: 0,
        retain: false,
      });
      if (subscribeValue == "ON") {
        //console.log('subscribeValue', subscribeValue);
        setSubscribeValue("OFF");
      }
    }, 5000);

    client.on("error", (err) => {
      console.log("Connection error: ", err);
      client.end();
    });

    client.on("connect", () => {
      console.log("CONNECTED to broker");
      client.subscribe(topic_bulkData_grid, { qos: 0 });
      client.subscribe(topic_mag_sensor, { qos: 0 });
      client.subscribe(topic_led_sensor, { qos: 0 });
      client.subscribe(topic_bulkData_reponse, { qos: 0 });
      setUpdated(true);
    });
    client.on("reconnect", () => {
      console.log("Reconnecting...");
    });
    //client.subscribe(topic_bulkData_grid, {qos:0} )
    client.subscribe(topic_mag_sensor, { qos: 0 });
    client.subscribe(topic_led_sensor, { qos: 0 });
    client.subscribe(topic_bulkData_reponse, { qos: 0 });
    //  console.log('54', client.subscribe('/testtopic/sensor', { qos: 0 }))

    // Received
    client.on("message", (topic, message, packet) => {
      let json_obj = JSON.parse(message.toString());
      if (topic == topic_bulkData_grid) {
        //console.log(json_obj)
        addTableRows(json_obj);
        //addTableRows(json_obj)
      }
      if (topic == topic_mag_sensor) {
        //{"id":1,"Motor":true,"speed":50}
        //console.log('Received Message 111: ' + json_obj)
        setSubscribeValue(json_obj.MagnetSensor);
      } else if (topic == topic_bulkData_reponse) {
        let led0 = json_obj[0];
        let led1 = json_obj[1];
        let led2 = json_obj[2];
        let led3 = json_obj[3];
        let led4 = json_obj[4];
        console.log(led0["LED0"][0]); // total 6 indexes in array
      } else if (topic == topic_led_sensor) {
        // get the json and parse first
        if (json_obj.Sensor == 0) {
          {
            set_led1_sensor_value(Number(json_obj.Value.toString()));
          }
        } //{set_led1_sensor_value(Number(message["value"]))}
        else if (json_obj.Sensor == 1) {
          set_led2_sensor_value(Number(json_obj.Value.toString()));
        } else if (json_obj.Sensor == 2) {
          set_led3_sensor_value(Number(json_obj.Value.toString()));
        } else if (json_obj.Sensor == 3) {
          set_led4_sensor_value(Number(json_obj.Value.toString()));
        } else if (json_obj.Sensor == 4) {
          set_led5_sensor_value(Number(json_obj.Value.toString()));
        }
      }
    });
  }, [updated, subscribeValue, subChanged]);

  // return true or false
  function useCompare(val) {
    const prevVal = usePrevious(val);
    return prevVal !== val;
  }

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const onBtnOnClicked = () => {
    let obj = { id: 1, Motor: true, speed: 100 };
    client.publish(topic_motor_speed, JSON.stringify(obj), {
      qos: 0,
      retain: false,
    });
  };
  const onBtnOffClicked = () => {
    let obj = { id: 1, Motor: false, speed: 0 };
    client.publish(topic_motor_speed, JSON.stringify(obj), {
      qos: 0,
      retain: false,
    });
  };

  const onSendLedBrigtness1 = () => {
    let obj = { id: 0, LED: 0, Value: led1_bright };
    client.publish(topic_led_brightness, JSON.stringify(obj), {
      qos: 0,
      retain: false,
    });
    //client.publish('')
  };
  const onSendLedBrigtness2 = () => {
    let obj = { id: 0, LED: 1, Value: led2_bright };
    client.publish(topic_led_brightness, JSON.stringify(obj), {
      qos: 0,
      retain: false,
    });
    //client.publish('')
  };
  const onSendLedBrigtness3 = () => {
    let obj = { id: 0, LED: 2, Value: led3_bright };
    client.publish(topic_led_brightness, JSON.stringify(obj), {
      qos: 0,
      retain: false,
    });
    //client.publish('')
  };
  const onSendLedBrigtness4 = () => {
    let obj = { id: 0, LED: 3, Value: led4_bright };
    client.publish(topic_led_brightness, JSON.stringify(obj), {
      qos: 0,
      retain: false,
    });
    //client.publish('')
  };
  const onSendLedBrigtness5 = () => {
    let obj = { id: 0, LED: 4, Value: led5_bright };
    client.publish(topic_led_brightness, JSON.stringify(obj), {
      qos: 0,
      retain: false,
    });
    //client.publish('')
  };
  const onSendStepperMotor = () => {
    let obj = { stepper: Number(var_stepper_counts) };
    console.log("Value of Stepper steps are : ", var_stepper_counts);
    client.publish(topic_stepper_count, JSON.stringify(obj), {
      qos: 0,
      retain: false,
    });
  };

  const onSend_Open_LinearStepperMotor = () => {
    let obj = { status: "open", count: Number(linear_var_stepper_counts) };
    console.log(
      "Value of linear Stepper steps are : ",
      linear_var_stepper_counts
    );
    client.publish(topic_linear_stepper_count, JSON.stringify(obj), {
      qos: 0,
      retain: false,
    });
  };
  const onSend_Close_LinearStepperMotor = () => {
    let obj = { status: "close", count: Number(linear_var_stepper_counts) };
    console.log(
      "Value of linear Stepper steps are : ",
      linear_var_stepper_counts
    );
    client.publish(topic_linear_stepper_count, JSON.stringify(obj), {
      qos: 0,
      retain: false,
    });
  };

  const getBackgroundSize = () => {
    return { backgroundSize: `${(dcMotor_speed_value * 100) / MAX}% 100%` }; // dcMotor_speed_value, set_dcMotor_sped_value
  };
  const UI = () => {
    return (
      <Fragment>
        <div className="layout-right-side">
          <Container>
            <Card className="text-center border-1 ">
              <Card.Body>
                <Card.Title className="text-green text-center justify-content-center text-uppercase font-38">
                  AVERAGE MAG Sensor Status: {subscribeValue}
                </Card.Title>
              </Card.Body>
              <Row className="maintenance-row system-setup-row">
                <Card.Title className="text-center justify-content-center mt-3 mb-5 text-dark text-uppercase">
                  Sensor Status: {subscribeValue}{" "}
                </Card.Title>
              </Row>
            </Card>
            <span></span>
            <Card className="text-center border-1 ">
              <Card.Body>
                <Card.Title className="text-green text-center justify-content-center text-uppercase font-38">
                  Motor On/off{" "}
                </Card.Title>
                <Card.Text className="mx-auto mb-4" style={{ width: "40rem" }}>
                  Motor on off control from here...
                </Card.Text>
              </Card.Body>
              <Row className="maintenance-row system-setup-row">
                <div className="col-md-12">
                  <button
                    type="btn"
                    className="btn  menu-btn menu-btn2 btn btn-primary motor_on_off_btn"
                    onClick={() => onBtnOnClicked()}
                  >
                    on
                  </button>
                  <button
                    type="btn"
                    className="btn  menu-btn menu-btn2 btn btn-primary motor_on_off_btn"
                    onClick={() => onBtnOffClicked()}
                  >
                    off
                  </button>
                </div>
              </Row>

              <Row className="maintenance-row system-setup-row">
                <Card.Title className="text-center justify-content-center mt-3 mb-5 text-dark text-uppercase">
                  {" "}
                </Card.Title>
              </Row>
            </Card>
            <span></span>

            <Card className="text-center border-1 ">
              <Card.Body>
                <Card.Title className="text-green text-center justify-content-center text-uppercase font-38">
                  GET LED's SENSOR 10 Average VALUES
                </Card.Title>
              </Card.Body>
              <Row>
                <div
                  className="col-md-12"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <h1
                    className=""
                    style={{
                      fontFamily: "Corbel",
                      marginTop: "-2px",
                      marginInline: "20px",
                    }}
                  >
                    LED0 10 avr values
                  </h1>
                  <h13
                    className=""
                    style={{
                      fontFamily: "Corbel",
                      fontSize: "5rem",
                      width: "15rem",
                    }}
                  >
                    {led_sensor_1_value}
                  </h13>
                </div>
                <div
                  className="col-md-12"
                  style={{
                    fontFamily: "Corbel",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <h1
                    className=""
                    style={{
                      fontFamily: "Corbel",
                      marginTop: "-2px",
                      marginInline: "20px",
                    }}
                  >
                    LED1 10 avr values
                  </h1>
                  <h13
                    className=""
                    style={{
                      fontFamily: "Corbel",
                      fontSize: "5rem",
                      width: "15rem",
                    }}
                  >
                    {led_sensor_2_value}
                  </h13>
                </div>
                <div
                  className="col-md-12"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <h1
                    className=""
                    style={{
                      fontFamily: "Corbel",
                      marginTop: "-2px",
                      marginInline: "20px",
                    }}
                  >
                    LED2 10 avr values
                  </h1>
                  <h13
                    className=""
                    style={{
                      fontFamily: "Corbel",
                      fontSize: "5rem",
                      width: "15rem",
                    }}
                  >
                    {led_sensor_3_value}
                  </h13>
                </div>
                <div
                  className="col-md-12"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <h1
                    className=""
                    style={{
                      fontFamily: "Corbel",
                      marginTop: "-2px",
                      marginInline: "20px",
                    }}
                  >
                    LED3 10 avr values
                  </h1>
                  <h13
                    className=""
                    style={{
                      fontFamily: "Corbel",
                      fontSize: "5rem",
                      width: "15rem",
                    }}
                  >
                    {led_sensor_4_value}
                  </h13>
                </div>
                <div
                  className="col-md-12"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <h1
                    className=""
                    style={{
                      fontFamily: "Corbel",
                      marginTop: "-2px",
                      marginInline: "20px",
                    }}
                  >
                    LED4 10 avr values
                  </h1>
                  <h13
                    className=""
                    style={{
                      fontFamily: "Corbel",
                      fontSize: "5rem",
                      width: "15rem",
                    }}
                  >
                    {led_sensor_5_value}
                  </h13>
                </div>
              </Row>
            </Card>

            <Card className="text-center border-1 ">
              <Card.Body>
                <Card.Title className="text-green text-center justify-content-center text-uppercase font-38">
                  Control LED's Brightness
                </Card.Title>
              </Card.Body>
              <Row>
                <ReportOne></ReportOne>
                <div
                  className="col-md-12"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <h1
                    className=""
                    style={{
                      fontFamily: "Corbel",
                      marginTop: "-2px",
                      marginInline: "20px",
                    }}
                  >
                    LED0
                  </h1>
                  <input
                    type="range"
                    min="0"
                    max={MAX}
                    style={getBackgroundSize()}
                    onChange={(e) => setLed1_value(Number(e.target.value))} // dcMotor_speed_value, set_dcMotor_sped_value
                    value={led1_bright}
                  />
                  <h13
                    className=""
                    style={{
                      fontFamily: "Corbel",
                      fontSize: "5rem",
                      width: "15rem",
                    }}
                  >
                    {led1_bright}
                  </h13>
                </div>
                <div className="col-md-12">
                  <button
                    type="btn"
                    className="btn  menu-btn menu-btn2 btn btn-primary motor_on_off_btn"
                    onClick={() => onSendLedBrigtness1()}
                  >
                    Send LED0
                  </button>
                </div>
                <div
                  className="col-md-12"
                  style={{
                    fontFamily: "Corbel",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <h1
                    className=""
                    style={{
                      fontFamily: "Corbel",
                      marginTop: "-2px",
                      marginInline: "20px",
                    }}
                  >
                    LED1
                  </h1>
                  <input
                    type="range"
                    min="0"
                    max={MAX}
                    style={getBackgroundSize()}
                    onChange={(e) => setLed2_value(Number(e.target.value))} // dcMotor_speed_value, set_dcMotor_sped_value
                    value={led2_bright}
                  />
                  <h13
                    className=""
                    style={{
                      fontFamily: "Corbel",
                      fontSize: "5rem",
                      width: "15rem",
                    }}
                  >
                    {led2_bright}
                  </h13>
                </div>
                <div className="col-md-12">
                  <button
                    type="btn"
                    className="btn  menu-btn menu-btn2 btn btn-primary motor_on_off_btn"
                    onClick={() => onSendLedBrigtness2()}
                  >
                    Send LED1
                  </button>
                </div>
                <div
                  className="col-md-12"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <h1
                    className=""
                    style={{
                      fontFamily: "Corbel",
                      marginTop: "-2px",
                      marginInline: "20px",
                    }}
                  >
                    LED2
                  </h1>
                  <input
                    type="range"
                    min="0"
                    max={MAX}
                    style={getBackgroundSize()}
                    onChange={(e) => setLed3_value(Number(e.target.value))} // dcMotor_speed_value, set_dcMotor_sped_value
                    value={led3_bright}
                  />
                  <h13
                    className=""
                    style={{
                      fontFamily: "Corbel",
                      fontSize: "5rem",
                      width: "15rem",
                    }}
                  >
                    {led3_bright}
                  </h13>
                </div>
                <div className="col-md-12">
                  <button
                    type="btn"
                    className="btn  menu-btn menu-btn2 btn btn-primary motor_on_off_btn"
                    onClick={() => onSendLedBrigtness3()}
                  >
                    Send LED2
                  </button>
                </div>
                <div
                  className="col-md-12"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <h1
                    className=""
                    style={{
                      fontFamily: "Corbel",
                      marginTop: "-2px",
                      marginInline: "20px",
                    }}
                  >
                    LED3
                  </h1>
                  <input
                    type="range"
                    min="0"
                    max={MAX}
                    style={getBackgroundSize()}
                    onChange={(e) => setLed4_value(Number(e.target.value))} // dcMotor_speed_value, set_dcMotor_sped_value
                    value={led4_bright}
                  />
                  <h13
                    className=""
                    style={{
                      fontFamily: "Corbel",
                      fontSize: "5rem",
                      width: "15rem",
                    }}
                  >
                    {led4_bright}
                  </h13>
                </div>
                <div className="col-md-12">
                  <button
                    type="btn"
                    className="btn  menu-btn menu-btn2 btn btn-primary motor_on_off_btn"
                    onClick={() => onSendLedBrigtness4()}
                  >
                    Send LED3
                  </button>
                </div>
                <div
                  className="col-md-12"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <h1
                    className=""
                    style={{
                      fontFamily: "Corbel",
                      marginTop: "-2px",
                      marginInline: "20px",
                    }}
                  >
                    LED4
                  </h1>
                  <input
                    type="range"
                    min="0"
                    max={MAX}
                    style={getBackgroundSize()}
                    onChange={(e) => setLed5_value(Number(e.target.value))} // dcMotor_speed_value, set_dcMotor_sped_value
                    value={led5_bright}
                  />
                  <h13
                    className=""
                    style={{
                      fontFamily: "Corbel",
                      fontSize: "5rem",
                      width: "15rem",
                    }}
                  >
                    {led5_bright}
                  </h13>
                </div>
                <div className="col-md-12">
                  <button
                    type="btn"
                    className="btn  menu-btn menu-btn2 btn btn-primary motor_on_off_btn"
                    onClick={() => onSendLedBrigtness5()}
                  >
                    Send LED4
                  </button>
                </div>

                <Card.Title className="text-center justify-content-center mt-3 mb-5 text-dark text-uppercase">
                  {" "}
                </Card.Title>
              </Row>
            </Card>

            <Card className="text-center border-1 ">
              <Card.Body>
                <Card.Title className="text-green text-center justify-content-center text-uppercase font-38">
                  Stepper Motor Control
                </Card.Title>
              </Card.Body>
              <Row>
                <div
                  className="col-md-12"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <h1
                    className=""
                    style={{
                      fontFamily: "Corbel",
                      marginTop: "-2px",
                      marginInline: "20px",
                    }}
                  >
                    Steps Con
                  </h1>
                  <input
                    type="range"
                    min="0"
                    max={MAX}
                    style={getBackgroundSize()}
                    onChange={(e) => setStepperCounts(e.target.value)} // dcMotor_speed_value, set_dcMotor_sped_value
                    value={var_stepper_counts}
                  />
                  <h13
                    className=""
                    style={{
                      fontFamily: "Corbel",
                      fontSize: "5rem",
                      width: "15rem",
                    }}
                  >
                    {var_stepper_counts}
                  </h13>
                </div>
                <div
                  className="col-md-12"
                  style={{
                    fontFamily: "Corbel",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <button
                    type="btn"
                    className="btn  menu-btn menu-btn2 btn btn-primary motor_on_off_btn"
                    onClick={() => onSendStepperMotor()}
                  >
                    Send
                  </button>

                  <Card.Title className="text-center justify-content-center mt-3 mb-5 text-dark text-uppercase">
                    .{" "}
                  </Card.Title>
                </div>
              </Row>
            </Card>

            <Card className="text-center border-1 ">
              <Card.Body>
                <Card.Title className="texhxt-green text-center justify-content-center text-uppercase font-38">
                  Linear Stepper Motor Counts{" "}
                </Card.Title>
              </Card.Body>
              <Row>
                <div
                  className="col-md-12"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <h1
                    className=""
                    style={{
                      fontFamily: "Corbel",
                      marginTop: "-2px",
                      marginInline: "20px",
                    }}
                  >
                    Steps Con
                  </h1>
                  <input
                    type="range"
                    min="0"
                    max={MAX}
                    style={getBackgroundSize()}
                    onChange={(e) => linear_setStepperCounts(e.target.value)} // dcMotor_speed_value, set_dcMotor_sped_value
                    value={linear_var_stepper_counts}
                  />
                  <h13
                    className=""
                    style={{
                      fontFamily: "Corbel",
                      fontSize: "5rem",
                      width: "15rem",
                    }}
                  >
                    {linear_var_stepper_counts}
                  </h13>
                </div>
                <div
                  className="col-md-12"
                  style={{
                    fontFamily: "Corbel",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <button
                    type="btn"
                    className="btn  menu-btn menu-btn2 btn btn-primary motor_on_off_btn"
                    onClick={() => onSend_Open_LinearStepperMotor()}
                  >
                    Open
                  </button>
                  <button
                    type="btn"
                    className="btn  menu-btn menu-btn2 btn btn-primary motor_on_off_btn"
                    onClick={() => onSend_Close_LinearStepperMotor()}
                  >
                    Close
                  </button>

                  <Card.Title className="text-center justify-content-center mt-3 mb-5 text-dark text-uppercase">
                    .{" "}
                  </Card.Title>
                </div>
              </Row>
            </Card>

            <Card className="text-center border-1 ">
              <Card.Body>
                <Card.Title className="text-green text-center justify-content-center text-uppercase font-38">
                  Grid Implementation
                </Card.Title>
              </Card.Body>
              <Row>
                <div
                  className="table-responsive"
                  style={{
                    height: "400px",
                    overflow: "auto",
                    fontFamily: "Corbel",
                    marginTop: "-2px",
                    marginInline: "20px",
                    width: "96%",
                  }}
                >
                  <table className="reports-tab">
                    <thead>
                      <tr className="one">
                        <th>Data_Point</th>
                        <th>Sample_Num</th>
                        <th>Time_Stamp</th>
                        <th>Time_Per</th>
                        <th>Temp</th>
                        <th>Gain</th>
                        <th>Int_Time</th>
                        <th>Allowable_Dev</th>

                        <th>Raw_Used_Vio</th>
                        <th>Raw_Values_Vio_450nm</th>
                        <th>Raw_Selected_Vio_450nm</th>
                        <th>Raw_Avg_Vio_450nm</th>
                        <th>Raw_StdDev_Vio_450nm</th>
                        <th>Call_Used_Vio</th>
                        <th>Call_Values_Vio_450nm</th>
                        <th>Cal_Selected_Vio_450nm</th>
                        <th>Cal_Avg_Vio_450nm</th>
                        <th>Cal_StdDev_Vio_450nm'</th>

                        <th>Raw_Used_Blu</th>
                        <th>Raw_Values_Blu_500nm</th>
                        <th>Raw_Selected_Blu_500nm</th>
                        <th>Raw_Avg_Blu_500nm</th>
                        <th>Raw_StdDev_Blu_500nm</th>
                        <th>Call_Used_Blu</th>
                        <th>Call_Values_Blu_500nm</th>
                        <th>Cal_Selected_Blu_500nm</th>
                        <th>Cal_Avg_Blu_500nm</th>
                        <th>Cal_StdDev_Blu_500nm'</th>

                        <th>Raw_Used_Grn</th>
                        <th>Raw_Values_Grn_550nm</th>
                        <th>Raw_Selected_Grn_550nm</th>
                        <th>Raw_Avg_Grn_550nm</th>
                        <th>Raw_StdDev_Grn_550nm</th>
                        <th>Call_Used_Grn</th>
                        <th>Call_Values_Grn_550nm</th>
                        <th>Cal_Selected_Grn_550nm</th>
                        <th>Cal_Avg_Grn_550nm</th>
                        <th>Cal_StdDev_Grn_550nm'</th>
                      </tr>
                    </thead>
                    <tbody>
                      <TableRows rowsData={rowsData} />
                    </tbody>
                  </table>
                </div>
              </Row>
            </Card>
          </Container>
        </div>
      </Fragment>
    );
  };

  return <Fragment>{UI()}</Fragment>;
};
export default Test101;

/**
 * 
             const rowsInput={
                Data_Point:'', Sample_Num:'', Time_Stamp:'', Time_Per:'', Temp:'', Gain:'', Int_Time:'',Allowable_Dev:'',
                Raw_Used_Vio:'', Raw_Values_Vio_450nm:'', Raw_Selected_Vio_450nm:'', Raw_Avg_Vio_450nm:'', Raw_StdDev_Vio_450nm:'', Call_Used_Vio:'', Call_Values_Vio_450nm:'', Cal_Selected_Vio_450nm:'', Cal_Avg_Vio_450nm:'', Cal_StdDev_Vio_450nm:'',
                Raw_Used_Blu:'', Raw_Values_Blu_500nm:'', Raw_Selected_Blu_500nm:'', Raw_Avg_Blu_500nm:'', Raw_StdDev_Blu_500nm:'', Call_Used_Blu:'', Call_Values_Blu_500nm:'', Cal_Selected_Blu_500nm:'', Cal_Avg_Blu_500nm:'', Cal_StdDev_Blu_500nm:'',
                Raw_Used_Grn:'', Raw_Values_Grn_550nm:'', Raw_Selected_Grn_550nm :'', Raw_Avg_Grn_550nm:'', Raw_StdDev_Grn_550nm:'', Call_Used_Grn:'', Call_Values_Grn_550nm:'', Cal_Selected_Grn_550nm:'', Cal_Avg_Grn_550nm:'', Cal_StdDev_Grn_550nm:'',
            } 

            
 */

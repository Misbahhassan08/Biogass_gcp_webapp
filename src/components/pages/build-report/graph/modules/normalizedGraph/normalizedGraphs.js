import { useState, useEffect } from "react";
import SensorGraphData from "./SensorData";
import WaveLengthGraphData from "./WavelengthData";
import { CSVLink } from "react-csv";
import { Button } from "react-bootstrap";

function NormalizedGraphData(props) {
  const renderSensorGraphs = ["Raw", "Cal"];
  const renderWaveLengthGraphs = ["Vio", "Blu", "Grn", "Yel", "Org", "Red"];

  console.log(props.loop, "this is the props loop");

  return (
    <div>
      {
        // render the RAW graphs for the sensors
        props.loop.map((item, index) => (
          <SensorGraphData
            index={index}
            graphs={"Raw"}
            key={index}
            xMinValue={props.xMinValue}
            xMaxValue={props.xMaxValue}
            yMinValue={props.yMinValue}
            yMaxValue={props.yMaxValue}
          />
          
        ))
      }

      {
        // render the CAL graphs for the sensors
        props.loop.map((item, index) => (
          <SensorGraphData
            index={index}
            graphs={"Cal"}
            key={index}
            xMinValue={props.xMinValue}
            xMaxValue={props.xMaxValue}
            yMinValue={props.yMinValue}
            yMaxValue={props.yMaxValue}
          />
        
        ))
      }

      {
        // render the graphs of every RAW wave length
        renderWaveLengthGraphs.map((wavevalue, index) => (
          <WaveLengthGraphData
            dataType={"Raw"}
            wave={wavevalue}
            xMinValue={props.xMinValue}
            xMaxValue={props.xMaxValue}
            yMinValue={props.yMinValue}
            yMaxValue={props.yMaxValue}
            yValueLoop={props.loop}
            key={index} // Add a unique key for each graph
          />
        
        ))
      }

      {
        // render the graphs of every CAL wave length
        renderWaveLengthGraphs.map((wavevalue, index) => (
          <WaveLengthGraphData
            dataType={"Cal"}
            wave={wavevalue}
            xMinValue={props.xMinValue}
            xMaxValue={props.xMaxValue}
            yMinValue={props.yMinValue}
            yMaxValue={props.yMaxValue}
            yValueLoop={props.loop}
            key={index} // Add a unique key for each graph
          />
          
        ))
      }
    </div>
  );
}

export default NormalizedGraphData;

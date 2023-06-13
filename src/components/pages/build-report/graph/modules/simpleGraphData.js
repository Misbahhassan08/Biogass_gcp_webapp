import { useState, useEffect } from "react";
import React from "react";
import dayjs from "dayjs";
import { ResponsiveLine } from "@nivo/line";
import { Container,Row, Col, Button } from "react-bootstrap";
import { CSVLink } from "react-csv";

function SimpleGraphData(props) {
  const [headers, setheaders] = useState([{ label: "TimeStamp", key: "timestamp" },
  { label: "Vio", key: "vio" },
  { label: "Blue", key: "blu" },
  { label: "Green", key: "grn" },
  { label: "Yellow", key: "yel" },
  { label: "Orange", key: "org" },
  { label: "Red", key: "red" },]);
  const [finalData, setFinalData] = useState([]);
  const [sensorNum, setSensorNum] = useState("");
  const [rowData, setrowData] = useState([]);

  const isDashboard = false;
  let dataType;

  const VioPoint = [props.dataType + "_Avg_Vio_450nm"];
  const BluPoint = [props.dataType + "_Avg_Blu_500nm"];
  const GrnPoint = [props.dataType + "_Avg_Grn_550nm"];
  const YelPoint = [props.dataType + "_Avg_Yel_570nm"];
  const OrgPoint = [props.dataType + "_Avg_Org_600nm"];
  const RedPoint = [props.dataType + "_Avg_Red_650nm"];

  
  const colorsNivo = {
    Vio: "violet",
    Blu: "blue",
    Grn: "green",
    Yel: "yellow",
    Org: "orange",
    Red: "red",
  };

  if (props.dataType === "Cal") {
    dataType = "Calibrated";
  } else if (props.dataType === "Raw") {
    dataType = "Raw";
  } else if (props.dataType === "Nrm") {
    dataType = "Normalized";
  }

  function showGraphData() {
    const data = localStorage.getItem("mqttResponseDataNormalized");

    const parsedData = JSON.parse(data);
    setSensorNum(parsedData);
    //debugger;
    //console.log(parsedData[0], "this is parsed data");
    //console.log(props.index, "this is the index");
    //console.log(props, "these are the props");
    // debugger;
    const sampleLength = parsedData[props.index].Samples;
    setSensorNum(parsedData[props.index].Data_Point);

    let filteredData = [];
    
    const maindata = [
      {
        id: "Vio",
        data: [],
      },
      {
        id: "Blu",
        data: [],
      },
      {
        id: "Grn",
        data: [],
      },
      {
        id: "Yel",
        data: [],
      },
      {
        id: "Org",
        data: [],
      },
      {
        id: "Red",
        data: [],
      },
    ];
    
    
    for (let i = 0; i < sampleLength.length; i++) {
     
      const time = parsedData[props.index].Samples[i].Time_Stamp.split(" ")[1];
      const dataDateTime = dayjs(time, "HH:mm:ss");
      // console.log(dataDateTime, "this is the time");
      // debugger;
      if (dataDateTime >= props.xMinValue && dataDateTime <= props.xMaxValue) {
        let row = {
          timestamp : time.toString(),
          vio :parsedData[props.index].Samples[i]?.[VioPoint],
          blu :parsedData[props.index].Samples[i]?.[BluPoint],
          grn :parsedData[props.index].Samples[i]?.[GrnPoint] ,
          yel :parsedData[props.index].Samples[i]?.[YelPoint] ,
          org :parsedData[props.index].Samples[i]?.[OrgPoint] ,
          red :parsedData[props.index].Samples[i]?.[RedPoint] 
        }
      
        const text = [
          {
            data: [
              {
                x: parsedData[props.index].Samples[i].Time_Stamp.split(" ")[1],
                y: parsedData[props.index].Samples[i]?.[VioPoint],
                
              },
            ],
          },
          {
            data: [
              {
                x: parsedData[props.index].Samples[i].Time_Stamp.split(" ")[1],
                y: parsedData[props.index].Samples[i]?.[BluPoint],
              },
            ],
          },
          {
            data: [
              {
                x: parsedData[props.index].Samples[i].Time_Stamp.split(" ")[1],
                y: parsedData[props.index].Samples[i]?.[GrnPoint],
              },
            ],
          },
          {
            data: [
              {
                x: parsedData[props.index].Samples[i].Time_Stamp.split(" ")[1],
                y: parsedData[props.index].Samples[i]?.[YelPoint],
              },
            ],
          },
          {
            data: [
              {
                x: parsedData[props.index].Samples[i].Time_Stamp.split(" ")[1],
                y: parsedData[props.index].Samples[i]?.[OrgPoint],
              },
            ],
          },
          {
            data: [
              {
                x: parsedData[props.index].Samples[i].Time_Stamp.split(" ")[1],
                y: parsedData[props.index].Samples[i]?.[RedPoint],
              },
            ],
          },
        ];

        setrowData(current => [...current, row])
        for (let i = 0; i <= 5; i++) {
          maindata[i]?.data.push(text[i]?.data[0]);
          filteredData = maindata.filter(
            (item) =>
              // console.log(item.data[i]?.y, "this is the item"),
              item.data[i]?.y >= props.yMinValue &&
              item.data[i]?.y <= props.yMaxValue
          );
          // console.log(filteredData, "this is filtered data");
        }

        // console.log("====================================");
        // console.log(maindata, "this is updatedPoints at", i);
        // console.log("====================================");
        // }
      }
    }

    setFinalData(filteredData);
  }

  useEffect(() => {
    showGraphData();
  }, []);
  const csvReport = {
    data: rowData,
    headers: headers,
    filename: dataType+'data_P'+sensorNum+'.csv'
  };
  return (
    <Container style={{ height: "60vh" }}>
      <h3 style={{ marginTop: 90, textAlign: "center" }}>
        {dataType} data : P{sensorNum} Graph
      </h3>
      
      <Button><CSVLink {...csvReport}>Export Data to CSV</CSVLink></Button>
      <ResponsiveLine
        // {...console.log(finalData, "this is final data")}
        data={finalData}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: "grey",
              },
            },
            legend: {
              text: {
                fill: "grey",
              },
            },
            ticks: {
              line: {
                stroke: "grey",
                strokeWidth: 1,
              },
              text: {
                fill: "grey",
              },
            },
          },
          legends: {
            text: {
              fill: "grey",
            },
          },
          tooltip: {
            container: {
              color: "grey",
            },
          },
        }}
        colors={({ id }) => colorsNivo[id]}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 7,
          tickPadding: 5,
          tickRotation: 40,
          legend: isDashboard ? undefined : "Time", // added
          legendOffset: 46,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickValues: 5, // added
          tickSize: 7,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? undefined : "Value", // added
          legendOffset: -40,
          legendPosition: "middle",
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={8}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />

      </Container>
  );
}

export default SimpleGraphData;

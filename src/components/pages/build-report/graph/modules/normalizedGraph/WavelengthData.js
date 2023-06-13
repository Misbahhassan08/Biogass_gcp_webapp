import { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";
import dayjs from "dayjs";
import { CSVLink } from "react-csv";
import { Button } from "react-bootstrap";

function WaveLengthGraphData(props) {
  const [finalData, setFinalData] = useState([]);
  const [headers, setheaders] = useState([
    { label: "TimeStamp", key: "timestamp" },
    { label: "Color", key: "vio" }]);
  const [rowData, setrowData] = useState([]);
  const isDashboard = false;
  let wave;

  switch (props.wave) {
    case "Vio":
      wave = "Vio_450nm";
      break;
    case "Blu":
      wave = "Blu_500nm";
      break;
    case "Grn":
      wave = "Grn_550nm";
      break;
    case "Yel":
      wave = "Yel_570nm";
      break;
    case "Org":
      wave = "Org_600nm";
      break;
    case "Red":
      wave = "Red_650nm";
      break;
    default:
      break;
  }

  useEffect(() => {
    showGraphData();
  }, []);

  function showGraphData() {
    const data = localStorage.getItem("mqttResponseDataNormalized");

    const parsedData = JSON.parse(data);
    const sensorNum = parsedData.length;

    const _result = [];
    let filteredData = [];
    for (let i = 0; i < parsedData.length; i++) {
      const samples = parsedData[i].Samples;
      const graphData = {
        // id: props.dataType + "_Avg_" + wave + "_P" + samples[i].Sample_Num,
        id: props.dataType +  "_P" + samples[i].Sample_Num,
        data: [],
      };
      
      for (let j = 0; j < samples.length; j++) {
        // const dataDateTime = dayjs(parsedData[i].Samples[j].Time_Stamp);
        const time= parsedData[i].Samples[j].Time_Stamp.split(" ")[1]
        const dataDateTime = dayjs(time, "HH:mm:ss");

        // console.log(props.xMinValue[i], "these are the min Value");
        // console.log(props.xMaxValue[i], "these are the max Value");
        // console.log(dataDateTime, "this is data datetime");
        
        if (
          dataDateTime >= props.xMinValue &&
          dataDateTime <= props.xMaxValue
        ) {

          const time = samples[j].Time_Stamp.split(" ")[1];
          const value = samples[j][props.dataType + "_Avg_" + wave];
          let row = {
            timestamp : time.toString(),
            vio : value
          }
          const dataPoint = {
            x: time,
            y: value,
          };

          setrowData(current => [...current, row])
          graphData.data.push(dataPoint);
        }
      }
      _result.push(graphData);
      console.log(_result[i].data, "this is result data at", i);

      props.yValueLoop.map((item, index) => {
        for (let k = 0; k < _result[i].data.length; k++) {
          // console.log("######## ---- Idex of Y axis = "+ i + "and result = "+ result[i].data[0][0])
          filteredData = _result.filter(
            (item) =>
              // console.log(item.data[k]?.y, "this is data at" ,k)
              item.data[k]?.y >= props.yMinValue &&
              item.data[k]?.y <= props.yMaxValue
          );
        }
        return <div>dlkfj</div>;
      });
      // setFilteredData((prevFilteredData) => filterd);
    }
    setFinalData(filteredData);
  }
  const csvReport = {
    data: rowData,
    headers: headers,
    filename: props.dataType+'data_Normalized_Avg'+wave+'.csv'
  };
  return (
    <div style={{ height: "60vh" }}>
      <h3 style={{ marginTop: 90, textAlign: "center" }}>
        {props.dataType} data : Normalized @ Avg_{wave}
      </h3>
      <Button><CSVLink {...csvReport}>Export Data to CSV</CSVLink></Button>
      <ResponsiveLine
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
        colors={{ scheme: "nivo" }}
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
    </div>
  );
}

export default WaveLengthGraphData;

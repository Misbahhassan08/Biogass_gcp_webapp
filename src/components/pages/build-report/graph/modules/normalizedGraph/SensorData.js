import { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";
import dayjs from "dayjs";

function SensorGraphData(props) {
  const [finalData, setFinalData] = useState([]);
  const [sensorNum, setSensorNum] = useState("");
  const [isDataValid, setIsDataValid] = useState(false);

  const isDashboard = false;
  let graphs;

  const VioPoint = [props.graphs + "_Avg_Vio_450nm"];
  const BluPoint = [props.graphs + "_Avg_Blu_500nm"];
  const GrnPoint = [props.graphs + "_Avg_Grn_550nm"];
  const YelPoint = [props.graphs + "_Avg_Yel_570nm"];
  const OrgPoint = [props.graphs + "_Avg_Org_600nm"];
  const RedPoint = [props.graphs + "_Avg_Red_650nm"];
  const colorsNivo = {
    Vio: "violet",
    Blu: "blue",
    Grn: "green",
    Yel: "yellow",
    Org: "orange",
    Red: "red",
  };

  if (props.graphs == "Cal") {
    graphs = "Calibrated";
  } else if (props.graphs == "Raw") {
    graphs = "Raw";
  } else if (props.graphs == "Nrm") {
    graphs = "Normalized";
  }

  function showGraphData() {
    const data = localStorage.getItem("mqttResponseDataNormalized");

    const parsedData = JSON.parse(data);
    // setSensorNum(parsedData);

    // console.log(props.index, "this is the index");
    // console.log(props.graphs, "this is the grahps");

    // get the samples of every data point
    const sampleLength = parsedData[props.index].Samples;
    // const sampleLength = parsedData[props.index];

    //check if data is correct
    setSensorNum(parsedData[props.index].Data_Point);

    //make the data object

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
      const dataDateTime = dayjs(parsedData[props.index].Samples[i].Time_Stamp);

      // console.log(props.yMinValue[props.index], "this is y min value");

      if (
        dataDateTime >= props.xMinValue[props.index] &&
        dataDateTime <= props.xMaxValue[props.index]
      ) {
        const text = [
          {
            data: [
              {
                x: parsedData[props.index].Samples[i].Time_Stamp,
                y: parsedData[props.index].Samples[i]?.[VioPoint],
              },
            ],
          },
          {
            data: [
              {
                x: parsedData[props.index].Samples[i].Time_Stamp,
                y: parsedData[props.index].Samples[i]?.[BluPoint],
              },
            ],
          },
          {
            data: [
              {
                x: parsedData[props.index].Samples[i].Time_Stamp,
                y: parsedData[props.index].Samples[i]?.[GrnPoint],
              },
            ],
          },
          {
            data: [
              {
                x: parsedData[props.index].Samples[i].Time_Stamp,
                y: parsedData[props.index].Samples[i]?.[YelPoint],
              },
            ],
          },
          {
            data: [
              {
                x: parsedData[props.index].Samples[i].Time_Stamp,
                y: parsedData[props.index].Samples[i]?.[OrgPoint],
              },
            ],
          },
          {
            data: [
              {
                x: parsedData[props.index].Samples[i].Time_Stamp,
                y: parsedData[props.index].Samples[i]?.[RedPoint],
              },
            ],
          },
        ];

        for (let i = 0; i <= 5; i++) {
          maindata[i]?.data.push(text[i]?.data[0]);
          filteredData = maindata.filter(
            (item) =>
              // console.log(item.data[i]?.y, "this is the item"),
              item.data[i]?.y >= props.yMinValue[props.index] &&
              item.data[i]?.y <= props.yMaxValue[props.index]
          );
        }

        //   console.log("====================================");
        //   console.log(maindata, "this is updatedPoints at", i);
        //   console.log("====================================");
      }
    }

    // console.log(filteredData.length, "this is the filtered data at", graphs, sensorNum);

    setFinalData(filteredData);
  }

  useEffect(() => {
    showGraphData();
  }, []);

  return (
    <div style={{ height: "60vh" }}>
      <h3 style={{ marginTop: 90, textAlign: "center" }}>
        {graphs} data : Normalized P{sensorNum}
      </h3>
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
      
    </div>
  );
}

export default SensorGraphData;

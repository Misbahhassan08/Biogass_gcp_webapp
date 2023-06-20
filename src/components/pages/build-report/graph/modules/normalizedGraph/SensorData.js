import { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";
import dayjs from "dayjs";
import { CSVLink } from "react-csv";
import { Button } from "react-bootstrap";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import XMLExport from "../../../XMLExport";

function SensorGraphData(props) {
  const [finalData, setFinalData] = useState([]);
  const [sensorNum, setSensorNum] = useState("");
  const [rowData, setrowData] = useState([]);
  const [headers, setheaders] = useState([
    { label: "TimeStamp", key: "timestamp" },
    { label: props.graphs + "_Avg_Vio_450nm", key: "vio" },
    { label: props.graphs + "_Avg_Blu_500nm", key: "blu" },
    { label: props.graphs + "_Avg_Grn_550nm", key: "grn" },
    { label: props.graphs + "_Avg_Yel_570nm", key: "yel" },
    { label: props.graphs + "_Avg_Org_600nm", key: "org" },
    { label: props.graphs + "_Avg_Red_650nm", key: "red" },
  ]);

  const fieldsAsObjects = {
    timestamp: "Date column header",
    vio: "vio column header",
    blu: "blue column header",
    grn: "green column header",
    yel: "yelloow column header",
    org: "orange data column header",
    red: "red data column header",
  };

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

  function handleExportImage() {
    const graphContainer = document.getElementById(
      "graph-container" + graphs + sensorNum
    );
    domtoimage
      .toBlob(graphContainer)
      .then((blob) => {
        saveAs(blob, "graph.png");
      })
      .catch((error) => {
        console.error("Error exporting image:", error);
      });
  }

  function showGraphData() {
    const data = localStorage.getItem("mqttResponseDataNormalized");

    const parsedData = JSON.parse(data);
    const sampleLength = parsedData[props.index].Samples;

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

    const firstYVioPoint = parsedData[props.index].Samples[0]?.[VioPoint];
    const firstYBluPoint = parsedData[props.index].Samples[0]?.[BluPoint];
    const firstYGrnPoint = parsedData[props.index].Samples[0]?.[GrnPoint];
    const firstYYelPoint = parsedData[props.index].Samples[0]?.[YelPoint];
    const firstYOrgPoint = parsedData[props.index].Samples[0]?.[OrgPoint];
    const firstYRedPoint = parsedData[props.index].Samples[0]?.[RedPoint];
    // console.log(firstYVioPoint, "first y point with props", props.index, "of point", VioPoint );
    // console.log(firstYBluPoint, "first y point with props", props.index, "of point", BluPoint );
    // console.log(firstYGrnPoint, "first y point with props", props.index, "of point", GrnPoint );
    // console.log(firstYYelPoint, "first y point with props", props.index, "of point", YelPoint );
    // console.log(firstYOrgPoint, "first y point with props", props.index, "of point", OrgPoint );
    // console.log(firstYRedPoint, "first y point with props", props.index, "of point", RedPoint );
    for (let i = 0; i < sampleLength.length; i++) {
      const time = parsedData[props.index].Samples[i].Time_Stamp.split(" ")[1];
      const dataDateTime = dayjs(time, "HH:mm:ss");
      let row = {
        timestamp: time.toString(),
        vio: parsedData[props.index].Samples[i]?.[VioPoint],
        blu: parsedData[props.index].Samples[i]?.[BluPoint],
        grn: parsedData[props.index].Samples[i]?.[GrnPoint],
        yel: parsedData[props.index].Samples[i]?.[YelPoint],
        org: parsedData[props.index].Samples[i]?.[OrgPoint],
        red: parsedData[props.index].Samples[i]?.[RedPoint],
      };
      // console.log(props.yMinValue[props.index], "this is y min value");

      if (dataDateTime >= props.xMinValue && dataDateTime <= props.xMaxValue) {
        const normVio =
          parsedData[props.index].Samples[i]?.[VioPoint] / firstYVioPoint - 1;
        const normBlu =
          parsedData[props.index].Samples[i]?.[BluPoint] / firstYBluPoint - 1;
        const normGrn =
          parsedData[props.index].Samples[i]?.[GrnPoint] / firstYGrnPoint - 1;
        const normYel =
          parsedData[props.index].Samples[i]?.[YelPoint] / firstYYelPoint - 1;
        const normOrg =
          parsedData[props.index].Samples[i]?.[OrgPoint] / firstYOrgPoint - 1;
        const normRed =
          parsedData[props.index].Samples[i]?.[RedPoint] / firstYRedPoint - 1;
        // console.log(firstYVioPoint, "first y point");
        // console.log(parsedData[props.index].Samples[i]?.[VioPoint], "y point");
        // console.log(normVio, "this is norm vio");

        const text = [
          {
            data: [
              {
                x: parsedData[props.index].Samples[i].Time_Stamp.split(" ")[1],
                // y: parsedData[props.index].Samples[i]?.[VioPoint],
                y: normVio,
              },
            ],
          },
          {
            data: [
              {
                x: parsedData[props.index].Samples[i].Time_Stamp.split(" ")[1],
                // y: parsedData[props.index].Samples[i]?.[BluPoint],
                y: normBlu,
              },
            ],
          },
          {
            data: [
              {
                x: parsedData[props.index].Samples[i].Time_Stamp.split(" ")[1],
                // y: parsedData[props.index].Samples[i]?.[GrnPoint],
                y: normGrn,
              },
            ],
          },
          {
            data: [
              {
                x: parsedData[props.index].Samples[i].Time_Stamp.split(" ")[1],
                // y: parsedData[props.index].Samples[i]?.[YelPoint],
                y: normYel,
              },
            ],
          },
          {
            data: [
              {
                x: parsedData[props.index].Samples[i].Time_Stamp.split(" ")[1],
                // y: parsedData[props.index].Samples[i]?.[OrgPoint],
                y: normOrg,
              },
            ],
          },
          {
            data: [
              {
                x: parsedData[props.index].Samples[i].Time_Stamp.split(" ")[1],
                // y: parsedData[props.index].Samples[i]?.[RedPoint],
                y: normRed,
              },
            ],
          },
        ];
        setrowData((current) => [...current, row]);
        for (let i = 0; i <= 5; i++) {
          maindata[i]?.data.push(text[i]?.data[0]);
          filteredData = maindata.filter(
            (item) =>
              // console.log(item.data[i]?.y, "this is the item"),
              item.data[i]?.y >= props.yMinValue &&
              item.data[i]?.y <= props.yMaxValue
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
  const csvReport = {
    data: rowData,
    headers: headers,
    xsd_filename: graphs + "data_Normalize_P" + sensorNum + ".xml",
    filename: graphs + "data_Normalize_P" + sensorNum + ".csv",
  };
  return (
    <div>
      <h3 style={{ marginTop: 90, textAlign: "center" }}>
        {graphs} data : Normalized P{sensorNum}
      </h3>
      <Button type="submit" className="mx-2 menu-btn menu-btn1">
        <CSVLink {...csvReport}>Export Data to CSV</CSVLink>
      </Button>
      <Button
        type="submit"
        className="mx-2 menu-btn menu-btn2"
        onClick={handleExportImage}
      >
        Export Image
      </Button>
      <XMLExport
        data={rowData}
        fields={fieldsAsObjects}
        fileName={csvReport.xsd_filename}
      />
      <div
        id={"graph-container" + graphs + sensorNum}
        style={{ height: "60vh" }}
      >
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
    </div>
  );
}

export default SensorGraphData;

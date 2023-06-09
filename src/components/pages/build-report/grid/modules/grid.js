import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";

const DataTable = () => {
  const [rows, setRows] = useState([]);
  const [prevPayload, setPrevPayload] = useState("");

  useEffect(() => {
    const txt = localStorage.getItem("mqttResponseDataNormalized");

    const parsedData = JSON.parse(txt);
    console.log("this is parsed Data", parsedData);
    setPrevPayload(txt);

    const newRow = Object.keys(parsedData.Data_Point).map((key) => ({
      Data_Point: parsedData.Data_Point[key],
      Sample_Num: parsedData.Sample_Num[key],
      Time_Stamp: parsedData.Time_Stamp[key],
      Time_Per: parsedData.Time_Per[key],
      Temp: parsedData.Temp[key],
      Allowable_Dev: parsedData.Allowable_Dev[key],
      Gain: parsedData.Gain[key],
      Int_Time: parsedData.Int_Time[key],

      Raw_Used_Vio: parsedData.Raw_Used_Vio[key],
      Raw_Values_Vio_450nm: parsedData.Raw_Values_Vio_450nm[key],
      Raw_Selected_Vio_450nm: parsedData.Raw_Selected_Vio_450nm[key],
      Raw_Avg_Vio_450nm: parsedData.Raw_Avg_Vio_450nm[key],
      Raw_StdDev_Vio: parsedData.Raw_StdDev_Vio[key],
      Cal_Used_Vio: parsedData.Cal_Used_Vio[key],
      Cal_Values_Vio_450nm: parsedData.Cal_Values_Vio_450nm[key],
      Cal_Selected_Vio_450nm: parsedData.Cal_Selected_Vio_450nm[key],
      Cal_Avg_Vio_450nm: parsedData.Cal_Avg_Vio_450nm[key],
      Cal_StdDev_Vio: parsedData.Cal_StdDev_Vio[key],

      Raw_Used_Blu: parsedData.Raw_Used_Blu[key],
      Raw_Values_Blu_500nm: parsedData.Raw_Values_Blu_500nm[key],
      Raw_Selected_Blu_500nm: parsedData.Raw_Selected_Blu_500nm[key],
      Raw_Avg_Blu_500nm: parsedData.Raw_Avg_Blu_500nm[key],
      Raw_StdDev_Blu: parsedData.Raw_StdDev_Blu[key],
      Cal_Used_Blu: parsedData.Cal_Used_Blu[key],
      Cal_Values_Blu_500nm: parsedData.Cal_Values_Blu_500nm[key],
      Cal_Selected_Blu_500nm: parsedData.Cal_Selected_Blu_500nm[key],
      Cal_Avg_Blu_500nm: parsedData.Cal_Avg_Blu_500nm[key],
      Cal_StdDev_Blu: parsedData.Cal_StdDev_Blu[key],

      Raw_Used_Grn: parsedData.Raw_Used_Grn[key],
      Raw_Values_Grn_550nm: parsedData.Raw_Values_Grn_550nm[key],
      Raw_Selected_Grn_550nm: parsedData.Raw_Selected_Grn_550nm[key],
      Raw_Avg_Grn_550nm: parsedData.Raw_Avg_Grn_550nm[key],
      Raw_StdDev_Grn: parsedData.Raw_StdDev_Grn[key],
      Cal_Used_Grn: parsedData.Cal_Used_Grn[key],
      Cal_Values_Grn_550nm: parsedData.Cal_Values_Grn_550nm[key],
      Cal_Selected_Grn_550nm: parsedData.Cal_Selected_Grn_550nm[key],
      Cal_Avg_Grn_550nm: parsedData.Cal_Avg_Grn_550nm[key],
      Cal_StdDev_Grn: parsedData.Cal_StdDev_Grn[key],

      Raw_Used_Yel: parsedData.Raw_Used_Yel[key],
      Raw_Values_Yel_570nm: parsedData.Raw_Values_Yel_570nm[key],
      Raw_Selected_Yel_570nm: parsedData.Raw_Selected_Yel_570nm[key],
      Raw_Avg_Yel_570nm: parsedData.Raw_Avg_Yel_570nm[key],
      Raw_StdDev_Yel: parsedData.Raw_StdDev_Yel[key],
      Cal_Used_Yel: parsedData.Cal_Used_Yel[key],
      Cal_Values_Yel_570nm: parsedData.Cal_Values_Yel_570nm[key],
      Cal_Selected_Yel_570nm: parsedData.Cal_Selected_Yel_570nm[key],
      Cal_Avg_Yel_570nm: parsedData.Cal_Avg_Yel_570nm[key],
      Cal_StdDev_Yel: parsedData.Cal_StdDev_Yel[key],

      Raw_Used_Org: parsedData.Raw_Used_Org[key],
      Raw_Values_Org_600nm: parsedData.Raw_Values_Org_600nm[key],
      Raw_Selected_Org_600nm: parsedData.Raw_Selected_Org_600nm[key],
      Raw_Avg_Org_600nm: parsedData.Raw_Avg_Org_600nm[key],
      Raw_StdDev_Org: parsedData.Raw_StdDev_Org[key],
      Cal_Used_Org: parsedData.Cal_Used_Org[key],
      Cal_Values_Org_600nm: parsedData.Cal_Values_Org_600nm[key],
      Cal_Selected_Org_600nm: parsedData.Cal_Selected_Org_600nm[key],
      Cal_Avg_Org_600nm: parsedData.Cal_Avg_Org_600nm[key],
      Cal_StdDev_Org: parsedData.Cal_StdDev_Org[key],

      Raw_Used_Red: parsedData.Raw_Used_Red[key],
      Raw_Values_Red_650nm: parsedData.Raw_Values_Red_650nm[key],
      Raw_Selected_Red_650nm: parsedData.Raw_Selected_Red_650nm[key],
      Raw_Avg_Red_650nm: parsedData.Raw_Avg_Red_650nm[key],
      Raw_StdDev_Red: parsedData.Raw_StdDev_Red[key],
      Cal_Used_Red: parsedData.Cal_Used_Red[key],
      Cal_Values_Red_650nm: parsedData.Cal_Values_Red_650nm[key],
      Cal_Selected_Red_650nm: parsedData.Cal_Selected_Red_650nm[key],
      Cal_Avg_Red_650nm: parsedData.Cal_Avg_Red_650nm[key],
      Cal_StdDev_Red: parsedData.Cal_StdDev_Red[key],
    }));

    const row = newRow;

    setRows(row);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const txt = localStorage.getItem("mqttreponsemetadatarows");
      if (txt !== prevPayload) {
        const parsedData = JSON.parse(txt);
        //console.log("Table's Parsed Data", parsedData);
        setPrevPayload(txt);

        const newRow = Object.keys(parsedData.Data_Point).map((key) => ({
          Data_Point: parsedData.Data_Point[key],
          Sample_Num: parsedData.Sample_Num[key],
          Time_Stamp: parsedData.Time_Stamp[key],
          Time_Per: parsedData.Time_Per[key],
          Temp: parsedData.Temp[key],
          Gain: parsedData.Gain[key],
          Int_Time: parsedData.Int_Time[key],
        }));

        const row = [];

        row.push(...rows, newRow[0]);
        console.log("this is the final output", row);

        setRows(row);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [prevPayload, rows]);

  const columns = [
    { field: "CsvfileID", headerName: "CSV File Id" },
    { field: "RPI_DataID", headerName: "RPI Data Id" },
    { field: "Data_Point", headerName: "Data Point" },
    { field: "Sample_Num", headerName: "Sample Num" },
    { field: "Time_Stamp", headerName: "Time Stamp" },
    { field: "Time_Per", headerName: "Time Per" },
    { field: "Temp", headerName: "Temp" },
    { field: "Gain", headerName: "Gain" },
    { field: "Int_Time", headerName: "Int Time" },
    { field: "Allowable_Dev", headerName: "Allowable Dev" },

    { field: "Raw_Used_Vio", headerName: "Raw Used Vio" },
    {
      field: "Raw_Values_Vio_450nm",
      headerName: "Raw Values Vio 450nm",
    },
    {
      field: "Raw_Selected_Vio_450nm",
      headerName: "Raw Selected Vio 450nm",
    },
    { field: "Raw_Avg_Vio_450nm", headerName: "Raw Avg Vio 450nm" },
    { field: "Raw_StdDev_Vio", headerName: "Raw StdDev Vio" },
    { field: "Cal_Used_Vio", headerName: "Cal used Vio" },
    {
      field: "Cal_Values_Vio_450nm",
      headerName: "Cal Values Vio 450nm",
    },
    {
      field: "Cal_Selected_Vio_450nm",
      headerName: "Cal Selected Vio 450nm",
    },
    { field: "Cal_Avg_Vio_450nm", headerName: "Cal Avg Vio 450nm" },
    { field: "Cal_StdDev_Vio", headerName: "Cal StdDev Vio" },

    { field: "Raw_Used_Blu", headerName: "Raw Used Blu" },
    {
      field: "Raw_Values_Blu_500nm",
      headerName: "Raw Values Blu 500nm",
    },
    {
      field: "Raw_Selected_Blu_500nm",
      headerName: "Raw Selected Blu 500nm",
    },
    { field: "Raw_Avg_Blu_500nm", headerName: "Raw Avg Blu 500nm" },
    { field: "Raw_StdDev_Blu", headerName: "Raw StdDev Blu" },
    { field: "Cal_Used_Blu", headerName: "Cal used Blu" },
    {
      field: "Cal_Values_Blu_500nm",
      headerName: "Cal Values Blu 500nm",
    },
    {
      field: "Cal_Selected_Blu_500nm",
      headerName: "Cal Selected Blu 500nm",
    },
    { field: "Cal_Avg_Blu_500nm", headerName: "Cal Avg Blu 500nm" },
    { field: "Cal_StdDev_Blu", headerName: "Cal StdDev Blu" },

    { field: "Raw_Used_Grn", headerName: "Raw Used Grn" },
    {
      field: "Raw_Values_Grn_550nm",
      headerName: "Raw Values Grn 550nm",
    },
    {
      field: "Raw_Selected_Grn_550nm",
      headerName: "Raw Selected Grn 550nm",
    },
    { field: "Raw_Avg_Grn_550nm", headerName: "Raw Avg Grn 550nm" },
    { field: "Raw_StdDev_Grn", headerName: "Raw StdDev Grn" },
    { field: "Cal_Used_Grn", headerName: "Cal used Grn" },
    {
      field: "Cal_Values_Grn_550nm",
      headerName: "Cal Values Grn 550nm",
    },
    {
      field: "Cal_Selected_Grn_550nm",
      headerName: "Cal Selected Grn 550nm",
    },
    { field: "Cal_Avg_Grn_550nm", headerName: "Cal Avg Grn 550nm" },
    { field: "Cal_StdDev_Grn", headerName: "Cal StdDev Grn" },

    { field: "Raw_Used_Yel", headerName: "Raw Used Yel" },
    {
      field: "Raw_Values_Yel_570nm",
      headerName: "Raw Values Yel 570nm",
    },
    {
      field: "Raw_Selected_Yel_570nm",
      headerName: "Raw Selected Yel 570nm",
    },
    { field: "Raw_Avg_Yel_570nm", headerName: "Raw Avg Yel 570nm" },
    { field: "Raw_StdDev_Yel", headerName: "Raw StdDev Yel" },
    { field: "Cal_Used_Yel", headerName: "Cal used Yel" },
    {
      field: "Cal_Values_Yel_570nm",
      headerName: "Cal Values Yel 570nm",
    },
    {
      field: "Cal_Selected_Yel_570nm",
      headerName: "Cal Selected Yel 570nm",
    },
    { field: "Cal_Avg_Yel_570nm", headerName: "Cal Avg Yel 570nm" },
    { field: "Cal_StdDev_Yel", headerName: "Cal StdDev Yel" },

    { field: "Raw_Used_Org", headerName: "Raw Used Org" },
    {
      field: "Raw_Values_Org_600nm",
      headerName: "Raw Values Org 600nm",
    },
    {
      field: "Raw_Selected_Org_600nm",
      headerName: "Raw Selected Org 600nm",
    },
    { field: "Raw_Avg_Org_600nm", headerName: "Raw Avg Org 600nm" },
    { field: "Raw_StdDev_Org", headerName: "Raw StdDev Org" },
    { field: "Cal_Used_Org", headerName: "Cal used Org" },
    {
      field: "Cal_Values_Org_600nm",
      headerName: "Cal Values Org 600nm",
    },
    {
      field: "Cal_Selected_Org_600nm",
      headerName: "Cal Selected Org 600nm",
    },
    { field: "Cal_Avg_Org_600nm", headerName: "Cal Avg Org 600nm" },
    { field: "Cal_StdDev_Org", headerName: "Cal StdDev Org" },

    { field: "Raw_Used_Red", headerName: "Raw Used Red" },
    {
      field: "Raw_Values_Red_650nm",
      headerName: "Raw Values Red 650nm",
    },
    {
      field: "Raw_Selected_Red_650nm",
      headerName: "Raw Selected Red 650nm",
    },
    { field: "Raw_Avg_Red_650nm", headerName: "Raw Avg Red 650nm" },
    { field: "Raw_StdDev_Red", headerName: "Raw StdDev Red" },
    { field: "Cal_Used_Red", headerName: "Cal used Red" },
    {
      field: "Cal_Values_Red_650nm",
      headerName: "Cal Values Red 650nm",
    },
    {
      field: "Cal_Selected_Red_650nm",
      headerName: "Cal Selected Red 650nm",
    },
    { field: "Cal_Avg_Red_650nm", headerName: "Cal Avg Red 650nm" },
    { field: "Cal_StdDev_Red", headerName: "Cal StdDev Red" },
  ];

  return (
    <div
      style={{
        marginTop: "60px",
        height: "65vh",
        // maxWidth: "62vw",
      }}
      className="self-align-center"
    >
      {/* {rows && (
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={() => Math.random().toString(16).substr(2, 8)}
          disableSelectionOnClick
        />
      )} */}

      {rows && (
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={() => Math.random().toString(16).substr(2, 8)}
          columnBuffer={5}
          headerHeight={50}
          rowHeight={40}
          components={{
            Header: ({ column }) => (
              <div style={{ minWidth: column.width }}>{column.headerName}</div>
            ),
          }}
        />
      )}
    </div>
  );
};

export default DataTable;

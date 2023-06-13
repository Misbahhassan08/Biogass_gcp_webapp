import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button, Table } from "react-bootstrap";
import TableRows from "./modules/TableRows";
import CSVRows from "./modules/csvRows";
import { baseApiUrl } from "../../../../config";

function BuildReportGrid() {
  const get_csv_list_endpoint = baseApiUrl + "/api/get_list_of_csv";
  const post_metaData_endpoint =baseApiUrl + "/api/get_meta_data";
  const [rowsData, setRowsData] = useState([]);
  const [csvRowsData, setCsvRowsData] = useState();

  // ------------------------------------------------------ POSTING DATA FROM HERE --------------------------------------
  function checkData() {
    fetch(post_metaData_endpoint, {
      method: "POST",
      body: JSON.stringify({
        filedire: ".2023",
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        let newdata = data["result"];
        console.log(newdata);
        setRowsData(newdata);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    //mqtt.requestData('biogas/client/request/database/csvtbl/data', JSON.stringify({data:"misbah"}))
    document.title = "Build Report";
    fetch(get_csv_list_endpoint)
      .then((res) => res.json())
      .then((data) => {
        let newdata = data["result"];
        console.log(newdata);
        setCsvRowsData(newdata);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="layout-right-side justify-content-center">
        <div>
          <Container>
            <Card className="text-center border-0 ">
              <Card.Body>
                {" "}
                <Card.Title className="text-green text-center justify-content-center text-uppercase font-38">
                  Graph Report
                </Card.Title>
                <Card.Text className="mx-auto mb-4" style={{ width: "40rem" }}>
                  Get Multiple Sensor Data With Normalized Data
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>

          <Container>
            <Row>
              <Col>
                <div className="table-responsive">
                  <Table className="reports-tab">
                    <thead>
                      <tr className="one">
                        <th>Machine Id</th>
                        <th>RPI Id</th>
                        <th>CSV File Id</th>
                        <th>Path</th>
                        <th>Reports</th>
                      </tr>
                    </thead>

                    <tbody>
                      {csvRowsData && (
                        <CSVRows rowsData={csvRowsData} checkData={checkData} />
                      )}
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
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
                        <th>DataID</th>
                        <th>CSVID</th>
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

                        <th>Raw_Used_Yel</th>
                        <th>Raw_Values_Yel_570nm</th>
                        <th>Raw_Selected_Yel_570nm</th>
                        <th>Raw_Avg_Yel_570nm</th>
                        <th>Raw_StdDev_Yel_570nm</th>
                        <th>Call_Used_Yel</th>
                        <th>Call_Values_Yel_570nm</th>
                        <th>Cal_Selected_Yel_570nm</th>
                        <th>Cal_Avg_Yel_570nm</th>
                        <th>Cal_StdDev_Yel_570nm'</th>

                        <th>Raw_Used_Org</th>
                        <th>Raw_Values_Org_600nm</th>
                        <th>Raw_Selected_Org_600nm</th>
                        <th>Raw_Avg_Org_600nm</th>
                        <th>Raw_StdDev_Org_600nm</th>
                        <th>Call_Used_Org</th>
                        <th>Call_Values_Org_600nm</th>
                        <th>Cal_Selected_Org_600nm</th>
                        <th>Cal_Avg_Org_600nm</th>
                        <th>Cal_StdDev_Org_600nm'</th>

                        <th>Raw_Used_Red</th>
                        <th>Raw_Values_Red_650nm</th>
                        <th>Raw_Selected_Red_650nm</th>
                        <th>Raw_Avg_Red_650nm</th>
                        <th>Raw_StdDev_Red_650nm</th>
                        <th>Call_Used_Red</th>
                        <th>Call_Values_Red_650nm</th>
                        <th>Cal_Selected_Red_650nm</th>
                        <th>Cal_Avg_Red_650nm</th>
                        <th>Cal_StdDev_Red_650nm'</th>
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
      </div>
    </>
  );
}

export default BuildReportGrid;

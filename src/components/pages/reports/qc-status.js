import React, {  useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,Table
}from "react-bootstrap";

function Qcstatus() {
    useEffect(() => {
      document.title = "Qcstatus";
    }, []);
  
   
    return (
      <>
        <div className="layout-right-side Qcstatus">
          <Container>
           
  
           
  <Table className="reports-tab mt-4">
                    <tr className="one">
                    <th >QC Type</th>
                    <th>Details</th>
                    <th>Last 
                    Completed</th>
                    <th>Next Due</th>
                    <th>Report</th>
                  </tr>
                  
                
                <tr className="two">
                <td>Daily QC </td>
                <td>Temp, CO2 log </td>
                <td>01/01/2023; 
                10:10</td>
                <td>Auto
                01/02/2023; 10:10</td>
                <td><Link
                to={`${process.env.PUBLIC_URL}/reports/qc-reports`} className="report-info-btn px-4 py-2 rounded-pill "
              >View</Link></td>
                </tr>
                <tr className="three">
                <td>Weekly 
                Strain QC
                </td>
                <td>Strain tested: 
                49226</td>
                <td>12/30/2022
                13:05</td>
                <td>In 3 days
                01/06/2023
                </td>
                <td><Link
                to={`${process.env.PUBLIC_URL}/reports/qc-reports`} className="report-info-btn px-4 py-2 rounded-pill "
              >View</Link></td>
                </tr>
                <tr className="three">
                <td>Monthly 
                QC
                </td>
                <td>Clean/Saniti
                ze</td>
                <td>12/30/2022
                13:05
                </td>
                <td>In 27 days
                </td>
                <td><Link
                to={`${process.env.PUBLIC_URL}/reports/qc-reports`} className="report-info-btn px-4 py-2 rounded-pill "
              >View</Link></td>
                </tr>
                <tr className="three">
                <td>Annual 
                QC
                
                </td>
                <td>Service</td>
                <td>12/30/2022 </td>
                <td>12/30/2023
                </td>
                <td><Link
                to={`${process.env.PUBLIC_URL}/reports/qc-reports`} className="report-info-btn px-4 py-2 rounded-pill "
              >View</Link></td>
                </tr>
                    </Table>
          </Container>
        </div>
      </>
    );
  }
  
  export default Qcstatus;
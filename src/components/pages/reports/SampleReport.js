import React from "react";
import { Card, Container, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';

function ReportsSample() {
  return (
    <>
    <div className="layout-right-side">
      <Container className="">
        <Row className="justify-content-md-center align-items-center sample-reports">
          <Card.Title className="mt-2 text-light-blue main-title mb-3 text-uppercase ">Sample Reports</Card.Title>
          <div>
            <Table responsive="sm" className="table-sample">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Size</th>
                  <th>Last Modified</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="border-0">
                <tr>
                  <td>1</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td className="icons-td"><span className="circle"><IoIcons.IoIosEye className="bg-white border-gray border-radius-50 table-icons " /></span><span className="circle"><FaIcons.FaEdit className="color-yellow bg-white border-gray border-radius-50 table-icons" /></span><span className="circle dwnld-circle"><IoIcons.IoIosDownload className="border-radius-50 bg-green dwnld table-icons " /></span><span className="circle"><IoIcons.IoIosClose className="border-gray table-icons  bg-white border-radius-50 close" /></span></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td className="icons-td"><span className="circle"><IoIcons.IoIosEye className="bg-white border-gray border-radius-50 table-icons " /></span><span className="circle"><FaIcons.FaEdit className="color-yellow bg-white border-gray border-radius-50 table-icons" /></span><span className="circle dwnld-circle"><IoIcons.IoIosDownload className="border-radius-50 bg-green dwnld table-icons " /></span><span className="circle"><IoIcons.IoIosClose className="border-gray table-icons  bg-white border-radius-50 close" /></span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td className="icons-td"><span className="circle"><IoIcons.IoIosEye className="bg-white border-gray border-radius-50 table-icons " /></span><span className="circle"><FaIcons.FaEdit className="color-yellow bg-white border-gray border-radius-50 table-icons" /></span><span className="circle dwnld-circle"><IoIcons.IoIosDownload className="border-radius-50 bg-green dwnld table-icons " /></span><span className="circle"><IoIcons.IoIosClose className="border-gray table-icons  bg-white border-radius-50 close" /></span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td className="icons-td"><span className="circle"><IoIcons.IoIosEye className="bg-white border-gray border-radius-50 table-icons " /></span><span className="circle"><FaIcons.FaEdit className="color-yellow bg-white border-gray border-radius-50 table-icons" /></span><span className="circle dwnld-circle"><IoIcons.IoIosDownload className="border-radius-50 bg-green dwnld table-icons " /></span><span className="circle"><IoIcons.IoIosClose className="border-gray table-icons  bg-white border-radius-50 close" /></span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td className="icons-td"><span className="circle"><IoIcons.IoIosEye className="bg-white border-gray border-radius-50 table-icons " /></span><span className="circle"><FaIcons.FaEdit className="color-yellow bg-white border-gray border-radius-50 table-icons" /></span><span className="circle dwnld-circle"><IoIcons.IoIosDownload className="border-radius-50 bg-green dwnld table-icons " /></span><span className="circle"><IoIcons.IoIosClose className="border-gray table-icons  bg-white border-radius-50 close" /></span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td className="icons-td"><span className="circle"><IoIcons.IoIosEye className="bg-white border-gray border-radius-50 table-icons " /></span><span className="circle"><FaIcons.FaEdit className="color-yellow bg-white border-gray border-radius-50 table-icons" /></span><span className="circle dwnld-circle"><IoIcons.IoIosDownload className="border-radius-50 bg-green dwnld table-icons " /></span><span className="circle"><IoIcons.IoIosClose className="border-gray table-icons  bg-white border-radius-50 close" /></span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td className="icons-td"><span className="circle"><IoIcons.IoIosEye className="bg-white border-gray border-radius-50 table-icons " /></span><span className="circle"><FaIcons.FaEdit className="color-yellow bg-white border-gray border-radius-50 table-icons" /></span><span className="circle dwnld-circle"><IoIcons.IoIosDownload className="border-radius-50 bg-green dwnld table-icons " /></span><span className="circle"><IoIcons.IoIosClose className="border-gray table-icons  bg-white border-radius-50 close" /></span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td className="icons-td"><span className="circle"><IoIcons.IoIosEye className="bg-white border-gray border-radius-50 table-icons " /></span><span className="circle"><FaIcons.FaEdit className="color-yellow bg-white border-gray border-radius-50 table-icons" /></span><span className="circle dwnld-circle"><IoIcons.IoIosDownload className="border-radius-50 bg-green dwnld table-icons " /></span><span className="circle"><IoIcons.IoIosClose className="border-gray table-icons  bg-white border-radius-50 close" /></span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td className="icons-td"><span className="circle"><IoIcons.IoIosEye className="bg-white border-gray border-radius-50 table-icons " /></span><span className="circle"><FaIcons.FaEdit className="color-yellow bg-white border-gray border-radius-50 table-icons" /></span><span className="circle dwnld-circle"><IoIcons.IoIosDownload className="border-radius-50 bg-green dwnld table-icons " /></span><span className="circle"><IoIcons.IoIosClose className="border-gray table-icons  bg-white border-radius-50 close" /></span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td className="icons-td"><span className="circle"><IoIcons.IoIosEye className="bg-white border-gray border-radius-50 table-icons " /></span><span className="circle"><FaIcons.FaEdit className="color-yellow bg-white border-gray border-radius-50 table-icons" /></span><span className="circle dwnld-circle"><IoIcons.IoIosDownload className="border-radius-50 bg-green dwnld table-icons " /></span><span className="circle"><IoIcons.IoIosClose className="border-gray table-icons  bg-white border-radius-50 close" /></span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td className="icons-td"><span className="circle"><IoIcons.IoIosEye className="bg-white border-gray border-radius-50 table-icons " /></span><span className="circle"><FaIcons.FaEdit className="color-yellow bg-white border-gray border-radius-50 table-icons" /></span><span className="circle dwnld-circle"><IoIcons.IoIosDownload className="border-radius-50 bg-green dwnld table-icons " /></span><span className="circle"><IoIcons.IoIosClose className="border-gray table-icons  bg-white border-radius-50 close" /></span></td>
                </tr>
              </tbody>
            </Table>

          </div>
        </Row>
      </Container>
      </div>
    </>
  )
}

export default ReportsSample;
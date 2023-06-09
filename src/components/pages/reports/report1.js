import React, { useEffect } from "react";
import { Card,  Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Label } from 'recharts';


function ReportOne() {
  useEffect(() => {
    document.title = "Report Info";
  }, []);

  const data = [
    {
      name: '0.00000',
      uv: 0,
      pv: 0,
      rv: 0,
      gv: 0,
      bv: 0,
      dv: 0,
    },
    {
      name: '0.50000',
      uv: 0,
      pv: -0.002,
      rv: -0.005,
      gv: -0.009,
      bv: 0,
      dv: -0.009,
    },
    {
      name: '1.00000',
      uv: 0.003,
      pv: 0.005,
      rv: -0.002,
      gv: -0.004,
      bv: 0.002,
      dv: -0.004,
    },
    {
      name: '1.50000',
      uv: 0.003,
      pv: 0.007,
      rv: -0.004,
      gv: -0.006,
      bv: 0.002,
      dv: -0.006,
    },
    {
      name: '2.00000',
      uv: 0.004,
      pv: 0.007,
      rv: -0.002,
      gv: -0.005,
      bv: 0.003,
      dv: -0.005,
    },
    {
      name: '2.50000',
      uv: 0.014,
      pv: 0.018,
      rv: 0.005,
      gv: -0.001,
      bv: 0.013,
      dv: -0.003,
    },
    {
      name: '3.00000',
      uv: 0.025,
      pv: 0.025,
      rv: 0.012,
      gv: 0.005,
      bv: 0.025,
      dv: 0.004,
    }
  ];


  const data1 = [
    {
      name: 1,
      uv: 5,
      pv: 0.1,
      rv: 0.6,
      gv: 0.1,
      bv: 0.3,
      dv: 0.6,
    },
    {
      name: 1,
      uv: 0,
      pv: 0,
      rv: 0,
      gv: 0,
      bv: 0,
      dv: 0,
    },
    {
      name: 2,
      uv: 0,
      pv: 0.2,
      rv: 0.2,
      gv: 0.2,
      bv: 0.2,
      dv: 0.2,
    },
    {
      name: 3,
      uv: 0.3,
      pv: 0.3,
      rv: 0.3,
      gv: 0.3,
      bv: 0.3,
      dv: 0.3,
    },
    {
      name: 4,
      uv: 0.5,
      pv: 0.5,
      rv: 0.5,
      gv: 0.5,
      bv: 0.5,
      dv: 0.5,
    },
    {
      name: 5,
      uv: 0.6,
      pv: 0.6,
      rv: 0.6,
      gv: 0.6,
      bv: 0.6,
      dv: 0.6,
    },
    {
      name: 6,
      uv: 0.8,
      pv: 0.8,
      rv: 0.8,
      gv: 0.8,
      bv: 0.8,
      dv: 0.8,
    },
    {
      name: 7,
      uv: 1.8,
      pv: 1.6,
      rv: 2.4,
      gv: 2.3,
      bv: 2.2,
      dv: 1.7,
    },
    {
      name: 8,
      uv: 2.2,
      pv: 7.2,
      rv: 6.2,
      gv: 5.2,
      bv: 3.2,
      dv: 4.2,
    },
    {
      name: 9,
      uv: 6.2,
      pv: 6.4,
      rv: 8.2,
      gv: 8.4,
      bv: 9.2,
      dv: 9.4,
    },
    {
      name: 10,
      uv: 6.2,
      pv: 6.4,
      rv: 8.2,
      gv: 8.4,
      bv: 9.2,
      dv: 9.4,
    }
  ];


  const data2 = [
    {
      name: 1,
      uv: 1,
      pv: 1,
      rv: 1,
      gv: 1,
      bv: 1,
      dv: 1,
    },
    {
      name: 2,
      uv: 1,
      pv: 1.2,
      rv: 1,
      gv: 1.2,
      bv: 1,
      dv: 0.9,
    },
    {
      name: 3,
      uv: 1.2,
      pv: 1.5,
      rv: 1,
      gv: 1.5,
      bv: 1.3,
      dv: 1.2,
    },
    {
      name: 4,
      uv: 1.9,
      pv: 2.5,
      rv: 1.4,
      gv: 3.8,
      bv: 2.3,
      dv: 2.2,
    },
    {
      name: 5,
      uv: 2.5,
      pv: 4.5,
      rv: 2,
      gv: 5.2,
      bv: 4.3,
      dv: 4.2,
    },
    {
      name: 6,
      uv: 3,
      pv: 5.4,
      rv: 2.3,
      gv: 7.2,
      bv: 5.2,
      dv: 5.1,
    },
    {
      name: 7,
      uv: 3.3,
      pv: 6,
      rv: 2.5,
      gv: 8.4,
      bv: 5.8,
      dv: 5.6,
    },
    {
      name: 8,
      uv: 3.6,
      pv: 6.1,
      rv: 2.7,
      gv: 9,
      bv: 5.9,
      dv: 5.7,
    },
    {
      name: 9,
      uv: 3.8,
      pv: 6.4,
      rv: 2.8,
      gv: 9.3,
      bv: 6,
      dv: 5.7,
    },
    {
      name: 10,
      uv: 3.8,
      pv: 6.4,
      rv: 2.8,
      gv: 9.4,
      bv: 6,
      dv: 5.7,
    }
  ];




  const data3 = [
    {
      name: 1,
      uv: 1,
      pv: 1,
      rv: 1,
      gv: 1,
      bv: 1,
      dv: 1,
    },
    {
      name: 2,
      uv: 1,
      pv: 1.2,
      rv: 1,
      gv: 1.2,
      bv: 1,
      dv: 0.9,
    },
    {
      name: 3,
      uv: 1.2,
      pv: 1.5,
      rv: 1,
      gv: 1.5,
      bv: 1.3,
      dv: 1.2,
    },
    {
      name: 4,
      uv: 1.9,
      pv: 2.5,
      rv: 1.4,
      gv: 3.8,
      bv: 2.3,
      dv: 2.2,
    },
    {
      name: 5,
      uv: 2.5,
      pv: 4.5,
      rv: 2,
      gv: 5.2,
      bv: 4.3,
      dv: 4.2,
    },
    {
      name: 6,
      uv: 3,
      pv: 5.4,
      rv: 2.3,
      gv: 7.2,
      bv: 5.2,
      dv: 5.1,
    },
    {
      name: 7,
      uv: 3.3,
      pv: 6,
      rv: 2.5,
      gv: 8.4,
      bv: 5.8,
      dv: 5.6,
    },
    {
      name: 8,
      uv: 3.6,
      pv: 6.1,
      rv: 2.7,
      gv: 9,
      bv: 5.9,
      dv: 5.7,
    },
    {
      name: 9,
      uv: 3.8,
      pv: 6.4,
      rv: 2.8,
      gv: 9.3,
      bv: 6,
      dv: 5.7,
    },
    {
      name: 10,
      uv: 3.8,
      pv: 6.4,
      rv: 2.8,
      gv: 9.4,
      bv: 6,
      dv: 5.7,
    }
  ];



  const data4 = [
    {
      name: 1,
      uv: 1,
      pv: 1,
      rv: 1,
      gv: 1,
      bv: 1,
      dv: 1,
    },
    {
      name: 2,
      uv: 1,
      pv: 1.2,
      rv: 1,
      gv: 1.2,
      bv: 1,
      dv: 0.9,
    },
    {
      name: 3,
      uv: 1.2,
      pv: 1.5,
      rv: 1,
      gv: 1.5,
      bv: 1.3,
      dv: 1.2,
    },
    {
      name: 4,
      uv: 1.9,
      pv: 2.5,
      rv: 1.4,
      gv: 3.8,
      bv: 2.3,
      dv: 2.2,
    },
    {
      name: 5,
      uv: 2.5,
      pv: 4.5,
      rv: 2,
      gv: 5.2,
      bv: 4.3,
      dv: 4.2,
    },
    {
      name: 6,
      uv: 3,
      pv: 5.4,
      rv: 2.3,
      gv: 7.2,
      bv: 5.2,
      dv: 5.1,
    },
    {
      name: 7,
      uv: 3.3,
      pv: 6,
      rv: 2.5,
      gv: 8.4,
      bv: 5.8,
      dv: 5.6,
    },
    {
      name: 8,
      uv: 3.6,
      pv: 6.1,
      rv: 2.7,
      gv: 9,
      bv: 5.9,
      dv: 5.7,
    },
    {
      name: 9,
      uv: 3.8,
      pv: 6.4,
      rv: 2.8,
      gv: 9.3,
      bv: 6,
      dv: 5.7,
    },
    {
      name: 10,
      uv: 3.8,
      pv: 6.4,
      rv: 2.8,
      gv: 9.4,
      bv: 6,
      dv: 5.7,
    }
  ];


  const data5 = [
    {
      name: 1,
      uv: 0,
      pv: 0,
      rv: 0,
      gv: 0,
      bv: 0,
      dv: 0,
    },
    {
      name: 2,
      uv: 0,
      pv: 0.2,
      rv: 0.2,
      gv: 0.2,
      bv: 0.2,
      dv: 0.2,
    },
    {
      name: 3,
      uv: 0.3,
      pv: 0.3,
      rv: 0.3,
      gv: 0.3,
      bv: 0.3,
      dv: 0.3,
    },
    {
      name: 4,
      uv: 0.5,
      pv: 0.5,
      rv: 0.5,
      gv: 0.5,
      bv: 0.5,
      dv: 0.5,
    },
    {
      name: 5,
      uv: 0.6,
      pv: 0.6,
      rv: 0.6,
      gv: 0.6,
      bv: 0.6,
      dv: 0.6,
    },
    {
      name: 6,
      uv: 0.8,
      pv: 0.8,
      rv: 0.8,
      gv: 0.8,
      bv: 0.8,
      dv: 0.8,
    },
    {
      name: 7,
      uv: 1.8,
      pv: 1.6,
      rv: 2.4,
      gv: 2.3,
      bv: 2.2,
      dv: 1.7,
    },
    {
      name: 8,
      uv: 2.2,
      pv: 7.2,
      rv: 6.2,
      gv: 5.2,
      bv: 3.2,
      dv: 4.2,
    },
    {
      name: 9,
      uv: 6.2,
      pv: 6.4,
      rv: 8.2,
      gv: 8.4,
      bv: 9.2,
      dv: 9.4,
    },
    {
      name: 10,
      uv: 6.2,
      pv: 6.4,
      rv: 8.2,
      gv: 8.4,
      bv: 9.2,
      dv: 9.4,
    }
  ];

  return (
    <>
      <div className="layout-right-side reports-graph">
        <Container className="text-center">
          <Row className="home-card mt-0">
          <Row className="report-attr">
          <h3 className="text-light-blue main-title card-title text-left">This is one report</h3>
          <Link to={`${process.env.PUBLIC_URL}/reports/reportsattribute`} className="report-info-btn px-4 py-2 rounded-pill ">Change Attributes</Link>
          </Row>
          <Col>
              <Card className="3 border-0">
                <Card.Body className="mobile-padding-0">
                <Row className="graph-row">
                <Col>
                <LineChart width={400} height={300} data={data1} margin={{top: 5,right: 30,left: 20,bottom: 5,}}>
                  <CartesianGrid strokeDasharray="0 3 " />
                  <XAxis interval="preserveStart" tickLine={false} />
                  <YAxis interval="preserveStart" tickLine={false} />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#6f2fa4" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="uv" stroke="#FFFF00" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="rv" stroke="#FF0000" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="gv" stroke="#359834" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="bv" stroke="#0370c0" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="dv" stroke="#ffbc04" activeDot={{ r: 8 }} />
                </LineChart>
                </Col>
                <Col>
                <LineChart width={400} height={300} data={data2}>
                  <CartesianGrid />
                  <XAxis interval="preserveStart" tickLine={false} />
                  <YAxis interval="preserveStart" tickLine={false} />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#6f2fa4" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="uv" stroke="#FFFF00" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="rv" stroke="#FF0000" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="gv" stroke="#359834" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="bv" stroke="#0370c0" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="dv" stroke="#ffbc04" activeDot={{ r: 8 }} />
                </LineChart>
                </Col>
                
                <Col>
                <LineChart width={400} height={300} data={data3}>
                  <CartesianGrid />
                  <XAxis interval="preserveStart" tickLine={false} />
                  <YAxis interval="preserveStart" tickLine={false} />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#6f2fa4" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="uv" stroke="#FFFF00" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="rv" stroke="#FF0000" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="gv" stroke="#359834" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="bv" stroke="#0370c0" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="dv" stroke="#ffbc04" activeDot={{ r: 8 }} />
                </LineChart>
                </Col>



                <Col>
                <LineChart width={400} height={300} data={data4}>
                  <CartesianGrid />
                  <XAxis interval="preserveStart" tickLine={false} />
                  <YAxis interval="preserveStart" tickLine={false} />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#6f2fa4" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="uv" stroke="#FFFF00" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="rv" stroke="#FF0000" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="gv" stroke="#359834" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="bv" stroke="#0370c0" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="dv" stroke="#ffbc04" activeDot={{ r: 8 }} />
                </LineChart>
                </Col>


                <Col>
                <LineChart width={400} height={300} data={data5}>
                  <CartesianGrid />
                  <XAxis interval="preserveStart" tickLine={false} />
                  <YAxis interval="preserveStart" tickLine={false} />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#6f2fa4" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="uv" stroke="#FFFF00" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="rv" stroke="#FF0000" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="gv" stroke="#359834" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="bv" stroke="#0370c0" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="dv" stroke="#ffbc04" activeDot={{ r: 8 }} />
                </LineChart>
                </Col>
                </Row>
                <div className="wavelength-color">
                <LineChart width={600} height={400} data={data}>
                  <CartesianGrid />
                  <XAxis dataKey="name" interval="preserveStart">
                    <Label value="Time (brs)" offset={0} position="insideBottom" />
                  </XAxis>
                  <YAxis interval="preserveStart" label={{ value: 'Normalized Data', angle: -90, position: 'insideLeft' }} />
              
                  <Line type="monotone" dataKey="pv" stroke="#6f2fa4" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="uv" stroke="#FFFF00" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="rv" stroke="#FF0000" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="gv" stroke="#359834" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="bv" stroke="#0370c0" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="dv" stroke="#ffbc04" activeDot={{ r: 8 }} />
                </LineChart>
                </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ReportOne;
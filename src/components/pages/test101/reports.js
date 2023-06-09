import React, { useEffect } from "react";
import { Card,  Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Label } from 'recharts';


function ReportOne() {
  useEffect(() => {
    document.title = "Sensor Analytics";
  }, []);

  const data= [
    {
      name: '1.0',
      uv: 0,
      pv: 0,
      rv: 0,
      gv: 0,
      bv: 0,
      dv: 0,
    },
    {
      name: '2.0',
      uv: 0,
      pv: -0.002,
      rv: -0.005,
      gv: -0.009,
      bv: 0,
      dv: -0.009,
    },
    {
      name: '3.0',
      uv: 0.003,
      pv: 0.005,
      rv: -0.002,
      gv: -0.004,
      bv: 0.002,
      dv: -0.004,
    },
    {
      name: '4.0',
      uv: 0.003,
      pv: 0.007,
      rv: -0.004,
      gv: -0.006,
      bv: 0.002,
      dv: -0.006,
    },
    {
      name: '5.0',
      uv: 0.004,
      pv: 0.007,
      rv: -0.002,
      gv: -0.005,
      bv: 0.003,
      dv: -0.005,
    },
    {
      name: '6.0',
      uv: 0.014,
      pv: 0.018,
      rv: 0.005,
      gv: -0.001,
      bv: 0.013,
      dv: -0.003,
    },
    
  ];


  return (
    <>
      <div className="layout-right-side reports-graph">
        <Container className="text-center">
          <Row className="home-card mt-0">
          <Row className="report-attr">
          <h3 className="text-light-blue main-title card-title text-left">Sensor 0 Results</h3>
          </Row>
          <Col>
              <Card className="3 border-0">
                <Card.Body className="mobile-padding-0">
                <Row className="graph-row">
                </Row>
                <div className="">
                <LineChart width={1200} height={400} data={data}>
                  <CartesianGrid />
                  <XAxis dataKey="name" interval="preserveStart">
                    <Label value="Time" offset={-10} position="insideBottom" />
                  </XAxis>
                  <YAxis interval="preserveStart" label={{ value: 'Values', angle: 90, position: 'insideLeft' }} />
              
                  <Line type="monotone" dataKey="pv" stroke="#6f2fa4" strokeWidth="2" activeDot={{ r: 10} }  />
                  <Line type="monotone" dataKey="uv" stroke="#FFFF00" strokeWidth="2" activeDot={{ r: 10 }} />
                  <Line type="monotone" dataKey="rv" stroke="#FF0000" strokeWidth="2" activeDot={{ r: 10 }} />
                  <Line type="monotone" dataKey="gv" stroke="#359834" strokeWidth="2" activeDot={{ r: 10 }} />
                  <Line type="monotone" dataKey="bv" stroke="#0370c0" strokeWidth="2" activeDot={{ r: 10 }} />
                  <Line type="monotone" dataKey="dv" stroke="#ffbc04" strokeWidth="2" activeDot={{ r: 10 }} />
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
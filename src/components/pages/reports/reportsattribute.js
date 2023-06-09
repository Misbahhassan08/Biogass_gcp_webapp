import React, { useEffect } from "react";
import {} from "react-router-dom";
import {   Row, Col, Container,Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import Table from "react-bootstrap/Table";

function ReportsAttribute() {
  useEffect(() => {
    document.title = "Report Info";
  }, []);

  return (
    <>
      <div className="layout-right-side reports-attrtab-cstm">
        <Container className="text-center">
          <Row className="home-card mt-0">
            <Col>
              
                <h3 className="text-light-blue main-title card-title text-left">Format Graph</h3>
                <h4  className=" text-left mt-3">Change scale: </h4>
                </Col>
                <Col className="padding-0">
                <div className="table-responsive">
                <Table bordered className="axis-table">
                <thead>
                <tr>
                <th className="text-center"></th>
                <th colspan="2" className="text-center">X-axis</th>
                
                <th colspan="2" className="text-center">Y-axis</th>
               
              </tr>
                <tr>
                  <th className="text-center"></th>
                  <th className="text-center">Min</th>
                  <th className="text-center">Max</th>
                  <th className="text-center">Min</th>
                  <th className="text-center">Max</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-light"><InputGroup className="mb-3 checkbox">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" label="Checkbox"/><label>A1</label>
                </InputGroup></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                </tr>
                <tr>
                  <td className="text-light"><InputGroup className="mb-3 checkbox">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" label="Checkbox"/><label>A2</label>
                </InputGroup></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                </tr>
                <tr>
                  <td className="text-light"><InputGroup className="mb-3 checkbox">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" label="Checkbox"/><label>A3</label>
                </InputGroup></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                </tr>
                <tr>
                  <td className="text-light"><InputGroup className="mb-3 checkbox">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" label="Checkbox"/><label>A4</label>
                </InputGroup></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                </tr>
                <tr>
                  <td className="text-light"><InputGroup className="mb-3 checkbox">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" label="Checkbox"/><label>A5</label>
                </InputGroup></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                </tr>
                <tr>
                  <td className="text-light"><InputGroup className="mb-3 checkbox">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" label="Checkbox"/><label>A6</label>
                </InputGroup></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                </tr>
                <tr>
                  <td className="text-light"><InputGroup className="mb-3 checkbox">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" label="Checkbox"/><label>A7</label>
                </InputGroup></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                </tr>
                <tr>
                  <td className="text-light"><InputGroup className="mb-3 checkbox">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" label="Checkbox"/><label>A8</label>
                </InputGroup></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                </tr>
                <tr>
                  <td className="text-light"><InputGroup className="mb-3 checkbox">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" label="Checkbox"/><label>A9</label>
                </InputGroup></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                <td><Form.Control type="Number" placeholder="" /></td>
                </tr>
                <tr>
                  <td className="text-light"><InputGroup className="mb-3 checkbox">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" label="Checkbox"/><label>A10</label>
                </InputGroup></td>
                  <td><Form.Control type="Number" placeholder="" /></td>
                  <td><Form.Control type="Number" placeholder="" /></td>
                  <td><Form.Control type="Number" placeholder="" /></td>
                  <td><Form.Control type="Number" placeholder="" /></td>
                </tr>
              </tbody>
                </Table>
                </div>
                </Col>
                </Row>
                <Row className="select-box-row mt-4">
                <Col>
                <h4  className=" text-left mt-3">Data Type: </h4>
                <Form.Select aria-label="Default select example">
      <option>Data</option>
      <option value="1">Raw data</option>
      <option value="2">Calibrated</option>
      <option value="3">Normalized</option>
    </Form.Select>
                </Col>
                <Col>
                <h4  className=" text-left mt-3">Pick wavelength for consolidation </h4>
                <Form.Select aria-label="Default select example">
      <option>Wavelength</option>
      <option value="1">Violet</option>
      <option value="2">Blue</option>
      <option value="3">Green</option>
      <option value="1">Red</option>
      <option value="2">Yellow</option>
      <option value="3">Orange</option>
    </Form.Select>
                </Col>
                </Row>
                
        </Container>
      </div>
    </>
  );
}

export default ReportsAttribute;

import React from "react";
import { Row, Col, Form } from "react-bootstrap";

function FormFields() {
  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Group>
              {/* <Form.Label>Sample Strain </Form.Label> */}
              <Form.Control
                type="text"
                id="initialPlateCount"
                aria-describedby="initialPlateCount"
                className="mt-1"
                placeholder="Initial Plate Count"
                required
              />
            </Form.Group>
          </Col>
          <Col>

          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default FormFields;

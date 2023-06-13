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
                id="sampleStrain"
                aria-describedby="Sample Strain"
                className="mt-1"
                placeholder="Sample Strain"
                required
              />
            </Form.Group>
            <Form.Group>
              {/* <Form.Label>Medium </Form.Label> */}
              <Form.Control
                type="text"
                id="medium"
                aria-describedby="medium"
                className="mt-1"
                placeholder="Medium"
                required
              />
            </Form.Group>
            <Form.Group>
              {/* <Form.Label>Initial OD </Form.Label> */}
              <Form.Control
                type="text"
                id="initialOd"
                aria-describedby="InitialOd"
                className="mt-1"
                placeholder="Initial OD"
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              {/* <Form.Label>Smaple Text </Form.Label> */}
              <Form.Control
                type="text"
                id="sampleText"
                aria-describedby="sampleText"
                className="mt-1"
                placeholder="Sample Text"
                required
              />
            </Form.Group>
            <Form.Group>
              {/* <Form.Label>Free Text </Form.Label> */}
              <Form.Control
                type="text"
                id="freeText"
                aria-describedby="freeText"
                className="mt-1"
                placeholder="Free Text"
                required
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default FormFields;

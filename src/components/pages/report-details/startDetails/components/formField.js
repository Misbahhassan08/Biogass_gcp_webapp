import React, { useEffect, useState } from "react";
import { Row, Col, Form, } from "react-bootstrap";

function FormFields(props) {
  const [sampleStrain, setSampleStrain] = useState("");
  const [medium, setMedium] = useState("");
  const [initialOd, setInitialOd] = useState("");
  const [sampleText, setSampleText] = useState("");
  const [freeText, setFreeText] = useState("");

  // const sampleStrain = document.getElementById("sampleStrain").value;
  // const medium = document.getElementById("medium").value;
  // const initialOd = document.getElementById("initialOd").value;
  // const sampleText = document.getElementById("sampleText").value;
  // const freeText = document.getElementById("freeText").value;

  const fieldJSON = {
    sampleStrain: sampleStrain,
    medium: medium,
    initialOd: initialOd,
    sampleText: sampleText,
    freeText: freeText,
  };

  useEffect(() => {
    if (props.getJson) {
      props.getFields(fieldJSON);
    }
    props.stopJson();
    // console.log(fieldJSON, "this is field JSON");
  }, [props.getJson]);
  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Group>
              {/* <Form.Label>Sample Strain </Form.Label> */}
              <Form.Control
                type="text"
                // id="sampleStrain"
                aria-describedby="Sample Strain"
                className="mt-1"
                placeholder="Sample Strain"
                required
              >
                <input id="sampleStrain" aria-describedby="my-helper-text" />
              </Form.Control>
            </Form.Group>
            <Form.Group>
              {/* <Form.Label>Medium </Form.Label> */}
              <Form.Control
                type="text"
                // id="medium"
                aria-describedby="medium"
                className="mt-1"
                placeholder="Medium"
                required
              >
                <input  id="medium" aria-describedby="my-helper-text" />
              </Form.Control>
            </Form.Group>
            <Form.Group>
              {/* <Form.Label>Initial OD </Form.Label> */}
              <Form.Control
                type="text"
                // id="initialOd"
                aria-describedby="InitialOd"
                className="mt-1"
                placeholder="Initial OD"
                required
              > 
              <input id="initialOd" aria-describedby="my-helper-text" />
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              {/* <Form.Label>Smaple Text </Form.Label> */}
              <Form.Control
                type="text"
                // id="sampleText"
                aria-describedby="sampleText"
                className="mt-1"
                placeholder="Sample Text"
                required
              >
                <input id="sampleText" aria-describedby="my-helper-text" />
              </Form.Control>
            </Form.Group>
            <Form.Group>
              {/* <Form.Label>Free Text </Form.Label> */}
              <Form.Control
                type="text"
                // id="freeText"
                aria-describedby="freeText"
                className="mt-1"
                placeholder="Free Text"
                required
              >
                <input id="freeText" aria-describedby="my-helper-text" />
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default FormFields;

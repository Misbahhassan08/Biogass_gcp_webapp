import React,{useState} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import FormFields from "./components/formField";
import Table from "./components/table";

function SampleConcentrationDetails() {
  const [fields, setFields] = useState();
  const [table, setTable] = useState();
  const [getJson, setGetJson] = useState(false)

  function getFieldsJSon(value) {
    setFields(value);
    console.log(value, "this is json");
  }
  function getTableJSon(value) {
    setTable(value);
    console.log(value, "this is json");
  }

  function getAllJson() {
    setGetJson(true);
  }
  function setJsonFalse(){
    setGetJson(false)
  }

  function displayJson() {
   const finalJson = {
      fields,
      table
    }
  }

  return (
    <div className="layout-right-side cassette-load">
      <h2 class="main-title text-center mb-4 text-light-blue">
        Enter Sample and concentration details
      </h2>
      <Container>
        <FormFields getFields={getFieldsJSon} getJson={getJson} stopJson={setJsonFalse}/>
        <Row>
          <Table getTable={getTableJSon} getJson={getJson} stopJson={setJsonFalse}/>
        </Row>
        <Row>
        <Col className="text-center mt-4">
          <Button
              type="submit"
              className="mx-2 menu-btn menu-btn2"
              onClick={()=>{
                getAllJson();
                displayJson()
              }}
            >
              Save
            </Button>
        </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SampleConcentrationDetails;

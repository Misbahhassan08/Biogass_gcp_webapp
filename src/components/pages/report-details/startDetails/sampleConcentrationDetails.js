import React from "react";
import { Container, Row } from "react-bootstrap";
import FormFields from "./components/formField";
import Table from "./components/table";

function SampleConcentrationDetails() {
  return (
    <div className="layout-right-side cassette-load">
      <h2 class="main-title text-center mb-4 text-light-blue">
        Enter Sample and concentration details
      </h2>
      <Container>
        <FormFields />
        <Row>
          <Table />
        </Row>
      </Container>
    </div>
  );
}

export default SampleConcentrationDetails;

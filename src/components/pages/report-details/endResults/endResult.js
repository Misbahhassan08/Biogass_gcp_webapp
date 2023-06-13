import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import FormFields from "./components/formField";
import Table from "./components/table";

function EndResultDetails() {
  return (
    <div className="layout-right-side cassette-load">
      <h2 class="main-title text-center mb-4 text-light-blue">
        Enter End results and observations
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

export default EndResultDetails;

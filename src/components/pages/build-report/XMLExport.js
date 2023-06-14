import React from 'react';
import { Container,Row, Col, Button } from "react-bootstrap";
import exportFromJSON from "export-from-json";
import PropTypes      from "prop-types";

export default function XMLExport(props) {

  function onClick() {
    console.log("Props Data : "+JSON.stringify(props.data));
    const data = props.data;
    const fileName = props.fileName ? props.fileName : "exported";
    let fields = props.fields ? props.fields : [];  //empty list means "use all"
    const exportType = 'xml';
    exportFromJSON({data, fileName, fields, exportType})
  }

  return (
    <Button onClick={onClick}>
      Export XML
    </Button>
  )

}

XMLExport.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  tooltip: PropTypes.string,
  fileName: PropTypes.string,
  fields: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object
  ]),
}
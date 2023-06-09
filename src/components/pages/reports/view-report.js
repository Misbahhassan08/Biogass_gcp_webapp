import React, {  useEffect } from "react";
import {
  Container
}from "react-bootstrap";

function Viewreport() {
    useEffect(() => {
      document.title = "Viewreport";
    }, []);
  
   
    return (
      <>
        <div className="layout-right-side Viewreport ">
          <Container>     
 
  
          </Container>
        </div>
      </>
    );
  }
  
  export default Viewreport;
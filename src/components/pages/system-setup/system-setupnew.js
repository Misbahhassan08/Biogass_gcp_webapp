import React, {  useEffect } from "react";
import 'react-calendar/dist/Calendar.css';
import {
  Container,Row,Col,Card
  
} from "react-bootstrap";

function Systmsetup() {
  useEffect(() => {
    document.title = "Qcreports";
  }, []);

  return (
    <>
      <div className="layout-right-side systmsetup">
        <Container>
         

          <Row className=" mx-auto">
            <Col  className="p-0">
              <Card >
                <Card.Body >
                <div className="list-item1 p-5">
              
        <ul className="py-0 px-3 mt-3">
          <li className="mb-2"> Forms and role relations/connect to FTP?
          </li>
          <li className="mb-2">IT settings
          </li>
          <li className="mb-2">Alerts – visual/sound – framework/interrupt etc?</li>
          <li className="mb-2">Backup?</li>
          <li className="mb-2">Expert rules?</li>
          <li className="mb-2">QC/Archive frequency </li>
          <li className="mb-2">Auto-report and email after verifying alert isolates to send to CDC and Sent sites
          Personnel/Roles/Admin</li>
          <li className="mb-2">Back-up power supply?</li>
        </ul>
       
        
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

export default Systmsetup;

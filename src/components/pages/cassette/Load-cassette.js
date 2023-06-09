import React,{useEffect} from "react";
import { Card,  Row, Col, Container} from "react-bootstrap";
import Table from "react-bootstrap/Table";
function Load(){
    useEffect(() => {
        document.title = "Cassette Load"
     }, []);

     return (
        <>
          <div className="layout-right-side reports-table-cstm table">
            <Container className="text-center">
              <Row className="home-card column mt-0">
                <Col>
                  <Card className="border-0">
                    <Card.Body className="mobile-padding-0">
                    <h2 class="main-title text-center mb-4 text-light-blue">Load Cassette</h2>
                    <h2 class="main-title text-left mt-2 mb-2 text-light-blue">Sample Strain: <input aria-describedby="CassetteBarcodeHelpBlock" type="text" id="inputCassetteBarcode" class="mt-1 form-control control1"></input></h2>
                    <div className="table-responsive">
                      <Table className="reports-tab load">
                      <tr className="one">
                      <th ></th>
                      <th>1</th>
                      <th>2</th>
                      <th>3</th>
                      <th>4</th>
                      <th>5</th>
                      <th>6</th>
                      <th>7</th>
                      <th>8</th>
                      <th>9</th>
                      <th>10</th>
                    </tr>
                    
                  
                  <tr className="two">
                  <th>A</th>
                  <td>Tet-0.25</td>
                  <td>Tet-0.5</td>
                  <td>Tet-1</td>
                  <td>Azi-0.25</td>
                  <td>Azi-0.5</td>
                  <td>Azi-1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  
                  </tr>
                  <tr className="three">
                  <th>B</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  </tr>
                  <tr className="Four">
                  <th>C</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  </tr>
                      </Table>
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
    
export default Load;
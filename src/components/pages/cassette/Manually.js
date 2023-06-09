import React,{useState,useEffect} from "react";
import {} from "react-router-dom"
import { Button,Container,Row,Col,Card,Form,CardGroup} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import * as FaIcons from 'react-icons/fa';

function CassetteManually(){
  useEffect(() => {
      document.title = "Cassette Enter Manually"
    },  []); 

    const [setShow] = useState(false);

    const handleShow = () => setShow(true);

    return (
        <>
        <div className="layout-right-side reports-table-cstm table">
        <Container>
         
        <h2 className="main-title text-center mt-3 mb-3 text-light-blue">Load Cassette</h2>
            
        <Row className="home-card mx-auto">
            <Col>
                <Card onClick={handleShow}>
                    <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    <h2 class="main-title text-left mt-2 mb-2 text-light-blue">Sample Strain: <input aria-describedby="CassetteBarcodeHelpBlock" type="text" id="inputCassetteBarcode" class="mt-1 form-control control1"></input></h2>
                    <CardGroup>
                    <Card className="cardcomplete1">
                    <form className="list-item1 items">
                
                   
                    <div className="table-responsive reports-tab load table">
                    <Table striped bordered hover >
      <thead>
        <tr>
          <th className="text-light"></th>
          <th className="text-light">1</th>
          <th className="text-light">2</th>
          <th className="text-light">3</th>
          <th className="text-light">4</th>
          <th className="text-light">5</th>
          <th className="text-light">6</th>
          <th className="text-light">7</th>
          <th className="text-light">8</th>
          <th className="text-light">9</th>
          <th className="text-light">10</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
        <th className="text-light">A</th>
          <td><Form.Control type="text"  placeholder="" /></td>
          <td><Form.Control type="text"  placeholder="" /></td>
          <td><Form.Control type="text"  placeholder="" /></td>
          <td><Form.Control type="text"  placeholder="" /></td>
          <td><Form.Control type="text"  placeholder="" /></td>
          <td><Form.Control type="text"  placeholder="" /></td>
          <td><Form.Control type="text" placeholder="" /></td>
          <td><Form.Control type="text" placeholder="" /></td>
          <td><Form.Control type="text" placeholder="" /></td>
          <td><Form.Control type="text" placeholder="" /></td>
          
          
        </tr>
        <tr>
          <th className="text-light">B</th>
          <td><Form.Control type="text" placeholder="" /></td>
          <td><Form.Control type="text" placeholder="" /></td>
          <td><Form.Control type="text" placeholder="" /></td>
          <td><Form.Control type="text" placeholder="" /></td>
          <td><Form.Control type="text" placeholder="" /></td>
          <td><Form.Control type="text" placeholder="" /></td>
          <td><Form.Control type="text" placeholder="" /></td>
          <td><Form.Control type="text" placeholder="" /></td>
          <td><Form.Control type="text" placeholder="" /></td>
          <td><Form.Control type="text" placeholder="" /></td>
        </tr>
        <tr>
          <th className="text-light">C</th>
          <td><Form.Control type="text" placeholder="" /></td>
          <td><Form.Control type="text" placeholder="" /></td>
          <td><Form.Control type="text" placeholder="" /></td>
          <td><Form.Control type="text" placeholder="" /></td>
          <td><Form.Control type="text" placeholder="" /></td>
          <td><Form.Control type="text" placeholder="" /></td>
          <td><Form.Control type="text" placeholder="" /></td>
          <td><Form.Control type="text" placeholder="" /></td>
          <td><Form.Control type="text" placeholder="" /></td>
          <td><Form.Control type="text" placeholder="" /></td>
        </tr>
        
      </tbody>
    </Table>
    </div>
              
                  </form>
      </Card>
     
    </CardGroup>
    
    
                   
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>

            
            </Container>
            </div>
            </>
            )
        }
export default CassetteManually;
import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom"
import { Card,Form,Row,Col,Button,Container } from 'react-bootstrap';
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';

function Cassette(){
    useEffect(() => {
        document.title = "Cassette"
     }, []);

     const [fields, setFields] = useState([{ value: null }]);
     const [fieldstwo, setFieldsTwo] = useState([{ value: null }]);
     const [ffield, setffield] = useState("");
     const [sfield, setsfield] = useState("");
     const [filled, setfilled] = useState(false);

     function handleAdd(which){
        if(which === 'first'){
            const values = [...fields];
            values.push({ value: null });
            setFields(values);
        }else{
            const values = [...fieldstwo];
            values.push({ value: null });
            setFieldsTwo(values);           
        }
    }

    

     function handleRemove(i,which){
        if(which === 'first'){
            const values = [...fields];
            values.splice(i, 1);
            setFields(values);
        }else{
            const values = [...fieldstwo];
            values.splice(i, 1);
            setFieldsTwo(values);
        }
     }
    
     const handleChange = (event) => {
        setffield(event.target.value);
    };

    const handleChange1 = (event) => {
        setsfield(event.target.value);
        if(ffield.length > 0 && sfield.length > 0){
            setfilled(true);
        }
    };


    return (
        <>
       
        <div className="layout-right-side cassette-load">
            <Container>
                <Row className="home-card mt-0">
                <h2 class="main-title text-center mb-4 text-light-blue">Load Cassette</h2>
                <Col>
                        <Card className="border-0">
                            <Card.Body className="mobile-padding-0">
                                <Card.Title className="mt-0 text-light-blue main-title">SCAN SAMPLE BARCODE</Card.Title>
                            <div className="d-flex">
                            <div className="scan-code">
                                
                                {fieldstwo.map((field, idx) => {
                                    return (
                                        <div key={`${field}-${idx}`} className="cassette-barcode-input mt-5">
                                            <Form.Control
                                                type="text"
                                                id="inputCassetteBarcode"
                                                aria-describedby="CassetteBarcodeHelpBlock"
                                                className="mt-1"
                                            
                                            />
                                            <Button variant="warning" type="submit" className="mt-4 input-btn">
                                            Clear
                                    </Button>
                                            
                                        
                                            {idx === 0 ? '' : <p onClick={() => handleRemove(idx,'second')}><IoIcons.IoIosClose /></p>}
                                            
                                        </div>
                                        
                                    )
                                })}
                                <div className="add-more-barcode mt-0" onClick={() => handleAdd('second')}><IoIcons.IoMdAddCircleOutline className="color-yellow" /><p className="bold-corbel text-dark mb-0">Scan Another Barcode</p></div>

                               
                                </div>
                                <div class="isolate">
                                <Form.Label htmlFor="inputCassetteBarcode" className="mt-4 mb-4">Isolate #</Form.Label>
                               <div className="d-flex">
                              <Form.Select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </Form.Select>
                              <Form.Control type="text" placeholder="Free text ABC/ Rerun
                              " />
                              </div>
                                </div>
                                </div>

                               

                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0">
                            <Card.Body className="mobile-padding-0">
                                <Card.Title className="mt-0 text-light-blue main-title">CASSETTE</Card.Title>

                               
                                {fields.map((field, idx) => {
                                    return (
                                    <div key={`${field}-${idx}`} className="cassette-barcode-input">
                                    <h2>A</h2> <Form.Control
                                            type="text"
                                            id="inputCassetteBarcode"
                                            aria-describedby="CassetteBarcodeHelpBlock"
                                            className="mt-1"
                                            onChange={handleChange}
                                            value={ffield}
                                            
                                        /><Button variant="warning" type="submit" className="mt-4 input-btn btn-done" disabled={!filled} >
                                        Done
                                </Button>
                                        
                                        {idx === 0 ? '' : <p onClick={() => handleRemove(idx,'first')}><IoIcons.IoIosClose /></p>}
                                    </div>
                                    )
                                })}
                                {fields.map((field, idx) => {
                                    return (
                                    <div key={`${field}-${idx}`} className="cassette-barcode-input">
                                        <h2>B</h2><Form.Control
                                            type="text"
                                            id="inputCassetteBarcode"
                                            aria-describedby="CassetteBarcodeHelpBlock"
                                            className="mt-1"
                                            onChange={handleChange1}
                                            value={sfield}
                                            
                                        /><Button variant="warning" type="submit" className="mt-4 input-btn">
                                        Clear
                                </Button>
                                        
                                        {idx === 0 ? '' : <p onClick={() => handleRemove(idx,'first')}><IoIcons.IoIosClose /></p>}
                                    </div>
                                    )
                                })}

                                <div className="add-more-barcode mt-4 border-top border-dark py-3"><Link to={`${process.env.PUBLIC_URL}/cassette/manually`}><FaIcons.FaEdit className="color-yellow" /><p className="mb-0 bold-corbel text-dark">Scanner not working, Enter manually</p></Link></div>

                               

                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
                <div className="text-center">
                    <Button variant="primary" type="submit" className="mt-4 mobile">
                        <Link to={`${process.env.PUBLIC_URL}/cassette/batch-entry`}>Batch Entry</Link>
                    </Button>
                </div>
            </Container>
            </div>
        </>
    )
}

export default Cassette;
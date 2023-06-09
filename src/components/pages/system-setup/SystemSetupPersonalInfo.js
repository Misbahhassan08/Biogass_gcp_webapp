import React, { useEffect } from "react"
import { Container, Row, Button, Image } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import Media from '../../../assets/index';

function SystemSetupPInfo() {
    useEffect(() => {
        document.title = "System Setup - Personal Info"
    }, []);

    return (
        <>
        <div className="layout-right-side">
            <Container className="">
                <Row className="justify-content-md-center align-items-center system-info">

                    <div>
                        <Table responsive="sm" className="table-info">
                            <thead>
                                <tr>
                                    <th><Image className="me-2" src={Media.SystemSetupIp.one} rounded />IP Address</th>
                                    <th><Image className="me-2" src={Media.SystemSetupIp.two} rounded />Lab Location</th>
                                    <th><Image className="me-2" src={Media.SystemSetupIp.three} rounded />Firewall</th>
                                </tr>
                            </thead>
                            <tbody className="border-0">
                                <tr>
                                    <td>00.00.00.00</td>
                                    <td>1505 Edgemont St. (1st Floor)</td>
                                    <td><Button variant="warning" type="submit" className=""> Get Access</Button></td>
                                </tr>
                                <tr>
                                    <td>00.00.00.00</td>
                                    <td>1505 Edgemont St. (1st Floor)</td>
                                    <td><Button variant="warning" type="submit" className=""> Get Access</Button></td>
                                </tr>
                                <tr>
                                    <td>00.00.00.00</td>
                                    <td>1505 Edgemont St. (1st Floor)</td>
                                    <td><Button variant="warning" type="submit" className=""> Get Access</Button></td>
                                </tr>
                                <tr>
                                    <td>00.00.00.00</td>
                                    <td>1505 Edgemont St. (1st Floor)</td>
                                    <td><Button variant="warning" type="submit" className=""> Get Access</Button></td>
                                </tr>
                                <tr>
                                    <td>00.00.00.00</td>
                                    <td>1505 Edgemont St. (1st Floor)</td>
                                    <td><Button variant="warning" type="submit" className=""> Get Access</Button></td>
                                </tr>

                            </tbody>
                        </Table>

                    </div>
                </Row>
            </Container>
            </div>
        </>
    )
}

export default SystemSetupPInfo;
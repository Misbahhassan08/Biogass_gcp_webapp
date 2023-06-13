import React from "react";
import {Link} from "react-router-dom"
import { Container } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
function Announcment(){

    return (
        <>
           <div className ="topbar py-2 px-5">
           <Container fluid>
           <div className="d-flex justify-content-between">
           <div className="left-btns">
                <Link to="/about" className =" text-uppercase semibold-corbel">About</Link>
                <Link to="/faq" className ="text-uppercase semibold-corbel">FAQ</Link>
                <Link  className ="text-uppercase semibold-corbel">V 1.7 R2</Link>
           </div>
           <div className="mail-link ml-auto">
           <Link to="mailto:someone@example.com" className="nav-item nav-link p-0 me-4 text-dark"><FaIcons.FaEnvelope className="mail-icon" />example@email.com</Link>
           </div>
           </div>
           </Container>
           </div>
        </>
    )
}

export default Announcment;
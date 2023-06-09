import React from "react";
import { Container } from 'react-bootstrap';

function NoMatch(){

    return (
        <>
        <div className="layout-right-side">
        <Container>
            <h2 className="main-title text-center mb-5 text-light-blue">Sorry No Page Found!</h2>
            </Container>
            </div>
        </>
    )
}

export default NoMatch;
import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"
import { Card,Container,Row,Form,Button } from 'react-bootstrap'
import { baseApiUrl } from "../../config";
import { fetchPostReq } from "../../services/restService";
const check_login_endpoint = baseApiUrl + "/api/check_login";
function Login(){
    //
    //

    let navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        document.title = "Acenxion | Lab Login"
        const dataFetch = async () => {
            const data = await (
              await fetch(check_login_endpoint)).json();
            setData(data);
            
          };
          dataFetch();
    }, []);

    
     
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        const myresult = false;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{
            let _uname = document.getElementById("uname").value;
            let _pass = document.getElementById("inputPinPassword").value;
            //pass: "acxbio"
            //uname: "acenxion"
        if (_uname === data["uname"]){
            if (_pass === data["pass"]){
                navigate(process.env.PUBLIC_URL+'/readerstatus');
            }
        }
        
        }
        
        setValidated(true);
    };

    return (
        <>
        <div className="layout-right-side">
        <Container>
        <Row className="justify-content-md-center align-items-center manually-card">
        <Card style={{ width: '40rem' }}>
            <Card.Body>
                <Card.Title className="mt-2 text-light-blue main-title mb-4 text-uppercase justify-content-center login-title">LAB LOG IN </Card.Title>
                
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Control
                            type="text"
                            id="uname"
                            aria-describedby="usernameHelpBlock"
                            className="mt-3"
                            placeholder="Username"
                            required
                    />   
                    <Form.Control
                            type="password"
                            id="inputPinPassword"
                            aria-describedby="PinPasswordHelpBlock"
                            className="mt-3"
                            placeholder="Password"
                            required
                    />                                               
                <div class="d-flex mx-auto justify-content-center">  
               
                <Button  type="submit" className="mt-2 d-flex justify-content-center cancel-btn ">Cancel
                </Button>
                <Button type="submit" variant="warning" className="mt-2 d-flex justify-content-center  mx-2">Ok
                </Button>
                </div>  
                </Form> 
            </Card.Body>
        </Card>
    </Row>
            </Container>
            </div>
        </>
    )
}

export default Login;
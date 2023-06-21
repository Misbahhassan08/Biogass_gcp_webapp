import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Container, Row, Form, Button } from "react-bootstrap";
import { fetchGetReq } from "../../services/restService";
import { baseApiUrl } from "../../config";

function Login() {
  const apiUrl = baseApiUrl + "/api/check_login";

  const [validated, setValidated] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    document.title = "Acenxion | Lab Login";
  }, []);

  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      //   setValidated(true);
      return;
    }

    const response = await fetchGetReq(apiUrl);

    if (response.uname === userName && response.pass === password) {
      localStorage.setItem("isLoggedIn", true);
      navigate(process.env.PUBLIC_URL + "/readerstatus");
    } else {
      localStorage.setItem("isLoggedIn", false);
      console.warn("Invalid username or password");
    }
  };

  return (
    <>
      <div className="layout-right-side">
        <Container>
          <Row className="justify-content-md-center align-items-center manually-card">
            <Card style={{ width: "40rem" }}>
              <Card.Body>
                <Card.Title className="mt-2 text-light-blue main-title mb-4 text-uppercase justify-content-center login-title">
                  LAB LOG IN
                </Card.Title>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Control
                    type="text"
                    id="uname"
                    aria-describedby="usernameHelpBlock"
                    className="mt-3"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                  <Form.Control
                    type="password"
                    id="inputPinPassword"
                    aria-describedby="PinPasswordHelpBlock"
                    className="mt-3"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className="d-flex mx-auto justify-content-center">
                    <Button
                      type="submit"
                      className="mt-2 d-flex justify-content-center cancel-btn"
                      onClick={()=>{
                        setUserName("")
                        setPassword("")
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="warning"
                      className="mt-2 d-flex justify-content-center  mx-2"
                    >
                      Ok
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Login;

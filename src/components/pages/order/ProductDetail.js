import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Carousel, Form, Button, ListGroup } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import OrderData from "./OrderData"
import * as IoIcons from 'react-icons/io';


function ProductDetail() {
  useEffect(() => {
    document.title = "Order Detail"
  }, []);

  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  }
  let handleChange = (e) => {
    setNum(e.target.value);
  }

  const { productSlug } = useParams()
  const thisProduct = OrderData.find(prod => prod.slug === productSlug)

  return (
    <>
    <div className="layout-right-side">
      <Container>

        <Row className="singleproduct">

          <Col className="px-6 col-lg-6 left-col" >

            <Carousel variant="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={thisProduct.featured}
                  alt="First slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={thisProduct.featured}
                  alt="Second slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={thisProduct.featured}
                  alt="Third slide"
                />

              </Carousel.Item>
            </Carousel>

          </Col>
          <Col className="px-6 col-lg-6" >
            <Card className=" border-0">
              <Card.Body className=" py-0">
                <Card.Title className="text-green  text-uppercase ">Order {thisProduct.title}</Card.Title>
                <Form.Group className="mb-3 mt-4">
                  <Form.Label>Cassette Type*</Form.Label>
                  <Form.Select >
                    <option>Choose an option</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 mt-4">
                  <Form.Label>Quantity*</Form.Label>
                  <Row className="d-flex quantity">
                    <Button type="button" onClick={incNum} className="increase">+</Button>
                    <input
                      type="number"
                      className="form-control"
                      name="someName"
                      value={num} onChange={handleChange}
                    />
                    <Button type="button" onClick={decNum} className="decrease">-</Button>
                  </Row>
                </Form.Group>


                <Row className="button-row border-bottom pb-4 ">
                  <Button variant="warning" type="submit" className="">
                    Buy Now
                  </Button>
                  <Button variant="warning bg-dark text-white mx-2" type="submit" className="">
                    Cancel
                  </Button>
                </Row>
                <div className="purchase mt-0 pt-4" ><IoIcons.IoIosInformationCircleOutline className="color-yellow" /><p className="bold-corbel text-dark mb-0">Purchase order information</p></div>
                <ListGroup>
                  <ListGroup.Item className="border-0 px-0 pb-0 "><IoIcons.IoIosCheckmarkCircle />Will we already know location, shipping and billing information or do we need to collect it?​</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>


          </Col>

        </Row>
      </Container>
      </div>
    </>
  )
}

export default ProductDetail;
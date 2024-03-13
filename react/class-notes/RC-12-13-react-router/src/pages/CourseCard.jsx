import React from 'react'
import data from "../data.js"
import { Container, Col, Card, Row, Button } from "react-bootstrap";
const CourseCard = () => {
  //!react-bootstrap ten CourseCard componenti
  //!
  return (
    <Container>
      <Row>
        {data.map(({ img, name, text, id }) => {
          return (
            <Col
              className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center"
              key={id}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                  <Button variant="info">Primary</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default CourseCard
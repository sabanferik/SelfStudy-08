import React from "react";
import { data } from "../helpers/data";
import { Col, Container, Form, Row } from "react-bootstrap";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  return (
    <div>
      <Form.Control type="search" placeholder="Search Player" />
      <Container>
        <Row>
          {data.map((player,index) => {
            return (
              <Col key={index}>
                {/* <PlayerCard player={player}> */}
                <PlayerCard {...player}></PlayerCard>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default CardContainer;

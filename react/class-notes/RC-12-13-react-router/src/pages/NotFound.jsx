import React from "react";
import { Container } from "react-bootstrap";
import notFound from "../img/notFound.jpeg";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  let navigate=useNavigate()
  return (
    <Container className="text-center">
      <img src={notFound} alt="" width="500px" />
      <div>
        <button className="btn btn-info" onClick={()=>navigate("/")}>GO HOME</button>
      </div>
    </Container>
  );
};

export default NotFound;

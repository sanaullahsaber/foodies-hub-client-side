import React, { useEffect, useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
import ChefsCard from "./ChefsCard";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://foodies-hub-server-sanaullahsaber.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <h1 className="text-center fw-bolder py-5">Our <span className="text-warning">Top</span> Chefs</h1>
      <Row>
        {chefs.map((chef) => (
          <Col md={4}>
            <ChefsCard key={chef.id} chef={chef} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Chefs;

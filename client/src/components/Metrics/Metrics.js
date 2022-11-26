import React from "react";
import "./Metrics.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Metrics = () => {
  return (
    <div className="metricsContainer">
      <div className="metricsWrapper">
        <h3>
          When we get to work we really make things happen fast and powerfully
        </h3>
        <span>
          I want to fly like an angel flare on a ten feet snare I want to dance
          until the sun comes up I want to fight your cousin.
        </span>
        <button className="metricsButton">Sign up</button>
      </div>

      <Container className="grid">
        <Row>
          <Col>
            <h1>32</h1>
            <h3>Cups of coffee</h3>
            <h5>Designing this section</h5>
          </Col>
          <Col>
            <h1>2,142</h1>
            <h3>Dollars spent today</h3>
            <h5>On khachpuri imerulli</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <h1>412</h1>
            <h3>Team members</h3>
            <h5>Working right now</h5>
          </Col>
          <Col>
            {" "}
            <h1>17</h1>
            <h3>Languages spoken</h3>
            <h5> On our table in the pub</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Metrics;

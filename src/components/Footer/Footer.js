/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  const creditStyle = {
    color: "#4a54f1",
    textAlign: "center",
    padding: 10
  };


  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <h1 className="title">Planetary Protection</h1>
          </Col>
          <Col md="3">

            <div style={creditStyle}>
              <h2 >Written By</h2>
                <h3>
                  <u><a href={"https://mhubs.github.io/"} target="_blank"  rel="noreferrer">Maxwell Hubbard</a></u>
                </h3>
            </div>
          </Col>
          <Col md="3">

            <div style={creditStyle}>
              <h2 >Website Template</h2>
              <h3>
                <u><a href={"https://www.creative-tim.com/templates/free"} target="_blank"  rel="noreferrer">Creative Tim</a></u>
              </h3>
            </div>
          </Col>
          <Col md="3">
            <div style={creditStyle}>
            <h2 >Learn More</h2>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-simple"
                color="default"
                href="https://nasa.gov"
                id="tooltip622135962"
                target="_blank"
              >
                  <p style={{color: "white", fontSize: "0.85vw", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>NASA</p>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                NASA
              </UncontrolledTooltip>

              <Button
                  className="btn-icon btn-neutral btn-simple"
                  color="default"
                  href="https://cosparhq.cnes.fr/"
                  id="tooltip622135963"
                  target="_blank"
              >
                <p style={{color: "white", fontSize: "0.65vw", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>COSPAR</p>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135963">
                COSPAR
              </UncontrolledTooltip>

              <Button
                  className="btn-icon btn-neutral btn-simple"
                  color="default"
                  href="https://www.esa.int/"
                  id="tooltip622135964"
                  target="_blank"
              >
                <p style={{color: "white", fontSize: "0.85vw", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>ESA</p>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135964">
                European Space Agency
              </UncontrolledTooltip>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

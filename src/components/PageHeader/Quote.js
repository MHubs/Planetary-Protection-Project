import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import Reference from "../Footer/Reference";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";

export default function Quote(props) {
    return (
        <div className="description">
            <Container>
                <blockquote>
                    <div className={"blockquote blockquote-info"}>
                        <Container>
                            <Row>
                                <Col>
                                    <p className={" description"} style={{color: "#67b2fa", fontSize: 20}}>
                                    {props.quote + " " }
                                    <Reference citeID={props.citeID} citation={props.citation} />
                                    </p>
                                </Col>
                            </Row>
                        </Container>

                            {props.speaker !== "" ? (<><br /> <small>- {props.speaker}</small></>) : <></>}

                    </div>
                </blockquote>
            </Container>
        </div>
    );
}



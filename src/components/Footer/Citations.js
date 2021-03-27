import React from "react";

// reactstrap components
import {Col, Container, Row} from "reactstrap";

export default class Citations extends React.Component {

    showRef(ref) {
        console.log(ref);
        let list = [];
        list.push(<p key={ref.citeID} className="text-primary">{ref.citeID} </p>);
        list.push(ref.citation);
        return list;
    }

    renderRefs() {
        return this.props.references.map((ref) => {
            return (
                <div key={ref.citeID} className="justify-content-center" style={{lineHeight: 1.35, marginLeft: "2em", textIndent: "-2em"}}>{ ref.citation }</div>
            );
        });
    }

    render() {

        return (
                <Container id="citations">
                    <h3 className="title">Citations</h3>
                    <div>
                        <Row className={"justify-content-center"}>
                            <Col md="12">
                                    {this.renderRefs()}

                            </Col>
                        </Row>
                    </div>
                </Container>
        );
    }
}



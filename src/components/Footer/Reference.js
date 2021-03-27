import React from "react";

// reactstrap components
import {UncontrolledTooltip} from "reactstrap";

export default class Reference extends React.Component {

    render() {

        let ref =
            (<a href={this.props.citation} target="_blank"  rel="noreferrer" id={"tooltip-" + this.props.citeID} className="text-primary" >
                <sup>
                    {" " + this.props.citeID + " "}
                </sup>
                <UncontrolledTooltip
                    delay={0}
                    placement="top"
                    target={"tooltip-" + this.props.citeID}
                >
                    {this.props.citation}
                </UncontrolledTooltip>
            </a>);

        let noRef =
            (<a href={"#citations"} id={"tooltip-" + this.props.citeID} className="text-primary" >
                <sup>
                    {" " + this.props.citeID + " "}
                </sup>
                <UncontrolledTooltip
                    delay={0}
                    placement="top"
                    target={"tooltip-" + this.props.citeID}
                >
                    {this.props.citation}
                </UncontrolledTooltip>
            </a>);

        return (
            this.props.noRef != null ? noRef : ref
        );
    }
}



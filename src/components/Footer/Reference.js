import React from "react";

// reactstrap components
import {UncontrolledTooltip} from "reactstrap";
import {HashLink} from "react-router-hash-link";

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
            (<a href='javascript:void(0)' id={"tooltip-" + this.props.citeID} className="text-primary" >
                <HashLink to={"/" + this.props.page + "#citations"} >
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
                </HashLink>
            </a>);

        return (
            this.props.noRef != null ? noRef : ref
        );
    }
}



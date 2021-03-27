import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Unity, { UnityContext } from "react-unity-webgl";

export default class BacteriaSimulation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progression: 0
        };

        this.unityContext = new UnityContext({
            codeUrl: process.env.PUBLIC_URL + "/Build/BacteriaSim/Bacteria Simulation HTML.wasm",
            frameworkUrl: process.env.PUBLIC_URL + "/Build/BacteriaSim/Bacteria Simulation HTML.framework.js",
            dataUrl: process.env.PUBLIC_URL + "/Build/BacteriaSim/Bacteria Simulation HTML.data",
            loaderUrl: process.env.PUBLIC_URL + "/Build/BacteriaSim/Bacteria Simulation HTML.loader.js",
        });

        // Create a new listener for our on loaded Event.
        // When the unity player is loaded, the event will
        // fire.

        this.unityContext.on("progress", progression => {

            // Now we can use the progression to for example
            // display it on our React app.

            this.setState({
                progression: progression
            });
        });
    }

    componentDidMount() {
        console.log("Component Mounted");
    }

    render() {

        // Finally render the Unity component and pass
        // the Unity context through the props. Along with
        // a text that shows wether the player is loading.

        return (
            <div className="section section-examples" data-background-color="black">
                <img
                    alt="..."
                    className="path"
                    src={require("assets/img/path1.png").default}
                />
                <Container>
                    <Row>
                        <Col sm="12">
                            <h2 className="title">Microbial Space Simulation</h2>
                            {this.state.progression !== 1 && <div>{`Loading ${this.state.progression * 100} percent...`}</div>}
                            <Unity unityContext={this.unityContext} width={"100%"} height={"auto"}/>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

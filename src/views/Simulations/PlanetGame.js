import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Unity, { UnityContext } from "react-unity-webgl";

export default class PlanetGame extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progression: 0
        };

        this.unityContext = new UnityContext({
            codeUrl: process.env.PUBLIC_URL + "/Build/Planet/HTML.wasm",
            frameworkUrl: process.env.PUBLIC_URL + "/Build/Planet/HTML.framework.js",
            dataUrl: process.env.PUBLIC_URL + "/Build/Planet/HTML.data",
            loaderUrl: process.env.PUBLIC_URL + "/Build/Planet/HTML.loader.js",
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

    render() {

        // Finally render the Unity component and pass
        // the Unity context through the props. Along with
        // a text that shows wether the player is loading.

        return (
            <div className="section section-examples" data-background-color="black">
                <img
                    alt="..."
                    className="path"
                    src={require("../../assets/img/path1.png").default}
                />
                <Container>
                    <Row>
                        <Col sm="12">
                            <h2 className="title">Planet Panic Game!</h2>
                            {this.state.progression !== 1 && <div>{`Loading ${this.state.progression * 100} percent...`}</div>}
                            <Unity unityContext={this.unityContext} width={"100%"} height={"auto"}/>
                            <h4 className={"description"}>
                                <b>Note:</b> This game is purely meant to start the conversation of planetary protections
                                for commercial entities. While models of rockets used by certain entities are used, this does not mean that
                                these companies do or do not follow planetary protection guidelines and this game does not insinuate either.
                                It should also be stated that for the purposes of this game, "space junk" created by the explosions of rockets
                                is not addressed and should be assumed that none is created in order to help promote the need to remove unused debris
                                orbiting Earth. All depictions are purely fictional and for entertainment purposes only.
                            </h4>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

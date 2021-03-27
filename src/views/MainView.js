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

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import PageHeader from "../components/PageHeader/PageHeader.js";
import Footer from "../components/Footer/Footer.js";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Row,
} from "reactstrap";
import {Link} from "react-router-dom";

// sections for this page/view


export default function MainView(props) {
    React.useEffect(() => {
        document.body.classList.toggle("index-page");
        document.body.classList.toggle("profile-page");
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("profile-page");
            document.body.classList.toggle("index-page");
        };
    },[]);

    return (
        <>
            <IndexNavbar  name={props.name}/>
            <div className="">
                <PageHeader scroll={"Explore"}/>
                <div className="wrapper" >
                    <div className="page-header">
                        <img
                            alt="..."
                            className="dots"
                            src={require("../assets/img/dots.png").default}
                        />
                        <img
                            alt="..."
                            className="path"
                            src={require("../assets/img/path4.png").default}
                        />
                        <Container className="align-items-center" id={"ScrollTo"}>
                            <Row>
                                <Col lg="6" md="6">
                                    <h1 className="profile-title text-left">What is Planetary Protection?</h1>
                                    <h5 className="text-on-back">01</h5>
                                </Col>
                                <Col className="ml-auto mr-auto" lg="6" md="6" >
                                    <Card className="card-coin card-plain" style={{justifyContent:"center", alignItems:"center", textAlign:"center"}}>
                                        <CardHeader>
                                            <img
                                                alt="JPL Cleanroom Workers"
                                                className="img-center img-fluid"
                                                style={{width:"80%", height:"auto"}}
                                                src={"https://mars.nasa.gov/imgs/2015/05/PIA04854-full2.jpg"}
                                            />
                                            Image: NASA JPL
                                            <h4 className="title">
                                                Explore in detail as planetary protection is discussed and defined. Determine why it is
                                                important and conduct tests to discover what Earth organisms can live beyond our planet.
                                            </h4>
                                        </CardHeader>
                                        <CardBody>
                                            <Button color="primary" tag={Link} to={"/what-is"}>
                                                Explore
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="section">
                        <Container>
                            <Row className="justify-content-between">
                                <Col md="6">
                                    <Card className="card-coin card-plain" style={{justifyContent:"center", alignItems:"center", textAlign:"center"}}>
                                        <CardHeader>
                                            <img
                                                alt="Mars Perseverance Rover"
                                                className="img-center img-fluid"
                                                style={{width:"80%", height:"auto"}}
                                                src={"https://mars.nasa.gov/layout/mars2020/images/PIA23764-RoverNamePlateonMars-web.jpg"}
                                            />
                                            Image: NASA
                                            <h4 className="title">
                                                Look back on the history of planetary protection. Discover the various policies and
                                                implementations leading up to today's standards. Test out these policies by
                                                cleaning and building a Mars rover!
                                            </h4>
                                        </CardHeader>
                                        <CardBody>
                                            <Button color="primary" tag={Link} to={"/previous-efforts"}>
                                                Explore
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="5">
                                    <h1 className="profile-title text-left">Previous Protection Efforts</h1>
                                    <h5 className="text-on-back">02</h5>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <section className="section">
                        <Container>
                            <Row>
                                <Col lg="6" md="6">
                                    <h1 className="profile-title text-left">Should We Be Concerned?</h1>
                                    <h5 className="text-on-back">03</h5>
                                </Col>
                                <Col className="ml-auto mr-auto" lg="6" md="6" >
                                    <Card className="card-coin card-plain" style={{justifyContent:"center", alignItems:"center", textAlign:"center"}}>
                                        <CardHeader>
                                            <img
                                                alt="Space Junk floating around Earth"
                                                className="img-center img-fluid"
                                                style={{width:"80%", height:"auto"}}
                                                src={"https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201706/MIT-Orbit-Debris_0.jpg?itok=is7Mk60S"}
                                            />
                                            Image: MIT News
                                            <h4 className="title">
                                                Have we already contaminated? Have our past missions already jeopardized future exploration?
                                                Discover the answers and more as you explore the surface of the Moon and find some of the things
                                                we've left there!
                                            </h4>
                                        </CardHeader>
                                        <CardBody>

                                            <Button color="primary">
                                                <Link to={"/concerned"} style={{color:"inherit"}}>
                                                Explore
                                                </Link>
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <div className="section">
                        <Container>
                            <Row className="justify-content-between">
                                <Col md="6">
                                    <Card className="card-coin card-plain" style={{justifyContent:"center", alignItems:"center", textAlign:"center"}}>
                                        <CardHeader>
                                            <img
                                                alt="Artists rendition of a lunar base"
                                                className="img-center img-fluid"
                                                style={{width:"80%", height:"auto"}}
                                                src={"https://specials-images.forbesimg.com/imageserve/5dfaae9325ab5d0007cec3e9/960x0.jpg?fit=scale"}
                                            />
                                            Image: Getty
                                            <h4 className="title">
                                                What does the New Space Age have in store for us? What must be updated in order to prevent
                                                contamination and environmental pollution of our solar system? Learn about what must be done
                                                to update planetary protection and defend our solar system from contamination!
                                            </h4>
                                        </CardHeader>
                                        <CardBody>
                                            <Button color="primary" tag={Link} to={"/future"}>
                                                Explore
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="5">
                                    <h1 className="profile-title text-left">The Future of Planetary Protection</h1>
                                    <h5 className="text-on-back">04</h5>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

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
import Quote from "../components/PageHeader/Quote.js"

// sections for this page/view
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane
} from "reactstrap";
import classnames from "classnames";
import Reference from "../components/Footer/Reference";
import Citations from "../components/Footer/Citations";
import MoonGame from "./Simulations/MoonGame";

import ReactPannellum from "react-pannellum";
import {HashLink} from "react-router-hash-link";
import {Link} from "react-router-dom";

export default function ConcernedView(props) {
    const [textTabs, setTextTabs] = React.useState(1);
    React.useEffect(() => {
        document.body.classList.toggle("index-page");
        document.body.classList.toggle("profile-page");
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("index-page");
            document.body.classList.toggle("profile-page");
        };
    }, []);
    const config = {
        autoLoad: true,
        hfov: 90,
        minPitch: -15,
        maxPitch: 15,
        mouseZoom: false,
        doubleClickZoom: false,
        keyboardZoom: false,
        showZoomCtrl: false,
    };
    return (
        <>
            <IndexNavbar name={props.name}/>
            <div className="wrapper">
                <PageHeader subtitle={""} title={"Should We Be Concerned?"} scroll={"Learn More"}/>
                <div className="section section-nucleo-icons" id={"ScrollTo"}>
                    <Container>
                        <span className={"description"}>
                        <Quote
                            quote={"\"We’ve reached a point where the collision rate between these larger objects, generating debris, is faster than it can be cleaned out by the natural environment.\""}
                            speaker={"Don Kessler, Former Chief Scientist at NASA"}
                            citeID={"1"}
                            citation={"https://www.huffpost.com/entry/space-junk-donald-kessler_n_3983899"}

                        />
                        </span>

                        <img
                            alt="..."
                            className="path"
                            style={{
                                left: "20%",
                                top: "50%",
                                width: "60%"
                            }}
                            src={require("../assets/img/path1.png").default}
                        />
                        <Row className="justify-content-center">
                            <Col lg="8" md="12">

                                <h1 className="title">Have We Already Contaminated?</h1>
                                <h2 className="title">Space Junk</h2>
                                <h4 className="description">
                                    Space junk is the term used to describe the over 500,000 pieces of debris that orbit
                                    the Earth.
                                    <Reference citeID={2}
                                               citation={"https://www.nasa.gov/mission_pages/station/news/orbital_debris.html"}/>
                                    Space agencies have to closely monitor the space junk that orbits Earth in order to
                                    protect the many satellites currently in use.
                                    The International Space Station has various protocols in the event of a possible
                                    collision, even including abandoning the station
                                    and taking the Russian Soyuz spacecraft back to Earth as a lifeboat.
                                    <Reference citeID={2}
                                               citation={"https://www.nasa.gov/mission_pages/station/news/orbital_debris.html"}/>
                                    <br/>
                                    <br/>
                                    While not entirely related to protecting Earth or other celestial bodies from
                                    harmful contamination, outer space is beginning
                                    to become polluted with abandoned satellites, old screws, and even launch vehicles.
                                    This will only increase as private companies
                                    begin to launch more items into space.
                                    <Reference citeID={3}
                                               citation={"https://hbr.org/2021/02/the-commercial-space-age-is-here"}/>
                                </h4>

                                <h2 className="title">What Did We Leave On The Moon?</h2>
                                <h4 className="description">
                                    Since the Soviet Union's Luna 2 became the first human-made object to reach the
                                    surface of the Moon,
                                    we have left hundreds of objects on the Moon.
                                    <Reference citeID={4}
                                               citation={"https://www.theatlantic.com/technology/archive/2012/12/the-trash-weve-left-on-the-moon/266465/"}/>
                                    Many of these objects have the potential to house bacterial life from Earth.
                                    Here are a few notable items left on the surface of the Moon.
                                    <br/>
                                    <br/>
                                </h4>
                                <Card>
                                    <CardHeader>
                                        <Nav className="nav-tabs-info justify-content-center" role="tablist" tabs>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({
                                                        active: textTabs === 1,
                                                    })}
                                                    onClick={(e) => setTextTabs(1)}
                                                >
                                                    Bags of Human Waste
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({
                                                        active: textTabs === 2,
                                                    })}
                                                    onClick={(e) => setTextTabs(2)}
                                                >
                                                    Empty Packets of Food
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({
                                                        active: textTabs === 3,
                                                    })}
                                                    onClick={(e) => setTextTabs(3)}
                                                >
                                                    Spacecrafts
                                                </NavLink>
                                            </NavItem>

                                        </Nav>
                                    </CardHeader>
                                    <CardBody>
                                        <TabContent className="tab-space" activeTab={"link" + textTabs}>
                                            <TabPane tabId="link1">
                                                <span style={{textAlign: "center"}}>
                                                    <h4 className="description">
                                                        Humans have left 96 known bags of urine, feces, and vomit on the Moon.
                                                        <Reference citeID={4}
                                                                   citation={"https://www.theatlantic.com/technology/archive/2012/12/the-trash-weve-left-on-the-moon/266465/"}/>
                                                        In human feces, there is roughly 100 billion bacteria per gram.
                                                        <Reference citeID={5}
                                                                   citation={"https://www.cell.com/cell/fulltext/S0092-8674(16)00053-2"}/>
                                                        Of that, almost 50% of that bacteria can survive in oxygen-free environments.
                                                        <Reference citeID={6}
                                                                   citation={"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1183343/"}/>
                                                        While these microorganisms are contained in sealed bags, we have not been to their resting places
                                                        since 1972 and thus do not know their true nature. It's possible that the bags could be ripped.
                                                        In order to lift off from the Moon and return to the surface, astronauts must jettison unneeded objects
                                                        to make their spacecraft lighter. Astronauts, in an effort to lighten their spacecraft, tossed these bags
                                                        which had the potential to hit a jagged rock on the Moon and potentially pierce it.
                                                        <Reference citeID={7}
                                                                   citation={"https://www.space.com/weird-stuff-apollo-astronauts-left-moon.html"}/>
                                                    </h4>

                                                </span>
                                            </TabPane>
                                            <TabPane tabId="link2">
                                                <span style={{textAlign: "center"}}>
                                                    <h4 className="description">
                                                        As they did with bags of human waste, astronauts tossed empty packages of food onto the Moon's surface.
                                                        <Reference citeID={4}
                                                                   citation={"https://www.theatlantic.com/technology/archive/2012/12/the-trash-weve-left-on-the-moon/266465/"}/>
                                                        <Reference citeID={7}
                                                                   citation={"https://www.space.com/weird-stuff-apollo-astronauts-left-moon.html"}/>
                                                        Astronauts eat their food in space in many similarities to how we eat on Earth. On the ISS, they can prepare food
                                                        in an oven or microwave and can even strap themselves to chairs to simulate a normal dining experience.
                                                        <Reference citeID={8}
                                                                   citation={"https://www.rmg.co.uk/stories/topics/what-do-astronauts-eat-space"}/>
                                                        However, back in the days of the Apollo missions, astronauts ate packaged food such as beef, vegetables, canadian bacon, and applesauce.
                                                        On the Moon in particular, Apollo 15 astronauts ate apricot cereal bars as snacks.
                                                        <Reference citeID={9}
                                                                   citation={"https://www.businessinsider.com/astronaut-food-in-space-timeline-2019-7"}/>
                                                        These packages, some touched to human mouths directly, are now resting on the lunar surface. It is possible that
                                                        bacteria that lives on human skin and in human mouths could have survived for a period of time on the Moon's surface.
                                                    </h4>
                                                </span>
                                            </TabPane>
                                            <TabPane tabId="link3">
                                                <span style={{textAlign: "center"}}>
                                                     <h4 className="description">
                                                         Over 70 spacecraft scatter the Moon's surface.
                                                         <Reference citeID={4}
                                                                    citation={"https://www.theatlantic.com/technology/archive/2012/12/the-trash-weve-left-on-the-moon/266465/"}/>
                                                         Many of these spacecraft were intentionally left there either due to it being the end of their mission,
                                                         by design of the craft, or by intentional crash. However, there is one unintentional crash onto the lunar surface by Israeli
                                                         lunar lander Beresheet which aimed to be the first attempt by a private company to land on the Moon.
                                                         <Reference citeID={10}
                                                                    citation={"https://www.wired.com/story/a-crashed-israeli-lunar-lander-spilled-tardigrades-on-the-moon/"}/>
                                                         Beresheet carried a capsule containing tardigrades in their cryptobiotic state. As noted in the <a>
                                                         <HashLink to={"/what-is#simulation"} > Microbial Space Simulation</HashLink></a>,
                                                         these animals are able to survive for long periods of time in outer space and Moon environments. While it is unlikely that
                                                         their presence, no matter how long, caused a disruption to the natural Moon environment, a continuation of introductions of microorganisms
                                                         to the Moon has the potential to devastate the Moon's environment.
                                                         <Reference citeID={10}
                                                                    citation={"https://www.wired.com/story/a-crashed-israeli-lunar-lander-spilled-tardigrades-on-the-moon/"}/>
                                                     </h4>
                                                </span>
                                            </TabPane>

                                        </TabContent>
                                    </CardBody>
                                </Card>
                                <h4 className="description text-danger">
                                    What is concerning about this is not entirely what we have done, but what this means
                                    for the future.
                                    As humans prepare to return to the Moon and private companies wish to send the
                                    general public to the Moon,
                                    we must set strict guidelines for what we can and cannot leave on the Moon. If trash
                                    is left on the Moon like
                                    trash is left on the sides of roads on Earth, there is a much greater possibility of
                                    microbial spread and contamination
                                    on the Moon.
                                </h4>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row>
                            <Col sm="12">
                                <h4 className={"title"}>Explore Some Of The Things Apollo 16 Left On The Moon</h4>
                                <div style={{
                                    pointerEvents: "none",
                                    background: "linear-gradient(to left, rgba(0,0,0,0) 90%, rgba(0,0,0,1) 97.5%), linear-gradient(to right, rgba(0,0,0,0) 90%, rgba(0,0,0,1) 97.5%)," +
                                        "linear-gradient(to top, rgba(0,0,0,0) 90%, rgba(0,0,0,1) 97.5%), linear-gradient(to bottom, rgba(0,0,0,0) 90%, rgba(0,0,0,1) 97.5%)",
                                    zIndex: "50",
                                    filter: "Alpha(opacity=0)",
                                    width: "100%",
                                    height: "80vh",
                                    position: "absolute",
                                }}>
                                </div>
                                <ReactPannellum
                                    id="1"
                                    sceneId="firstScene"
                                    imageSource={process.env.PUBLIC_URL + "/images/pano-moon.jpg"}
                                    config={config}
                                    style={{
                                        width: "100%",
                                        height: "80vh",
                                        pointerEvents: "auto",
                                    }}
                                />

                                <h4 className={"description"}>Image Credit: WSJ</h4>

                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="8" md="12">


                                <h2 className="title">Are Earth Organisms Already On Mars?</h2>
                                <h4 className="description">
                                    As seen in the <a><HashLink to={"/previous-efforts#rovers"} > Mars Rovers</HashLink></a> section,
                                    things sent to Mars have increased protection guidelines to avoid harmful
                                    contamination.
                                    However, just like the Moon, Mars contains remnants of old orbiters that have
                                    crashed as well as
                                    the remains of decommissioned rovers. While cleaning is very thorough of these
                                    instruments, there has
                                    been one instance of a rover slipping through planetary protection guidelines.
                                    <Reference citeID={11}
                                               citation={"http://www.nature.com/news/microbial-stowaways-to-mars-identified-1.15249/"}/>
                                    <br/>
                                    <br/>
                                    In 2011, NASA's Mars rover <a href={"https://mars.nasa.gov/msl/home/"}
                                                                      target={"_blank"}
                                                                      rel={"noreferrer"}> Curiosity</a> was launched and
                                    accidentally brought along more microbes than it should have with it.
                                    Project developers made the decision to not send a set of drill bits through the
                                    final cleanliness step of keeping them
                                    inside a sterilized box which would be opened by the rover on Mars which would then
                                    use a robotic arm to grab the bits and place them on a drill.
                                    Instead, the box was opened on Earth and one drill bit was fixed onto the drill
                                    head.
                                    <Reference citeID={12}
                                               citation={"https://www.space.com/13783-nasa-msl-curiosity-mars-rover-planetary-protection.html"}/>
                                    This may not seem like a big misstep, but any deviation from standard planetary
                                    protection guidelines has the potential to inadvertently
                                    contaminate equipment before launch. As these objects were drill bits, they would be
                                    touching the direct surface of Mars which makes their
                                    cleanliness a number one priority. Curiosity was sent to Gale Crater which is
                                    believed to not have any life-harboring ice at the depths the drills
                                    could penetrate.
                                    <br/>
                                    <br/>
                                    <Quote
                                        quote={"\"The decision to not keep the drill bits ultra-clean shows the process needs to be fixed\""}
                                        speaker={"Catherine \"Cassie\" Conley, Former NASA Planetary Protection Officer"}
                                        citeID={"12"}
                                        citation={"https://www.space.com/13783-nasa-msl-curiosity-mars-rover-planetary-protection.html"}
                                    />

                                    In 2014, a study was presented to the <a href={"https://asm.org"} target={"_blank"}
                                                                             rel={"noreferrer"}>American Society for
                                    Microbiology </a>
                                    which found 377 strains of bacteria that were resistant to extreme temperatures and
                                    ultraviolet-C (UV) radiation.
                                    <Reference citeID={11}
                                               citation={"http://www.nature.com/news/microbial-stowaways-to-mars-identified-1.15249/"}/>
                                    It found about 11% of the 377 strains were able to survive exposure to removal of
                                    water, UV radiation, and cold. It was also determined that
                                    curiosity housed 65 different species of bacteria with many related to the
                                    genus <i>Bacillus</i>.
                                    <Reference citeID={11}
                                               citation={"http://www.nature.com/news/microbial-stowaways-to-mars-identified-1.15249/"}/>
                                    Check out our <a><HashLink to={"/what-is#simulation"} >Microbial Space Simulation</HashLink></a> to
                                    see how the <i>Bacillus</i> bacteria has behaved in outer space.
                                </h4>

                                <a id={"private"}/>
                                <h1 className="title">Commercial Companies And Planetary Protection</h1>
                                <h2 className="title">What Are The Requirements?</h2>
                                <h4 className="description">
                                    As noted in the <a><HashLink to={"/previous-efforts#private"} >Previous Efforts</HashLink></a> section,
                                    the Outer Space Treaty
                                    applies to "State parties" and not non-governmental agencies. This means that
                                    commercial companies are not subjected to
                                    the planetary protection aspects of the treaty. However, States that are a part of
                                    the treaty have a responsibility, under the treaty,
                                    to ensure that non-governmental agencies from that State adhere to responsible
                                    conduct which includes adhering to planetary protection principles.
                                    <Reference citeID={13}
                                               citation={"https://www.unoosa.org/oosa/en/ourwork/spacelaw/treaties/outerspacetreaty.html"}/>
                                    <br/>
                                    <br/>
                                    This is good because this actually makes non-governmental agencies subject to the
                                    Outer Space Treaty. It does <b>not</b>, however, make
                                    it so that they must follow COSPAR's Planetary Protection Policy. This must only
                                    happen if a particular State chooses to enforce it. As of 2021,
                                    no State has added COSPAR's Planetary Protection Policy to their national laws.
                                    Therefore, no non-governmental agency is required to follow it.
                                    This is concerning, especially as the commercial sector expands.
                                    <br/>
                                    <br/>
                                    <a href={"https://www.spacex.com"} target={"_blank"} rel={"noreferrer"}> SpaceX</a>, a
                                    leader in commercial spaceflight, plans to use their rockets to eventually set up a
                                    human colony on Mars. Their CEO, Elon Musk,
                                    has made it clear in interviews that he is not worried about planetary protection
                                    standards.
                                    <br/>
                                    <br/>
                                    <Quote
                                        quote={"\"I think the reality is that there isn't any life on the surface of Mars...There may be microbial life deep underground where it's shielded from radiation and the cold. That's a possibility, " +
                                        "but in that case, anything we do on the surface is not going to have a big impact on the subterranean life.\""}
                                        speaker={"Elon Musk, CEO of SpaceX"}
                                        citeID={"14"}
                                        citation={"https://arstechnica.com/science/2015/12/when-elon-musk-goes-to-mars-he-wont-be-troubled-by-planetary-protection/"}
                                    />
                                    If one of the leaders in privatized space exploration feels the need to bypass
                                    protection standards, then it stands to reason
                                    that other companies will behave the same. It has already been seen from 2019's
                                    Beresheet mission to the Moon. The
                                    <a href={"https://www.archmission.org"} target={"_blank"} rel={"noreferrer"}> Arch
                                        Mission Foundation</a> teamed up with the
                                    Israeli company <a href={"https://www.spaceil.com/"} target={"_blank"}
                                                       rel={"noreferrer"}> SpaceIL </a>to create a lunar lander. Aiming to
                                    be the first non-governmental mission to land on the Moon, it unfortunately crashed.
                                    Months later, it was revealed that Nova Spivack, the founder of the Arch Mission
                                    Foundation, had authorized placing tardigrades inside the lander
                                    without informing launch partners, other space agencies, or the scientific
                                    community.
                                    <Reference citeID={15}
                                               citation={"https://mashable.com/article/smuggled-moon-tardigrade/?europe=true"}/>
                                    <br/>
                                    <br/>
                                    <Quote
                                        quote={"\"We didn't tell them we were putting life in this thing...Space agencies don't like last-minute changes. " +
                                        "So we just decided to take the risk.\""}
                                        speaker={"Nova Spivack, Co-Founder of Arch Mission Foundation"}
                                        citeID={"15"}
                                        citation={"https://mashable.com/article/smuggled-moon-tardigrade/?europe=true"}
                                    />
                                </h4>
                                <h4 className={"description text-danger"}>
                                    Disregard of planetary protection guidelines will only increase as more companies
                                    expand to outer space. This means we must begin
                                    to update how we protect outer space in the new space age.
                                </h4>
                            </Col>
                        </Row>
                    </Container>

                    <MoonGame/>


                    <div className="section" style={{marginTop:"30px"}}>
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



                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="8" md="12">
                                <h4 className={"title"}> Game Graphics Credits </h4>
                                <h4 className={"description"}>
                                    <p><a href={"https://skfb.ly/6wW9X"} target={"_blank"} rel={"noreferrer"}> "plastic
                                        Bag" </a> by saruedaacevedo is licensed under <a
                                        href={"http://creativecommons.org/licenses/by/4.0/"} target={"_blank"}
                                        rel={"noreferrer"}>Creative Commons Attribution</a>.</p>
                                    <br/>
                                    <p><a href={"https://www.thingiverse.com/thing:3570931"} target={"_blank"}
                                          rel={"noreferrer"}>"Beresheet SpaceIL"</a> by royyehu is licensed under <a
                                        href={"http://creativecommons.org/licenses/by/4.0/"} target={"_blank"}
                                        rel={"noreferrer"}>Creative Commons Attribution</a>.</p>
                                    <br/>
                                    <p><a href={"https://skfb.ly/6RDqw"} target={"_blank"} rel={"noreferrer"}> "Picture
                                        Frame" </a> by Xander Morningstar is licensed under <a
                                        href={"http://creativecommons.org/licenses/by/4.0/"} target={"_blank"}
                                        rel={"noreferrer"}>Creative Commons Attribution</a>.</p>
                                    <br/>
                                    <p><a href={"https://nasa3d.arc.nasa.gov/detail/ladee"} target={"_blank"}
                                          rel={"noreferrer"}> "Lunar Atmosphere and Dust Environment Explorer" </a> by
                                        NASA</p>
                                    <br/>
                                    <p><a href={"https://nasa3d.arc.nasa.gov/detail/lunarlandernofoil-c"}
                                          target={"_blank"} rel={"noreferrer"}> "Apollo Lunar Module" </a> by NASA</p>
                                    <br/>
                                    <p><a href={"https://nasa3d.arc.nasa.gov/detail/hammer"} target={"_blank"}
                                          rel={"noreferrer"}> "Hammer" </a> by NASA</p>
                                    <br/>
                                    <p><a href={"https://github.com/SebLague/Solar-System"} target={"_blank"}
                                          rel={"noreferrer"}> Solar System Template </a> by Sebastian Lague</p>
                                </h4>
                            </Col>
                        </Row>


                    </Container>

                    <Citations references={[
                        {
                            citeID: 1,
                            citation: <p key={1.1}><a
                                href="https://www.huffpost.com/entry/space-junk-donald-kessler_n_3983899"
                                className="text-primary">{"1)"} </a>
                                Littlewood, Daniel. “WATCH: Scientist Offers Surprising Fix For Space Junk Problem.”
                                HuffPost, 52:28 400AD. <a
                                    href="https://www.huffpost.com/entry/space-junk-donald-kessler_n_3983899">
                                    https://www.huffpost.com/entry/space-junk-donald-kessler_n_3983899
                                </a>.
                            </p>
                        },
                        {
                            citeID: 2,
                            citation: <p key={2.1}><a
                                href="https://www.nasa.gov/mission_pages/station/news/orbital_debris.html"
                                className="text-primary">{"2)"} </a>
                                Garcia, Mark. “Space Debris and Human Spacecraft.” Text. NASA, April 13, 2015. <a
                                    href="http://www.nasa.gov/mission_pages/station/news/orbital_debris.html">
                                    http://www.nasa.gov/mission_pages/station/news/orbital_debris.html
                                </a>.
                            </p>
                        },
                        {
                            citeID: 3,
                            citation: <p key={3.1}><a href="https://hbr.org/2021/02/the-commercial-space-age-is-here"
                                                      className="text-primary">{"3)"} </a>
                                Weinzierl, Matt, and Mehak Sarang. “The Commercial Space Age Is Here.” <i>Harvard
                                    Business Review</i>, February 12, 2021. <a
                                    href="https://hbr.org/2021/02/the-commercial-space-age-is-here">
                                    https://hbr.org/2021/02/the-commercial-space-age-is-here
                                </a>.
                            </p>
                        },
                        {
                            citeID: 4,
                            citation: <p key={4.1}><a
                                href="https://www.theatlantic.com/technology/archive/2012/12/the-trash-weve-left-on-the-moon/266465/"
                                className="text-primary">{"4)"} </a>
                                Garber, Megan. “The Trash We’ve Left on the Moon.” The Atlantic, December 19, 2012. <a
                                    href="https://www.theatlantic.com/technology/archive/2012/12/the-trash-weve-left-on-the-moon/266465/">https://www.theatlantic.com/technology/archive/2012/12/the-trash-weve-left-on-the-moon/266465/</a>.
                            </p>
                        },
                        {
                            citeID: 5,
                            citation: <p key={5.1}><a href="https://www.cell.com/cell/fulltext/S0092-8674(16)00053-2"
                                                      className="text-primary">{"5)"} </a>
                                Sender, Ron, Shai Fuchs, and Ron Milo. “Are We Really Vastly Outnumbered? Revisiting the
                                Ratio of Bacterial to Host Cells in Humans.” <i>Cell</i> 164, no. 3 (January 28, 2016):
                                337–40. <a
                                    href="https://doi.org/10.1016/j.cell.2016.01.013">https://doi.org/10.1016/j.cell.2016.01.013</a>.
                            </p>
                        },
                        {
                            citeID: 6,
                            citation: <p key={6.1}><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1183343/"
                                                      className="text-primary">{"6)"} </a>
                                Ben-Amor, Kaouther, Hans Heilig, Hauke Smidt, Elaine E. Vaughan, Tjakko Abee, and Willem
                                M. de Vos. “Genetic Diversity of Viable, Injured, and Dead Fecal Bacteria Assessed by
                                Fluorescence-Activated Cell Sorting and 16S RRNA Gene Analysis.” <i>Applied and
                                    Environmental Microbiology</i> 71, no. 8 (August 2005): 4679–89. <a
                                    href="https://doi.org/10.1128/AEM.71.8.4679-4689.2005">https://doi.org/10.1128/AEM.71.8.4679-4689.2005</a>.
                            </p>
                        },
                        {
                            citeID: 7,
                            citation: <p key={7.1}><a
                                href="https://www.space.com/weird-stuff-apollo-astronauts-left-moon.html"
                                className="text-primary">{"7)"} </a>
                                Space.com. “The Weirdest Things Apollo Astronauts Left on the Moon.” Accessed November
                                17, 2020. <a
                                    href="https://www.space.com/weird-stuff-apollo-astronauts-left-moon.html">https://www.space.com/weird-stuff-apollo-astronauts-left-moon.html</a>.
                            </p>
                        },
                        {
                            citeID: 8,
                            citation: <p key={8.1}><a
                                href="https://www.rmg.co.uk/stories/topics/what-do-astronauts-eat-space"
                                className="text-primary">{"8)"} </a>
                                Royal Museums Greenwich. “What Do Astronauts Eat in Space?” Accessed March 15, 2021. <a
                                    href="https://www.rmg.co.uk/stories/topics/what-do-astronauts-eat-space">https://www.rmg.co.uk/stories/topics/what-do-astronauts-eat-space</a>.
                            </p>
                        },
                        {
                            citeID: 9,
                            citation: <p key={9.1}><a
                                href="https://www.businessinsider.com/astronaut-food-in-space-timeline-2019-7"
                                className="text-primary">{"9)"} </a>
                                Bendix, Aria. “Apollo 11: Astronaut Space Food from the Moon Landing to Today.” Accessed
                                March 15, 2021. <a
                                    href="https://www.businessinsider.com/astronaut-food-in-space-timeline-2019-7">https://www.businessinsider.com/astronaut-food-in-space-timeline-2019-7</a>.
                            </p>
                        },
                        {
                            citeID: 10,
                            citation: <p key={10.1}><a
                                href="https://www.wired.com/story/a-crashed-israeli-lunar-lander-spilled-tardigrades-on-the-moon/"
                                className="text-primary">{"10)"} </a>
                                Oberhaus, Daniel. “A Crashed Israeli Spacecraft Spilled Tardigrades on the
                                Moon.” <i>Wired</i>. Accessed November 17, 2020. <a
                                    href="https://www.wired.com/story/a-crashed-israeli-lunar-lander-spilled-tardigrades-on-the-moon/">https://www.wired.com/story/a-crashed-israeli-lunar-lander-spilled-tardigrades-on-the-moon/</a>.
                            </p>
                        },
                        {
                            citeID: 11,
                            citation: <p key={11.1}><a
                                href="http://www.nature.com/news/microbial-stowaways-to-mars-identified-1.15249/"
                                className="text-primary">{"11)"} </a>
                                Madhusoodanan, Jyoti. “Microbial Stowaways to Mars Identified.” <i>Nature News</i>.
                                Accessed November 19, 2020. <a
                                    href="https://doi.org/10.1038/nature.2014.15249">https://doi.org/10.1038/nature.2014.15249</a>.
                            </p>
                        },
                        {
                            citeID: 12,
                            citation: <p key={12.1}><a
                                href="https://www.space.com/13783-nasa-msl-curiosity-mars-rover-planetary-protection.html"
                                className="text-primary">{"12)"} </a>
                                Leonard, David. “NASA’s Mars Rover Curiosity Had Planetary Protection Slip-Up.”
                                Space.com. Accessed November 16, 2020. <a
                                    href="https://www.space.com/13783-nasa-msl-curiosity-mars-rover-planetary-protection.html">https://www.space.com/13783-nasa-msl-curiosity-mars-rover-planetary-protection.html</a>.
                            </p>
                        },
                        {
                            citeID: 13,
                            citation: <p key={13.1}><a
                                href="https://www.unoosa.org/oosa/en/ourwork/spacelaw/treaties/outerspacetreaty.html"
                                className="text-primary">{"13)"} </a>
                                United Nations. “Treaty on Principles Governing the Activities of States in the
                                Exploration and Use of Outer Space, Including the Moon and Other Celestial Bodies.”
                                Accessed November 13, 2020. <a
                                    href="https://www.unoosa.org/oosa/en/ourwork/spacelaw/treaties/introouterspacetreaty.html">https://www.unoosa.org/oosa/en/ourwork/spacelaw/treaties/introouterspacetreaty.html</a>.
                            </p>
                        },
                        {
                            citeID: 14,
                            citation: <p key={14.1}><a
                                href="https://arstechnica.com/science/2015/12/when-elon-musk-goes-to-mars-he-wont-be-troubled-by-planetary-protection/"
                                className="text-primary">{"13)"} </a>
                                Berger, Eric. “When Elon Musk Goes to Mars, He Won’t Be Overly Troubled by Planetary
                                Protection | Ars Technica.” Accessed March 16, 2021. <a
                                    href="https://arstechnica.com/science/2015/12/when-elon-musk-goes-to-mars-he-wont-be-troubled-by-planetary-protection/">https://arstechnica.com/science/2015/12/when-elon-musk-goes-to-mars-he-wont-be-troubled-by-planetary-protection/</a>.
                            </p>
                        },
                        {
                            citeID: 15,
                            citation: <p key={15.1}><a
                                href="https://mashable.com/article/smuggled-moon-tardigrade/?europe=true"
                                className="text-primary">{"15)"} </a>
                                Taylor, Chris. “‘I’m the First Space Pirate!’ How Tardigrades Were Secretly Smuggled to
                                the Moon.” Mashable. Accessed March 16, 2021. <a
                                    href="https://mashable.com/article/smuggled-moon-tardigrade/">https://mashable.com/article/smuggled-moon-tardigrade/</a>.
                            </p>
                        }
                    ]}
                    />

                </div>
                <Footer/>
            </div>
        </>
    );
}

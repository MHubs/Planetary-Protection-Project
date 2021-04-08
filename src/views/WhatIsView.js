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
import BacteriaSimulation from "../views/Simulations/BacteriaSimulation.js";
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
import {Link} from "react-router-dom";


export default function WhatIsView(props) {
    const [textTabs, setTextTabs] = React.useState(4);
    React.useEffect(() => {
        document.body.classList.toggle("index-page");
        document.body.classList.toggle("profile-page");
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("index-page");
            document.body.classList.toggle("profile-page");
        };
    }, []);

    return (
        <>
            <IndexNavbar name={props.name}/>
            <div className="wrapper">
                <PageHeader subtitle={""} title={"What is Planetary Protection?"} scroll={"Learn More"}/>
                <div className="section section-nucleo-icons" id={"ScrollTo"}>
                    <Container >
                        <span className={"description"}>
                        <Quote quote={"\"I fully expect we will encounter life in our solar system.\""}
                               speaker={"Lisa Pratt, NASA's Planetary Protection Officer"}
                               citeID={"1"}
                               citation={"https://www.businessinsider.com/nasa-planetary-protection-officer-lisa-pratt-spacex-roadster-orbit-2018-2"}
                        />
                        </span>

                        <Row className="justify-content-center" >
                            <Col lg="8" md="12">
                                <h2 className="title">What is Planetary Protection?</h2>
                                <h4 className="description">
                                    As technology advances and space travel becomes cheaper and privatized,
                                    more humans will start leaving Earth to travel to other planetary bodies.
                                    While this brings up a variety of questions and concerns,
                                    a seldom mentioned matter is that of human contamination of outer space as well as
                                    outer space contamination of Earth.
                                    This area of space research is referred to as “Planetary Protection” (PP).
                                    <a href={"https://www.jpl.nasa.gov"} target="_blank" rel={"noreferrer"}> The
                                        National Aeronautics and
                                        Space Administration’s (NASA) Jet Propulsion Laboratory</a> indicates that
                                    Planetary Protection
                                    “Addresses microbial contamination of the solar system by spacecraft that we launch
                                    from Earth”,
                                    otherwise known as forward contamination, and “extraterrestrial contamination of the
                                    Earth and Moon”
                                    known as backward contamination.
                                    <Reference citeID={2} citation={"https://planetaryprotection.jpl.nasa.gov/"}/>

                                </h4>
                            </Col>

                        </Row>
                        <img
                            alt="..."
                            className="path"
                            style={{
                                left: "300px",
                                top: "25%",
                                width: "80%"
                            }}
                            src={require("../assets/img/path4.png").default}
                        />
                        <Row className="justify-content-center">
                            <Col lg="8" md="12">
                                <h2 className="title">Why is Planetary Protection Important?</h2>
                                <h4 className="description">
                                    A big question that NASA scientists try to answer is the question of "Are We
                                    Alone?".
                                    We try to answer this by exploring our Solar System in search of life.
                                    Earth is teeming with life, so as we explore we want to make sure that we don't
                                    bring Earth life
                                    with us to other planets. We don't want to find life on another planet and have it
                                    be Earth life
                                    that we accidentally brought with us!
                                    <Reference citeID={3}
                                               citation={"https://science.nasa.gov/astrophysics/big-questions"}/>
                                    <br/>
                                </h4>

                                <h3 className={"title"}>Forward Contamination</h3>
                                <h4 className="description">
                                    We also don't want to contaminate other planets. Just like humans can catch a cold
                                    through a virus,
                                    life on other planets could get very sick and die if exposed to earth viruses. So
                                    astronauts and other scientists
                                    need to make sure that what we put into outer space is clean and doesn't contain
                                    large amounts of Earthly microscopic life.
                                    <br/>
                                </h4>
                                <h3 className={"title"}>Backward Contamination</h3>
                                <h4 className="description">
                                    It's also important that any life living on other planets, comes back to Earth in a
                                    safe way.
                                    Just as Earth viruses can be dangerous to other planetary life, a virus on another
                                    planet
                                    can be dangerous to humans on Earth. This means that we need to be careful when
                                    touching objects that return to Earth
                                    from outer space.

                                </h4>
                            </Col>

                        </Row>

                        <Row className="justify-content-center">
                            <Col lg="8" md="12">
                                <h2 className="title">Can Earth Life Survive in Outer Space?</h2>
                                <h4 className="description">
                                    Scientists have conducted multiple experiments with sending microscopic bacteria
                                    into space.<Reference citeID={4} page={"what-is"} citation={"View Citations"} noRef={true}/>
                                    While most life cannot survive in space, there are a couple of microorganisms that
                                    have been able to.
                                    Many of these microorganisms are known as "extremophiles" because they love to live
                                    in extreme and harsh environments.
                                    Below is a simulation of how some of these extremophiles have behaved and may behave
                                    in outer
                                    space.

                                </h4>
                            </Col>

                            {/*Game about cleaning things and how difficult it can be. Takes time for UV radiation, heating/freezing only kills some*/}

                        </Row>
                    </Container>

                    <span id="simulation">
                        <BacteriaSimulation/>
                    </span>
                    <Row className="justify-content-center">
                        <Col lg="8" md="12">
                            <h2 className={"title"}> Below are a couple of microorganisms from the simulation
                                above </h2>
                        </Col>
                    </Row>


                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="8" md="12">

                                <Card>
                                    <CardHeader>
                                        <Nav className="nav-tabs-info justify-content-center" role="tablist" tabs>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({
                                                        active: textTabs === 4,
                                                    })}
                                                    onClick={(e) => setTextTabs(4)}
                                                >
                                                    Clostridium botulinum
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({
                                                        active: textTabs === 5,
                                                    })}
                                                    onClick={(e) => setTextTabs(5)}
                                                >
                                                    Milnesium tardigradum
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({
                                                        active: textTabs === 6,
                                                    })}
                                                    onClick={(e) => setTextTabs(6)}
                                                >
                                                    Aspergillus niger
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </CardHeader>
                                    <CardBody>
                                        <TabContent className="tab-space" activeTab={"link" + textTabs}>
                                            <TabPane tabId="link4">
                                                <p className="description">
                                                    Clostridium botulinum is a bacterium that is able to produce a
                                                    neurotoxin that is
                                                    deadly for humans. This neurotoxin is what causes the illness
                                                    Botulism. This
                                                    microorganism is commonly found in canned and preserved foods, and
                                                    is killed when foods are heated up properly.
                                                    However, based on the simulation above, it can survive in a Mars
                                                    environment for 10 months,
                                                    much longer than on Earth. Botulism affects more than just humans
                                                    which puts many living organisms,
                                                    and possibly those on other planets, at risk.
                                                    <Reference citeID={5}
                                                               citation={"https://www.cdc.gov/botulism/general.html"}/>
                                                </p>
                                            </TabPane>
                                            <TabPane tabId="link5">
                                                <p className="description">
                                                    Also known as "Water Bears", tardigrades are a species of
                                                    microscopic animal.
                                                    They eat small organisms such as algae, rotifers, nematodes, and
                                                    even other tardigrades. Tardigrades are able
                                                    to survive in harsh environments initiating cryptobiosis. During
                                                    this, they are able to turn
                                                    off their internal biological clock which stops their aging process.
                                                    This allows them to survive in
                                                    these environments, including outer space. Being able to survive and
                                                    grow almost a month after exposure to
                                                    outer space and radiation, can help us, as humans, understand how we
                                                    can preserve the cells in our bodies
                                                    just like the tardigrade can. We must be careful however, as this
                                                    omnivorous creature can import the ecosystem
                                                    of other planets.
                                                    <Reference citeID={6}
                                                               citation={"https://animaldiversity.org/accounts/Milnesium_tardigradum/"}/>
                                                </p>
                                            </TabPane>
                                            <TabPane tabId="link6">
                                                <p className="description">
                                                    This fungus causes "black mold" on fruits and vegetables. While it
                                                    usually does not harm
                                                    humans and animals, it can be found on the human body. A study
                                                    utilizing a MARSBOx found that
                                                    the fungus was able to survive Mars atmospheric conditions and high
                                                    amounts of UV irradiation.
                                                    If humans are able to successfully travel to and colonize Mars, this
                                                    fungus could affect any farming
                                                    that is done there.
                                                    <Reference citeID={7}
                                                               citation={"https://www.frontiersin.org/articles/10.3389/fmicb.2021.601713/full"}/>
                                                </p>
                                            </TabPane>
                                        </TabContent>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="8" md="12">
                                <h3 className={"title"}> Interview With NASA Planetary Protection Officer Lisa
                                    Pratt </h3>
                                <iframe title="soundcloud" width="100%" height="300" scrolling="no" frameBorder="no"
                                        allow="autoplay"
                                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/859806697&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
                                <div
                                    style={{
                                        fontSize: "10px",
                                        color: "#cccccc",
                                        lineBreak: "anywhere",
                                        wordBreak: "normal",
                                        overflow: "hidden",
                                        whiteSpace: "nowrap",
                                        textOverflow: "ellipsis",
                                        fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                                        fontWeight: "100"
                                    }}>
                                    <a href="https://soundcloud.com/nasa" title="NASA" target="_blank"
                                       style={{color: "#cccccc", textDecoration: "none"}} rel="noreferrer">NASA</a> · <a
                                    href="https://soundcloud.com/nasa/gravity-assist-she-protects-other-planets-from-our-germs"
                                    title="Gravity Assist: She Protects Other Planets from Our Germs" target="_blank"
                                    style={{color: "#cccccc", textDecoration: "none"}} rel="noreferrer">Gravity Assist:
                                    She Protects Other
                                    Planets from Our Germs</a><br/><br/></div>
                            </Col>
                        </Row>
                    </Container>

                    <div className="section" style={{marginTop: "30px"}}>
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

                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="8" md="12">
                                <h4 className={"title"}> Simulation Graphics Credits </h4>
                                <h4 className={"description"}>
                                Medical vector created by starline -
                                    <a href="https://www.freepik.com/vectors/medical"> www.freepik.com</a>
                                <br/>
                                <a href="https://images.nasa.gov/details-iss040e080833">Background image</a> taken by
                                    NASA
                                <br/>
                                </h4>
                                <h4 className={"title"}> Simulation Data Credits </h4>
                                <h4 className={"description"}>
                                <a href="http://link.springer.com/10.1007/s11084-014-9397-y">"Extremophiles Survival to
                                    Simulated Space Conditions: An Astrobiology Model Study"</a> By Mastascusa et al.
                                <br/>
                                <a href="https://www.nature.com/articles/193497a0">"Micro-Organisms under a Simulated
                                    Martian Environment."</a> By Hawrylewicz et al.
                                <br/>
                                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2832349/">"Space Microbiology"</a> By
                                    Horneck et al.
                                <br/>
                                <a href="http://www.sciencedirect.com/science/article/pii/S0960982208008051">"Tardigrades
                                    survive exposure to space in low Earth orbit"</a> By Jönsson et al.
                                <br/>
                                <a href="https://www.frontiersin.org/articles/10.3389/fmicb.2021.601713/full">"MARSBOx:
                                    Fungal and Bacterial Endurance From a Balloon-Flown Analog Mission in the
                                    Stratosphere"</a> By Cortesão et al.
                                </h4>
                            </Col>
                        </Row>


                    </Container>

                    <Citations references={[
                        {
                            citeID: 1,
                            citation: <p key={1.1}><a
                                href="https://www.businessinsider.com/nasa-planetary-protection-officer-lisa-pratt-spacex-roadster-orbit-2018-2"
                                className="text-primary">{"1)"} </a>
                                Brueck, Hilary. “NASA’s Planetary Protection Officer Slams Tesla Roadster in Orbit.”
                                Accessed February 18, 2021.
                                <a href="https://www.businessinsider.com/nasa-planetary-protection-officer-lisa-pratt-spacex-roadster-orbit-2018-2">
                                    https://www.businessinsider.com/nasa-planetary-protection-officer-lisa-pratt-spacex-roadster-orbit-2018-2
                                </a>.
                            </p>
                        },
                        {
                            citeID: 2,
                            citation: <p key={2.1}><a href="https://planetaryprotection.jpl.nasa.gov/"
                                                      className="text-primary">{"2)"} </a>
                                NASA Jet Propulsion Laboratory. “Planetary Protection.” Planetary Protection. Accessed
                                November 11, 2020.
                                <a href="https://planetaryprotection.jpl.nasa.gov/">
                                    https://planetaryprotection.jpl.nasa.gov/
                                </a>.
                            </p>
                        },
                        {
                            citeID: 3,
                            citation: <p key={3.1}><a href="https://science.nasa.gov/astrophysics/big-questions"
                                                      className="text-primary">{"3)"} </a>
                                Nagaraja, Mamta Patel. “Big Questions | Science Mission Directorate.” Accessed February
                                25, 2021.
                                <a href="https://science.nasa.gov/astrophysics/big-questions">
                                    https://science.nasa.gov/astrophysics/big-questions
                                </a>.
                            </p>
                        },
                        {
                            citeID: 4,
                            citation: <p key={4.1}><a href="https://doi.org/10.3389/fmicb.2020.02050"
                                                      className="text-primary">{"4)"} </a>
                                Kawaguchi, Yuko, Mio Shibuya, Iori Kinoshita, Jun Yatabe, Issay Narumi, Hiromi Shibata,
                                Risako Hayashi, et al. “DNA Damage and Survival Time Course of Deinococcal Cell Pellets
                                During 3 Years of Exposure to Outer Space.” <i>Frontiers in Microbiology</i> 11 (2020).
                                <a href="https://doi.org/10.3389/fmicb.2020.02050">
                                    https://doi.org/10.3389/fmicb.2020.02050
                                </a>.
                            </p>
                        },
                        {
                            citeID: 4.1,
                            citation: <p key={4.2}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Fendrihan, Sergiu, Andrea Legat, Marion Pfaffenhuemer, Claudia Gruber, Gerhard Weidler,
                                Friedrich Gerbl, and Helga Stan-Lotter. “Extremely Halophilic Archaea and the Issue of
                                Long-Term Microbial Survival.” In <i>Life in Extreme Environments</i>, edited by Ricardo
                                Amils, Cynan Ellis-Evans, and Helmut Hinghofer-Szalkay, 125–40. Dordrecht: Springer
                                Netherlands, 2007.
                                <a href="https://doi.org/10.1007/978-1-4020-6285-8_8">
                                    https://doi.org/10.1007/978-1-4020-6285-8_8
                                </a>.
                            </p>
                        },
                        {
                            citeID: 4.2,
                            citation: <p key={4.3}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Mastascusa, V., I. Romano, P. Di Donato, A. Poli, V. Della Corte, A. Rotundi, E.
                                Bussoletti, M. Quarto, M. Pugliese, and B. Nicolaus. “Extremophiles Survival to
                                Simulated Space Conditions: An Astrobiology Model Study.” <i>Origins of Life and
                                    Evolution of Biospheres</i> 44, no. 3 (September 2014): 231–37.
                                <a href="https://doi.org/10.1007/s11084-014-9397-y">
                                    https://doi.org/10.1007/s11084-014-9397-y
                                </a>.
                            </p>
                        },
                        {
                            citeID: 4.3,
                            citation: <p key={4.4}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Taylor, Peter. “Impact of Space Flight on Bacterial Virulence and Antibiotic
                                Susceptibility.” <i>Infection and Drug Resistance</i> 8 (August 7, 2015): 249–62.
                                <a href="https://doi.org/10.2147/IDR.S67275">
                                    https://doi.org/10.2147/IDR.S67275
                                </a>.
                            </p>
                        },
                        {
                            citeID: 4.4,
                            citation: <p key={4.5}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Beblo-Vranesevic, Kristina, Maria Bohmeier, Alexandra K Perras, Petra Schwendner, Elke
                                Rabbow, Christine Moissl-Eichinger, Charles S Cockell, et al. “Lack of Correlation of
                                Desiccation and Radiation Tolerance in Microorganisms from Diverse Extreme Environments
                                Tested under Anoxic Conditions.” <i>FEMS Microbiology Letters</i> 365, no. 6 (February
                                21, 2018).
                                <a href="https://doi.org/10.1093/femsle/fny044">
                                    https://doi.org/10.1093/femsle/fny044
                                </a>.
                            </p>
                        },
                        {
                            citeID: 4.5,
                            citation: <p key={4.6}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Hawrylewicz, Ervin, Betty Gowdy, and Richard Ehrlich. “Micro-Organisms under a Simulated
                                Martian Environment.” <i>Nature</i> 193, no. 4814 (February 1962): 497–497.
                                <a href="https://doi.org/10.1038/193497a0">
                                    https://doi.org/10.1038/193497a0
                                </a>.
                            </p>
                        },
                        {
                            citeID: 5,
                            citation: <p key={5.1}><a href="https://www.cdc.gov/botulism/general.html"
                                                      className="text-primary">{"5)"} </a>
                                Centers for Disease Control and Prevention. “About Botulism | Botulism | CDC,” October
                                9, 2018.
                                <a href="https://www.cdc.gov/botulism/general.html">
                                    https://www.cdc.gov/botulism/general.html
                                </a>.
                            </p>
                        },
                        {
                            citeID: 6,
                            citation: <p key={6.1}><a href="https://animaldiversity.org/accounts/Milnesium_tardigradum/"
                                                      className="text-primary">{"6)"} </a>
                                Dhaduk, Ami, and David Kam. “Milnesium Tardigradum.” Animal Diversity Web. Accessed
                                February 28, 2021.
                                <a href="https://animaldiversity.org/accounts/Milnesium_tardigradum/">
                                    https://animaldiversity.org/accounts/Milnesium_tardigradum/
                                </a>.
                            </p>
                        },
                        {
                            citeID: 7,
                            citation: <p key={7.1}><a href="https://doi.org/10.3389/fmicb.2021.601713"
                                                      className="text-primary">{"7)"} </a>
                                Cortesão, Marta, Katharina Siems, Stella Koch, Kristina Beblo-Vranesevic, Elke Rabbow,
                                Thomas Berger, Michael Lane, et al. “MARSBOx: Fungal and Bacterial Endurance From a
                                Balloon-Flown Analog Mission in the Stratosphere.” <i>Frontiers in Microbiology</i> 12
                                (2021).
                                <a href="https://doi.org/10.3389/fmicb.2021.601713">
                                    https://doi.org/10.3389/fmicb.2021.601713
                                </a>.
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

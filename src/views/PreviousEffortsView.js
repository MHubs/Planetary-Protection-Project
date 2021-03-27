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
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";
import Quote from "components/PageHeader/Quote.js"

// sections for this page/view
import CleaningGame from "views/Simulations/CleaningGame.js";
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
import {HashLink} from "react-router-hash-link";
import {Link} from "react-router-dom";


export default function PreviousEffortsView(props) {
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
    return (
        <>
            <IndexNavbar name={props.name}/>
            <div className="wrapper">
                <PageHeader subtitle={""} title={"Previous Protection Efforts"} scroll={"Learn More"}/>
                <div className="section section-nucleo-icons" id={"ScrollTo"}>
                    <Container>
                        <span className={"description"}>
                        <Quote
                            quote={"\"The human species has a vital stake in the orderly, careful, and well-reasoned extension of the cosmic frontier. . . . The introduction of microbial life to a previously barren planet, or to one occupied by a\n" +
                            "less well-adapted form of life, could result in the explosive growth of the implant. . . . The overgrowth of terrestrial bacteria on Mars would destroy an inestimably valuable opportunity of understanding our own living nature.\""}
                            speaker={"Joshua Lederberg, Nobel Laureate, Advocate for Planetary Protection"}
                            citeID={"1"}
                            citation={"https://science.sciencemag.org/content/132/3424/393"}

                        />
                        </span>
                        <img
                            alt="..."
                            className="path"
                            style={{
                                left: "300px",
                                top: "25%",
                                width: "80%"
                            }}
                            src={require("assets/img/path4.png").default}
                        />
                        <img
                            alt="..."
                            className="path"
                            style={{
                                left: "-10%",
                                top: "5%",
                                width: "60%"
                            }}
                            src={require("assets/img/path2.png").default}
                        />
                        <img
                            alt="..."
                            className="path"
                            style={{
                                left: "20%",
                                top: "50%",
                                width: "60%"
                            }}
                            src={require("assets/img/path1.png").default}
                        />
                        <Row className="justify-content-center">
                            <Col lg="8" md="12">

                                <h1 className="title">Previous Planetary Protection Efforts</h1>
                                <h2 className="title">Before the Space Race</h2>
                                <h4 className="description">
                                    Early, modern, discussions of planetary protection date back to 1956 at the
                                    <a href={"https://en.wikipedia.org/wiki/International_Astronautical_Congress"}
                                       rel="noreferrer" target={"_blank"}> International Astronautical Federation's 7th
                                        Congress</a>. They had the hopes of coordinating international efforts to
                                    prevent
                                    lunar and planetary contamination.
                                    <Reference citeID={2}
                                               citation={"https://www.nasa.gov/pdf/607072main_WhenBiospheresCollide-ebook.pdf"}/>
                                    <br/>
                                    After the launch of the USSR's Sputnik I and II, the United States began
                                    mobilization to match
                                    Soviet technologies, and thus the Space Race began, but not without concern for
                                    planetary protection.

                                </h4>
                                <h2 className="title">Early Planetary Protection</h2>
                                <h4 className="description">
                                    Scientists in the United States, including Geneticist <a
                                    href={"https://en.wikipedia.org/wiki/Joshua_Lederberg"} rel="noreferrer"
                                    target={"_blank"}> Joshua Lederberg</a>,
                                    feared that nationalistic and military motives to win the space race would overstep
                                    the scientific method. In the effort to
                                    reach the Moon or Mars first, countries might compromise existing ecosystems in our
                                    Solar System.
                                    <Reference citeID={2}
                                               citation={"https://www.nasa.gov/pdf/607072main_WhenBiospheresCollide-ebook.pdf"}/>
                                    <br/>
                                    <br/>
                                    In 1958, the <a href={"http://www.nasonline.org"} target={"_blank"}
                                                    rel="noreferrer">National Academy of Sciences</a> called for the <a
                                    href={"https://council.science"} rel="noreferrer" target={"_blank"}>International
                                    Council of Scientific Unions</a> (ICSU) to help develop
                                    methods for preventing the contamination of spacecraft. The Committee on
                                    Contamination by Extraterrestrial Exploration (CETEX) was created
                                    to examine which acts in outer space could bring the most contamination. CETEX's
                                    recommendations were then put into a code of conduct
                                    to be managed by a newly established <a href={"https://cosparhq.cnes.fr"}
                                                                            rel="noreferrer" target={"_blank"}>Committee
                                    on Space Research </a> (COSPAR).
                                    <Reference citeID={2}
                                               citation={"https://www.nasa.gov/pdf/607072main_WhenBiospheresCollide-ebook.pdf"}/>
                                    <br/>
                                    <br/>
                                    <a href={"https://www.nasa.gov"} rel="noreferrer" target={"_blank"}>The National
                                        Aeronautics and Space Administration</a> (NASA) was established just days before
                                    COSPAR. COSPAR was originally meant to be
                                    a bridge between the United States and Western Powers and the Soviet Union and
                                    Eastern Powers. Due to COSPAR's wishes, NASA was quick to develop
                                    its planetary quarantine program to protect possible life on other planets.
                                    <Reference citeID={2}
                                               citation={"https://www.nasa.gov/pdf/607072main_WhenBiospheresCollide-ebook.pdf"}/>
                                    <br/>
                                    <br/>
                                    In 1961, the ICSU and COSPAR stated that all countries capable of conducting
                                    experiments in outer space should provide
                                    information necessary to evaluate their potential contamination. COSPAR then
                                    established the
                                    Consultative Group on Potentially Harmful Effects of Space Experiments to perform
                                    these evaluations.
                                    <Reference citeID={3}
                                               citation={"https://www.nap.edu/catalog/25172/review-and-assessment-of-planetary-protection-policy-development-processes"}/>
                                </h4>
                                <h2 className="title">Outer Space Treaty</h2>
                                <h4 className="description">
                                    The <b>Treaty on Principles Governing the Activities of States in the Exploration
                                    and Use of Outer Space, including the Moon and Other Celestial Bodies </b>
                                    otherwise known as the <a
                                    href={"https://www.unoosa.org/oosa/en/ourwork/spacelaw/treaties/introouterspacetreaty.html"}
                                    rel="noreferrer" target={"_blank"}>Outer Space Treaty</a> is a treaty that provides
                                    the basis for international space law.
                                    As of March 2021, all countries that participate in outer space activities are
                                    signatories. Article IX of the Outer Space Treaty
                                    provides guidance on planetary protection stating,
                                    <br/>
                                    <br/>

                                    <Quote
                                        quote={"\"States Parties to the Treaty shall pursue studies of outer space, including the moon and other celestial bodies, and conduct exploration of them so as to avoid their harmful contamination and also adverse changes in the environment of the Earth resulting from the introduction of extraterrestrial matter and, where necessary, shall adopt appropriate measures for this purpose.\""}
                                        speaker={""}
                                        citeID={"4"}
                                        citation={"https://www.unoosa.org/oosa/en/ourwork/spacelaw/treaties/outerspacetreaty.html"}
                                    />

                                    <br/>

                                    A few problems stem from the language used in the treaty. Two main issues are a lack
                                    of guidance in what
                                    measures should be taken to "avoid harmful contamination" as well as a concrete
                                    definition of <span className={"text-info"}>"harmful contamination"</span>.
                                    The second issue is the usage of the term <span className={"text-info"}>"State Party"</span>.
                                    This includes a country's government and government sponsored agencies (such as
                                    NASA).
                                    This does not, however, apply to private and commercial companies who conduct
                                    business in outer space. COSPAR created a Panel on Planetary Protection to provide
                                    guidance on how to <span
                                    className={"text-info"}>"avoid harmful contamination"</span>.
                                    Holding private companies accountable, however, has not been addressed and is
                                    explained further in the <a ><HashLink to={"/concerned"} >Should We Be Concerned</HashLink></a> page.
                                    <br/>
                                    <br/>
                                    It should be noted that the guidelines created by COSPAR are <u>not</u> legally
                                    binding by the Outer Space Treaty.
                                    <Reference citeID={3}
                                               citation={"https://www.nap.edu/catalog/25172/review-and-assessment-of-planetary-protection-policy-development-processes"}/>
                                </h4>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg="8" md="12">
                                <h2 className="title">Extra-Terrestrial Exposure Law</h2>
                                <h4 className="description">
                                    From 1969 - 1977, during the Apollo missions, NASA implemented a set of regulations
                                    known as the Extra-Terrestrial Exposure Law.
                                    Due to the nature of the Apollo missions of sending humans to the Moon and returning
                                    to Earth with lunar samples, NASA created quarantine
                                    regulations for astronauts upon return. Astronauts and materials from these missions
                                    were placed into quarantine for 21 days after landing.
                                    <Reference citeID={5}
                                               citation={"https://history.nasa.gov/afj/ap11fj/pdf/a11-prelaunch-rep1.pdf"}/>
                                    After 1977 and the Apollo missions, it was determined that quarantine was
                                    unnecessary and NASA revoked the rule.
                                </h4>
                                <h2 className={"title"}>Early Sterilization Procedures</h2>
                                <h4 className="description">
                                    In the 1960s and 1970s, there were not as many known sterilization techniques as
                                    there are today. Three
                                    sterilization techniques used at the time were penetrating radiation, sterilizing
                                    gas, and dry heating. However, studies showed, and can be seen in <a>
                                    <HashLink to={"/what-is#simulation"} >this simulation</HashLink></a>,
                                    that radiation does not have as large an impact on microorganisms than it does on
                                    larger beings such as humans. Due to this, radiation was not widely used on
                                    space-faring vehicles.
                                    Sterilization gas and dry heating worked well on microorganisms on the surfaces of
                                    vehicles. However, microorganisms not directly exposed
                                    to the outside would survive.
                                    <Reference citeID={6} citation={"https://history.nasa.gov/SP-4902/ch6.htm"}/>
                                    <br/>
                                    <br/>
                                    Early NASA launches used these techniques to sterilize their vehicles. While most
                                    microorganisms are killed during this,
                                    there is still a possibility that some survived and may have still been viable as
                                    NASA's earlier Ranger missions orbited and
                                    crashed into the Moon.
                                </h4>
                                <h2 className={"title"}>COSPAR Policies</h2>
                                <h3 className={"title"}>Probabilistic Policy</h3>
                                <h4 className="description">
                                    Prior to the 1980s, COSPAR, and thus most of the world, used a probabilistic
                                    approach when protecting space environments.
                                    The following equation was used to determine the probability of contamination for
                                    any given mission.
                                    <br/>
                                    <br/>
                                    <span className={"text-neutral"}> P(c) = mi(O) * P(vt) * P(uv) * P(a) * P(sa) * P(r) * P(g)</span>
                                </h4>
                            </Col>
                        </Row>
                        <Row className={"justify-content-center"}>
                            <Col lg="8" md="12">
                                <h4>
                                    <span style={{color: "#9A9A9A"}}> Where </span>
                                    <br/>
                                    mi(O) <span style={{color: "#9A9A9A"}}>is the initial microbial burden (at launch, after decontamination)</span>
                                    <br/>
                                    P(vt) <span style={{color: "#9A9A9A"}}>is the probability of surviving space vacuum-temperature</span>
                                    <br/>
                                    P(uv) <span style={{color: "#9A9A9A"}}>is the probability of surviving ultraviolet space radiation</span>
                                    <br/>
                                    P(a) <span
                                    style={{color: "#9A9A9A"}}>is the probability of arriving at a planet</span>
                                    <br/>
                                    P(r) <span style={{color: "#9A9A9A"}}>is the probability of release</span>
                                    <br/>
                                    P(g) <span style={{color: "#9A9A9A"}}>is the probability of growth</span>
                                    <br/>

                                </h4>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg="8" md="12">
                                <h4 className="description">
                                    The probability determined by this equation must be less than
                                    1x10<sup>-3</sup> worldwide with each country receiving a specific allocated
                                    probability.
                                    The United States had a probability limit of 4.4x10<sup>-4</sup>. The USSR had a
                                    probability limit of 4.4x10<sup>-4</sup>. All other countries
                                    had a probability limit of 1.2x10<sup>-4</sup>.
                                    <Reference citeID={7}
                                               citation={"https://link.springer.com/referenceworkentry/10.1007%2F978-3-030-22786-9_145-1"}/>

                                </h4>
                                <h3 className={"title"}>Mission Category Policy</h3>
                                <h4 className={"description"}>
                                    In 1984, COSPAR, after pressure from NASA, replaced their probabilistic model with a
                                    mission/target specific categorization model.
                                    Below is an outline of each category as of 2021.
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
                                                    href="#categoryI"
                                                >
                                                    Category I
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({
                                                        active: textTabs === 2,
                                                    })}
                                                    onClick={(e) => setTextTabs(2)}
                                                >
                                                    Category II
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({
                                                        active: textTabs === 3,
                                                    })}
                                                    onClick={(e) => setTextTabs(3)}
                                                >
                                                    Category III
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({
                                                        active: textTabs === 4,
                                                    })}
                                                    onClick={(e) => setTextTabs(4)}
                                                >
                                                    Category IV
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({
                                                        active: textTabs === 5,
                                                    })}
                                                    onClick={(e) => setTextTabs(5)}
                                                >
                                                    Category V
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </CardHeader>
                                    <CardBody>
                                        <TabContent className="tab-space" activeTab={"link" + textTabs}>
                                            <TabPane tabId="link1">
                                                <span style={{textAlign: "center"}}>
                                                    <h3 className={"title"}>Category Type</h3>
                                                    <h4>"Includes any mission to a target body which is not of direct interest for understanding the process of chemical evolution or the origin of life."
                                                        <Reference citeID={8}
                                                                   citation={"https://cosparhq.cnes.fr/assets/uploads/2020/07/PPPolicyJune-2020_Final_Web.pdf"}/>
                                                    </h4>
                                                    <h3 className={"title"}>Mission Examples</h3>
                                                    <h4>Missions to the Sun or Mercury.</h4>
                                                    <h3 className={"title"}>Protection Requirements</h3>
                                                    <h4>No protection procedures are required.</h4>

                                                </span>
                                            </TabPane>
                                            <TabPane tabId="link2">
                                                <span style={{textAlign: "center"}}>
                                                    <h3 className={"title"}>Category Type</h3>
                                                    <h4>"Missions comprise all types of missions to those target bodies where there is significant interest relative to the process of chemical evolution and the origin of life, but where there is only a remote chance that contamination carried by a spacecraft could compromise future investigations."
                                                        <Reference citeID={8}
                                                                   citation={"https://cosparhq.cnes.fr/assets/uploads/2020/07/PPPolicyJune-2020_Final_Web.pdf"}/>
                                                    </h4>
                                                    <h3 className={"title"}>Mission Examples</h3>
                                                    <h4>Missions to the Moon, Venus, and comets.</h4>
                                                    <h3 className={"title"}>Protection Requirements</h3>
                                                    <h4>Simple documentation is required including a short protection plan and pre- and post- launch analyses.</h4>
                                                </span>
                                            </TabPane>
                                            <TabPane tabId="link3">
                                                <span style={{textAlign: "center"}}>
                                                    <h3 className={"title"}>Category Type</h3>
                                                    <h4>"Missions comprise certain types of missions (mostly flyby and orbiter) to a target body of chemical evolution and/or origin of life interest and for which scientific opinion provides a significant chance of contamination which could compromise future investigations."
                                                        <Reference citeID={8}
                                                                   citation={"https://cosparhq.cnes.fr/assets/uploads/2020/07/PPPolicyJune-2020_Final_Web.pdf"}/>
                                                    </h4>
                                                    <h3 className={"title"}>Mission Examples</h3>
                                                    <h4>Flybys of Mars, Europa, Titan</h4>
                                                    <h3 className={"title"}>Protection Requirements</h3>
                                                    <h4>More documentation than Category II, implementation of trajectory biasing, and the use of clean rooms for assembly and testing.</h4>
                                                </span>
                                            </TabPane>
                                            <TabPane tabId="link4">
                                                <span style={{textAlign: "center"}}>
                                                    <h3 className={"title"}>Category Type</h3>
                                                    <h4>"Missions comprise certain types of missions (mostly probe and lander) to a target body of chemical evolution and/or origin of life interest and for which scientific opinion
                                                        provides a significant chance of contamination which could compromise future investigations."
                                                        <Reference citeID={8}
                                                                   citation={"https://cosparhq.cnes.fr/assets/uploads/2020/07/PPPolicyJune-2020_Final_Web.pdf"}/>
                                                    </h4>
                                                    <h3 className={"title"}>Mission Examples</h3>
                                                    <h4>Rovers and Probes of Mars, Europa, Titan</h4>
                                                    <h3 className={"title"}>Protection Requirements</h3>
                                                    <h4>All procedures from category III with additional documentation, as well as decontamination and sterilization. Missions to Mars are split in the following subcategories:</h4>
                                                    <h3>Category IVa</h3>
                                                    <h4>Landers that do not search for life. They must contain less than 300,000 spores, and an average of less than 300 microbial spores per square meter.</h4>
                                                    <h3>Category IVb</h3>
                                                    <h4>Landers that search for life. They must comply with Category IVa as well as all instruments used for search must have a surface bioburden of less than 30 spores and a way to prevent recontamination of sterilized subsystems.</h4>
                                                    <h3>Category IVc</h3>
                                                    <h4>Any component that goes to a "special region" of Mars defined as "a region within which terrestrial organisms are likely to replicate". All landing systems and instruments that will be within the region must be sterilized to less than 30 spores.</h4>
                                                </span>
                                            </TabPane>
                                            <TabPane tabId="link5">
                                                <span style={{textAlign: "center"}}>
                                                    <h3 className={"title"}>Category Type</h3>
                                                    <h4>"Any Earth-return mission."
                                                        <Reference citeID={8}
                                                                   citation={"https://cosparhq.cnes.fr/assets/uploads/2020/07/PPPolicyJune-2020_Final_Web.pdf"}/>
                                                    </h4>
                                                    <h3 className={"title"}>Mission Examples</h3>
                                                    <h4>Restricted Earth Return - Mars, Europa, others TBD</h4>
                                                    <h4>Unrestricted Earth Return - Moon, Venus, others TBD</h4>
                                                    <h3 className={"title"}>Protection Requirements</h3>
                                                    <h4>Restricted Earth Return - All requirements of category IVb must be met, all returned hardware that touched a planet must be contained, all unsterilized samples must be closed in sealed containers before arrival on Earth.</h4>
                                                    <h4>Unrestricted Earth Return - No requirements.</h4>
                                                </span>
                                            </TabPane>
                                        </TabContent>
                                    </CardBody>
                                </Card>

                                <h2 className={"title"}>Mars Rovers</h2>
                                <h4 className="description">
                                    In accordance with COSPAR's mission category policy above, each of NASA's Mars
                                    rovers have been classified as category IVa or IVb.
                                    The process for cleaning and sterilizing each rover is to continuously wipe down
                                    each part with an alcohol solution as the rover is built.
                                    Parts of the rover that can withstand extreme temperature are then heated up to about
                                    110°C (230°F) to kill remaining bacteria.
                                    Parts such as computer components that are too small or fragile to clean are sealed
                                    into airtight boxes to prevent microorganisms inside from escaping.
                                    <Reference citeID={9}
                                               citation={"https://mars.nasa.gov/mer/mission/technology/planetary-protection/"}/>
                                </h4>
                            </Col>
                        </Row>
                    </Container>

                    <CleaningGame/>

                    <Row className="justify-content-center" id={"private"}>
                        <Col lg="8" md="12">
                            <h2 className="title">What Is Missing?</h2>
                            <h4 className="description text-danger">
                                Today, most countries capable of accessing outer space follow COSPAR's mission category
                                system.
                                This system has worked well over the past few decades but unfortunately is not legally
                                binding and only applies to those
                                actors who are a part of COSPAR. This means that commercial companies around the world
                                who are beginning to conduct business in
                                outer space are not required to follow COSPAR or the Outer Space Treaty. Article VI of
                                the Outer Space Treaty requires that all
                                states bear responsibility for the actions of their non-governmental entities and that
                                their activities require state authorization.
                                <Reference citeID={4}
                                           citation={"https://www.unoosa.org/oosa/en/ourwork/spacelaw/treaties/outerspacetreaty.html"}/>
                                <br/>
                                <br/>
                                This, however, does not mean that non-governmental entities are liable to the same
                                planetary protection standards outlined by COSPAR.
                                As more commercial companies such as SpaceX, Blue Origin, and Virgin Galactic begin
                                launching rockets and satellites,
                                now is the time, more than ever, to subject them to the same planetary protection
                                standards utilized by state-sponsored agencies in
                                order to prevent contamination of the Solar System and of Earth.

                            </h4>
                        </Col>
                    </Row>

                    <section className="section" style={{marginTop: "30px"}}>
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
                                            <Button color="primary" tag={Link} to={"/concerned"}>
                                                Explore
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>



                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="8" md="12">
                                <h4 className={"title"}> Game Graphics Credits </h4>
                                <h4 className={"description"}>
                                    <a href="https://mars.nasa.gov/resources/25042/mars-perseverance-rover-3d-model/">Perseverance
                                        3D Model </a>by NASA/JPL-Caltech
                                    <br/>
                                    <a href="https://images.nasa.gov/details-PIA23164">Clean room image</a> taken by
                                        NASA
                                    <br/>
                                    <a href="https://spaceplace.nasa.gov/mars-2020/en/">Children's Perseverance image</a> by
                                        NASA
                                </h4>
                            </Col>
                        </Row>


                    </Container>

                    <Citations references={[
                        {
                            citeID: 1,
                            citation: <p key={1.1}><a href="https://science.sciencemag.org/content/132/3424/393"
                                                      className="text-primary">{"1)"} </a>
                                Lederberg, Joshua. “Exobiology: Approaches to Life beyond the
                                Earth.” <i>Science</i> 132, no. 3424 (August 12, 1960): 393–400.
                                <a href="https://doi.org/10.1126/science.132.3424.393">
                                    https://doi.org/10.1126/science.132.3424.393
                                </a>.
                            </p>
                        },
                        {
                            citeID: 2,
                            citation: <p key={2.1}><a
                                href="https://www.nasa.gov/pdf/607072main_WhenBiospheresCollide-ebook.pdf"
                                className="text-primary">{"2)"} </a>
                                Meltzer, Michael. <i>When Biospheres Collide : A History of NASA’s Planetary Protection
                                    Programs</i>. Vol. 4234. NASA History Series. NASA Aeronautics and Space
                                Administration, 2010.
                                <a href="https://www.nasa.gov/pdf/607072main_WhenBiospheresCollide-ebook.pdf">
                                    https://www.nasa.gov/pdf/607072main_WhenBiospheresCollide-ebook.pdf
                                </a>.
                            </p>
                        },
                        {
                            citeID: 3,
                            citation: <p key={3.1}><a
                                href="https://www.nap.edu/catalog/25172/review-and-assessment-of-planetary-protection-policy-development-processes"
                                className="text-primary">{"3)"} </a>
                                National Academies of Sciences, Engineering. <i>Review and Assessment of Planetary
                                    Protection Policy Development Processes</i>, 2018.
                                <a href="https://doi.org/10.17226/25172">
                                    https://doi.org/10.17226/25172
                                </a>.
                            </p>
                        },
                        {
                            citeID: 4,
                            citation: <p key={4.1}><a
                                href="https://www.unoosa.org/oosa/en/ourwork/spacelaw/treaties/outerspacetreaty.html"
                                className="text-primary">{"4)"} </a>
                                United Nations. “Treaty on Principles Governing the Activities of States in the
                                Exploration and Use of Outer Space, Including the Moon and Other Celestial Bodies.”
                                Accessed November 13, 2020.
                                <a href="https://www.unoosa.org/oosa/en/ourwork/spacelaw/treaties/introouterspacetreaty.html">
                                    https://www.unoosa.org/oosa/en/ourwork/spacelaw/treaties/introouterspacetreaty.html
                                </a>.
                            </p>
                        },
                        {
                            citeID: 5,
                            citation: <p key={5.1}><a
                                href="https://history.nasa.gov/afj/ap11fj/pdf/a11-prelaunch-rep1.pdf"
                                className="text-primary">{"5)"} </a>
                                Phillips, Sam. “Apollo 11 Prelaunch Mission Operation Report.” Program and Special
                                Reports Division (XP), July 8, 1969.
                                <a href="https://history.nasa.gov/afj/ap11fj/pdf/a11-prelaunch-rep1.pdf">
                                    https://history.nasa.gov/afj/ap11fj/pdf/a11-prelaunch-rep1.pdf
                                </a>.
                            </p>
                        },
                        {
                            citeID: 6,
                            citation: <p key={6.1}><a href="https://history.nasa.gov/SP-4902/ch6.htm"
                                                      className="text-primary">{"6)"} </a>
                                Hall, Lawrence. “SP-4902 The Planetary Quarantine Program.” NASA, 1973.
                                <a href="https://history.nasa.gov/SP-4902/foreword.htm">
                                    https://history.nasa.gov/SP-4902/foreword.htm
                                </a>.
                            </p>
                        },
                        {
                            citeID: 7,
                            citation: <p key={7.1}><a
                                href="https://link.springer.com/referenceworkentry/10.1007%2F978-3-030-22786-9_145-1"
                                className="text-primary">{"7)"} </a>
                                Tennen, Leslie I. “The Role of COSPAR for Space Security and Planetary Protection.”
                                In <i>Handbook of Space Security: Policies, Applications and Programs</i>, 1–22. Cham:
                                Springer International Publishing, 2020.
                                <a href="https://doi.org/10.1007/978-3-030-22786-9_145-1">
                                    https://doi.org/10.1007/978-3-030-22786-9_145-1
                                </a>.
                            </p>
                        },
                        {
                            citeID: 8,
                            citation: <p key={8.1}><a
                                href="https://cosparhq.cnes.fr/assets/uploads/2020/07/PPPolicyJune-2020_Final_Web.pdf"
                                className="text-primary">{"8)"} </a>
                                Committee on Space Research. “COSPAR Policy on Planetary Protection.” <i>Space Research
                                    Today</i> 208 (August 2020): 10–22.
                                <a href="https://doi.org/10.1016/j.srt.2020.07.009">
                                    https://doi.org/10.1016/j.srt.2020.07.009
                                </a>.
                            </p>
                        },
                        {
                            citeID: 9,
                            citation: <p key={9.1}><a
                                href="https://mars.nasa.gov/mer/mission/technology/planetary-protection/"
                                className="text-primary">{"9)"} </a>
                                mars.nasa.gov. “Planetary Protection Technologies.” Accessed February 19, 2021.
                                <a href="https://mars.nasa.gov/mer/mission/technology/planetary-protection/">
                                    https://mars.nasa.gov/mer/mission/technology/planetary-protection/
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

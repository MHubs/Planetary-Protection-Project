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
import {Col, Container, Row} from "reactstrap";
import Reference from "../components/Footer/Reference";
import Citations from "../components/Footer/Citations";
import PlanetGame from "./Simulations/PlanetGame";
import {HashLink} from "react-router-hash-link";


export default function FutureView(props) {
    React.useEffect(() => {
        document.body.classList.toggle("index-page");
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("index-page");
        };
    }, []);
    return (
        <>
            <IndexNavbar name={props.name}/>
            <div className="wrapper">
                <PageHeader subtitle={""} title={"The Future of Planetary Protection"} scroll={"Learn More"}/>
                <div className="section section-nucleo-icons" id={"ScrollTo"}>
                    <Container>
                        <span className={"description"}>
                        <Quote
                            quote={"\"It used to be a space race between countries, and now it’s a space race between billionaires.\""}
                            speaker={"Anoop Menon, Professor at University of Pennsylvania"}
                            citeID={"1"}
                            citation={"https://knowledge.wharton.upenn.edu/article/commercial-space-economy/"}

                        />
                        </span>

                        <Row className="justify-content-center">
                            <Col lg="8" md="12">

                                <h1 className="title">The Future of Planetary Protection</h1>
                                <h2 className="title">The New Space Race</h2>
                                <h4 className="description">
                                    Greater numbers of commercial endeavors into space have been occurring over the past
                                    few years.
                                    <Reference citeID={2}
                                               citation={"https://www.theverge.com/2019/12/11/20981714/spacex-commercial-spaceflight-space-industry-decade-nasa-business"}/>
                                    The <a href={"http://www.commercialspaceflight.org/"} rel={"noreferrer"}> Commercial Spaceflight Federation</a>, a group of businesses and organizations looking
                                    to advance the private space industry, has over 50 members.
                                    <Reference citeID={3} citation={"http://www.commercialspaceflight.org/members/"}/>
                                    Exploration of outer space is no longer exclusive to State-actors of countries. Now, anyone with enough money and time can
                                    found a company and reach the stars. Many companies are looking to reach asteroids or the Moon and mine it looking for "space-resources",
                                    a proposed billion dollar industry.
                                    <Reference citeID={4} citation={"https://www.statista.com/topics/3279/space-mining/"}/>
                                    Some asteroids, such as Davida, have an estimated value of <span className={"text-success"}>26.99 quintillion ($26,990,000,000,000,000,000) dollars</span>.
                                    It is this absurd amount of money that makes companies eager to venture into outer space as fast as possible.
                                    This, unfortunately, can lead to gaps in following planetary protection guidelines.
                                    <br/>
                                    <br/>
                                    As noted in the <a><HashLink to={"/concerned#private"} > previous section</HashLink></a>, commercial companies do not seem eager
                                    to address the international planetary protection standards put out by COSPAR. The scientific community and space
                                    agencies, even after the tardigrades were confirmed aboard the Beresheet mission, have not taken meaningful action
                                    to prevent this from happening again. It is imperative that measures be established to prevent commercial companies
                                    from circumventing planetary protection guidelines.
                                </h4>

                                <h2 className="title">The Issues With International Treaties</h2>
                                <h4 className="description">
                                    A main issue with planetary protection guidelines are that they are merely guidelines. They are not binding
                                    to any State or space agency. Should an agency decide to not implement them, there is no way action can be enforced
                                    against that agency so long as they still avoid "harmful contamination" as outlined by the Outer Space Treaty. The current
                                    guidelines have remained strong due to space exploration being dominated by the scientific community who wish to practice them.
                                    <br/>
                                    <br/>
                                    One proposed solution is a treaty that legally binds all international signatories as well as private entities to adhere to specific
                                    planetary protection standards. While this would be beneficial and unite multiple countries at once, it can take multiple years to
                                    develop treaties and it would not be effective unless all major countries with businesses in outer space sign on. Another aspect is
                                    that scientific views on planetary protection can change frequently. COSPAR meets to discuss changes to its policy every other year.
                                    This would mean that a treaty may have to be renegotiated every other year which is difficult to maintain.
                                    Poorly structured and worded treaties also leave loopholes that commercial entities will attempt to abuse in order to save time
                                    and money.
                                </h4>

                                <h2 className="title">What Must Happen Nationally</h2>
                                <h4 className="description">
                                    To solve the problem without international treaties, it would be wise to allow States who are signed to the
                                    Outer Space Treaty to create national laws on planetary protection standards. National laws are beneficial since
                                    they can generally be passed quicker than treaties and can be updated more frequently. Moreover, Article VI of the
                                    Outer Space Treaty leaves signatory States liable for all actions in outer space by non-governmental actors. This article also
                                    says that States must grant permission to non-governmental actors in order for them to conduct launches.
                                    <Reference citeID={5}
                                    citation={"https://www.unoosa.org/oosa/en/ourwork/spacelaw/treaties/outerspacetreaty.html"}/>
                                    <br/>
                                    <br/>
                                    This means that States have a required obligation to make sure that non-governmental actors follow the Outer Space Treaty,
                                    and more specifically avoid "harmful contamination". If national laws are put in place to ensure that planetary protection
                                    practices are implemented in order to obtain a "license to launch", then commercial organizations would be forced to uphold the
                                    scientifically approved planetary protection standards and thus preventing the "harmful contamination" of outer space.
                                    <br/>
                                    <br/>
                                    The practices outlined in these laws should reference a mixture of COSPAR's planetary protection guidelines and any additional
                                    practices outlined by that State's governmental space agency (if one exists). These practices will form the standard of what
                                    should be required by law in order for a non-governmental actor to obtain a license to utilize outer space.
                                </h4>

                                <h1 className="title">Expanding On Traditional Planetary Protection</h1>
                                <h2 className="title">Planetary Protection and Environmental Issues</h2>
                                <h4 className="description">
                                    With greater utilization of outer space by commercial companies who are there for non-scientific aspects,
                                    planetary protection can be expanded to consider environmental issues that arise as a result. For example, the issues Earth
                                    has with "space junk" could soon be seen on the Moon and Mars.
                                    <Reference citeID={6}
                                               citation={"https://www.frontiersin.org/articles/10.3389/fspas.2020.589817/full"}/>
                                    <br/>
                                    <br/>
                                    Future mining operations on the Moon and Mars will be done for purely commercial reasons. Greenhouse gasses have the potential
                                    to pollute these celestial bodies as humans attempt to take up continuous residence. This inherently ties planetary protection
                                    to environmental protection. This link has the possibility to strengthen the argument for planetary protection measures as
                                    environmental protection issues are commonly talked about on Earth.
                                    <Reference citeID={6}
                                               citation={"https://www.frontiersin.org/articles/10.3389/fspas.2020.589817/full"}/>
                                    <br/>
                                    <br/>
                                    An interesting aspect of environmental space protections raised by <a href={"http://www.open.ac.uk/people/telc3"} target="_blank" rel={"noreferrer"}> Thomas Cheney</a>,
                                    Faculty of Science, Business, and Law at The Open University in the United Kingdom, and his collaborators was the issue of "space junk"
                                    in accordance with Article I of the Outer Space Treaty. The article describes that all states have "free access" to all areas of outer space
                                    similar to the United Nations Convention on the Law of the Sea. If "space junk" becomes a "hazard of navigation" that could prevent "free access"
                                    to outer space, the need for cleanup will have to be considered.
                                    <Reference citeID={6} citation={"https://www.frontiersin.org/articles/10.3389/fspas.2020.589817/full"}/>
                                    <br/>
                                    <br/>
                                    Since space is not a terrestrial environment such as Earth, it doesn't have the capacity to attempt to "naturally heal"
                                    itself. Meaning that if we contaminate outer space, we have potentially ruined it forever. The natural space environment
                                    is in need of protecting. By coupling environmental protections with planetary protections, which can then be placed into
                                    State law as required in order to obtain licenses to launch vehicles to outer space, we can preserve the natural environment
                                    for future generations to explore.
                                </h4>
                            </Col>
                        </Row>

                        <PlanetGame/>

                        <Container>
                            <Row className="justify-content-center">
                                <Col lg="8" md="12">
                                    <h4 className={"title"}> Additional Game Credits </h4>
                                    <h4 className={"description"}>
                                        <p><a href={"https://grabcad.com/library/ariane-44lp-1"} target={"_blank"}
                                              rel={"noreferrer"}> "Ariane 44LP" </a> by Hans de Ridder.</p>
                                        <br/>
                                        <p><a href={"https://www.thingiverse.com/thing:4723130"} target={"_blank"}
                                              rel={"noreferrer"}>"New Glenn"</a> by Celeste_El is licensed under <a
                                            href={"http://creativecommons.org/licenses/by/4.0/"} target={"_blank"}
                                            rel={"noreferrer"}>Creative Commons Attribution</a>.</p>
                                        <br/>
                                        <p><a
                                            href={"https://sketchfab.com/3d-models/falcon-9-spacex-rocket-58784d6b55ad47d2985f353459759f06"}
                                            target={"_blank"} rel={"noreferrer"}> "Falcon 9" </a> by artemycz is licensed
                                            under <a href={"http://creativecommons.org/licenses/by/4.0/"}
                                                     target={"_blank"} rel={"noreferrer"}>Creative Commons Attribution</a>.
                                        </p>
                                        <br/>
                                        <p><a href={"https://solarsystem.nasa.gov/moons/earths-moon/overview/"}
                                              target={"_blank"} rel={"noreferrer"}>"Moon"</a> by NASA.</p>
                                        <br/>
                                        <p><a href={"https://github.com/SebLague/Solar-System"} target={"_blank"}
                                              rel={"noreferrer"}> Solar System Template </a> by Sebastian Lague</p>
                                        <br/>
                                        <p>Sound effects obtained from <a href={"https://www.zapsplat.com"}
                                                                          target={"_blank"}
                                                                          rel={"noreferrer"}>https://www.zapsplat.com</a>
                                        </p>
                                    </h4>
                                </Col>
                            </Row>

                        </Container>

                    </Container>


                    <Citations references={[
                        {
                            citeID: 1,
                            citation: <p key={1.1}><a href="https://knowledge.wharton.upenn.edu/article/commercial-space-economy/" className="text-primary">{"1)"} </a>
                                Knowledge@Wharton. “The Commercial Space Economy: Business Is Making a ‘Giant Leap.’” Knowledge@Wharton. Accessed March 10, 2021.
                                <a href="https://knowledge.wharton.upenn.edu/article/commercial-space-economy/">
                                    https://knowledge.wharton.upenn.edu/article/commercial-space-economy/
                                </a>.
                            </p>
                        },
                        {
                            citeID: 2,
                            citation: <p key={2.1}><a href="https://www.theverge.com/2019/12/11/20981714/spacex-commercial-spaceflight-space-industry-decade-nasa-business" className="text-primary">{"2)"} </a>
                                Grush, Loren. “This Was the Decade the Commercial Spaceflight Industry Leapt Forward.” The Verge, December 11, 2019.
                                <a href="https://www.theverge.com/2019/12/11/20981714/spacex-commercial-spaceflight-space-industry-decade-nasa-business">
                                    https://www.theverge.com/2019/12/11/20981714/spacex-commercial-spaceflight-space-industry-decade-nasa-business
                                </a>.
                            </p>
                        },
                        {
                            citeID: 3,
                            citation: <p key={3.1}><a href="http://www.commercialspaceflight.org/members/" className="text-primary">{"3)"} </a>
                                Commercial Spaceflight Federation. “Members - Commercial Spaceflight Federation.” Accessed November 15, 2020.
                                <a href="http://www.commercialspaceflight.org/members/">
                                    http://www.commercialspaceflight.org/members/
                                </a>.
                            </p>
                        },
                        {
                            citeID: 4,
                            citation: <p key={4.1}><a href="https://www.statista.com/topics/3279/space-mining/" className="text-primary">{"4)"} </a>
                                Garside, M. “Topic: Space Mining.” Statista. Accessed March 25, 2021.
                                <a href="https://www.statista.com/topics/3279/space-mining/">
                                    https://www.statista.com/topics/3279/space-mining/
                                </a>.
                            </p>
                        },
                        {
                            citeID: 5,
                            citation: <p key={5.1}><a href="https://www.unoosa.org/oosa/en/ourwork/spacelaw/treaties/outerspacetreaty.html" className="text-primary">{"5)"} </a>
                                United Nations. “Treaty on Principles Governing the Activities of States in the Exploration and Use of Outer Space, Including the Moon and Other Celestial Bodies.” Accessed November 13, 2020.
                                <a href="https://www.unoosa.org/oosa/en/ourwork/spacelaw/treaties/introouterspacetreaty.html">
                                    https://www.unoosa.org/oosa/en/ourwork/spacelaw/treaties/introouterspacetreaty.html
                                </a>.
                            </p>
                        },
                        {
                            citeID: 6,
                            citation: <p key={6.1}><a href="https://www.frontiersin.org/articles/10.3389/fspas.2020.589817/full" className="text-primary">{"6)"} </a>
                                Cheney, Thomas, Christopher Newman, Karen Olsson-Francis, Scott Steele, Victoria Pearson, and Simon Lee. “Planetary Protection in the New Space Era: Science and Governance.” <i>Frontiers in Astronomy and Space Sciences</i> 7 (2020).
                                <a href="https://doi.org/10.3389/fspas.2020.589817">
                                    https://doi.org/10.3389/fspas.2020.589817
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

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
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
} from "reactstrap";

export default function IndexNavbar(props) {

  const [collapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  },[]);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };

  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand id="navbar-brand" tag={Link} to={"/"}>
              <span>Planetary Protection <i className="tim-icons icon-spaceship" /></span>
          </NavbarBrand>
        </div>
        <Collapse
          className={collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
          style={{position:"absolute", right: "15%"}}
        >

          <Nav navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                {props.name}
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem tag={Link} to={"/"} style={{color:"#4c4c4c"}}>
                  <i className="tim-icons icon-spaceship" />
                  Home
                </DropdownItem>
                <DropdownItem tag={Link} to={"/what-is"} style={{color:"#4c4c4c"}}>
                    <i className="tim-icons icon-world" />
                    What is Planetary Protection?
                </DropdownItem>
                <DropdownItem tag={Link} to={"/previous-efforts"} style={{color:"#4c4c4c"}}>
                    <i className="tim-icons icon-bullet-list-67" />
                    Previous Protection Efforts
                </DropdownItem>
                <DropdownItem tag={Link} to={"/concerned"} style={{color:"#4c4c4c"}}>
                    <i className="tim-icons icon-single-02" />
                    Should We Be Concerned?
                </DropdownItem>
                <DropdownItem tag={Link} to={"/future"} style={{color:"#4c4c4c"}}>
                    <i className="tim-icons icon-image-02" />
                    Future of Planetary Protection
                </DropdownItem>
                <DropdownItem href="https://github.com/MHubs/Planetary-Protection-Project" style={{color:"#4c4c4c"}}>
                  <i className="tim-icons icon-paper" />
                  Documentation
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

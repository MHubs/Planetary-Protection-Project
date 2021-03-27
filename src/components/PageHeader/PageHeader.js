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

// reactstrap components
import {Button, Container} from "reactstrap";

export default function PageHeader(props) {


    return (
    <div className="page-header header-filter">
      <div className="squares square1" style={{borderRadius: '50%'}}/>
      <div className="squares square2" style={{borderRadius: '50%'}}/>
      <div className="squares square3" style={{borderRadius: '50%'}}/>
      <div className="squares square4" style={{borderRadius: '50%'}}/>
      <div className="squares square5" style={{borderRadius: '50%'}}/>
      <div className="squares square6" style={{borderRadius: '50%'}}/>
      <div className="squares square7" style={{borderRadius: '50%'}}/>
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo">{props.title != null ? props.title : "Killing the Solar System"}</h1>
          <h3 className="d-none d-sm-block">
              {props.subtitle != null ? props.subtitle : "The Urgent Need to Update and Reimagine Planetary Protection for the 21st Century"}
          </h3>
            <Button
                className="btn-simple btn-round"
                color="primary"
                type="button"
                onClick={() => {document.getElementById("ScrollTo").scrollIntoView({behavior: 'smooth'});}}
            >
                {props.scroll}
            </Button>
        </div>
      </Container>
    </div>
  );
}

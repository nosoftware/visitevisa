import React from "react";
import { Link } from "react-router-dom";
import TopCarousel from "../sectionsBlock/top_visa_carousel.js";
import RequrementSlider from "../sectionsBlock/requirements_carousel.js";


// reactstrap components
import {
  // Button,
  Container,
  Row,
  Col,
  Media,
} from "reactstrap";


function VisiteVisaStep() {
  
  return (
    <>
    
       
<div className="section section-step">
  <Container>
    <Row>
      <Col md="6">
      <h2 className="title text-uppercase">Apply for your visa in
        3 easy steps</h2>
      <p> To apply online, use any working device with an internet connection. Make sure you meet all of the requirements specified for each destination and your country of origin.
        
        Once you have the necessary documents ready, select the destination you want to go to on the left-hand bar. Then follow these steps to complete your application: </p>
      <p className="p-3 bg-primary text-white"> Please note that these are the basic requirements. Each country can have different visa requirements to meet before making the application. In some cases, you may need to attach some additional documents or a photograph. </p>
      </Col>
      <Col md="6">
      <Media list>
      <Media tag="li">
      <Media left middle href="#" className="align-self-center mr-3">
      <Media object src={require("assets/img/list1-icon.png").default} alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading> Fill the application form </Media>
        Provide your data, e-mail address, passport details, the purpose of your travel, and any other required information. Attach additional documents if the destination you chose requires this. </Media>
      </Media>
      <Media tag="li">
      <Media left middle href="#" class="align-self-center mr-3">
      <Media object src={require("assets/img/list2-icon.png").default} alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading> Register an online payment </Media>
        Pay the handling visa fee using any of the available methods of online payment. Once your payment is registered, move on to the next step </Media>
      </Media>
      <Media tag="li">
      <Media left middle href="#" class="align-self-center mr-3">
      <Media object src={require("assets/img/list3-icon.png").default} alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading> Check your inbox </Media>
        Immediately after the application approval, the eVisa arrives in your e-mail box. Make sure to put the correct one in the form to receive your permit without issues or delays. </Media>
      </Media>
      </Media>
      </Col>
    </Row>
  </Container>
</div>
<div className="section requirements_slider">
  <div className="requrement_slider_holder">
  <Container>
    <Row>
      <Col md="12">
      <h3 className="title m-0">Requirements to meet for an eVisa</h3>
      <p>Before applying, please make sure that you have the following:</p>
      </Col>
      <Col md="12" >
      <RequrementSlider />
      </Col>
    </Row>
    </Container>
    </div>
    <Container>
    {/* flag holder */}
    <Row>
      <Col md="12" className="text-center">
      <h3 className="title mb-5">Choose your destination country</h3>
      </Col>
    </Row>
    <div className="flag_holder">
      <Row>
        <Col 
        to="/getvisadetails"                
        tag={Link}
        md="3" className="flags mb-3">
        <img
alt="..."
className="pull-left mr-2"
src={require("assets/img/flagsb/am.png").default}
></img>
        <p >Armenia</p>
        </Col>
        <Col md="3" className="flags mb-3">
        <img
alt="..."
className="pull-left mr-2"
src={require("assets/img/flagsb/au.png").default}
></img>
        <p >Australia</p>
        </Col>
        <Col md="3" className="flags mb-3">
        <img
alt="..."
className="pull-left mr-2"
src={require("assets/img/flagsb/az.png").default}
></img>
        <p >Azerbaijan</p>
        </Col>
        <Col md="3" className="flags mb-3">
        <img
alt="..."
className="pull-left mr-2"
src={require("assets/img/flagsb/bs.png").default}
></img>
        <p >Bahamas</p>
        </Col>
        <Col md="3" className="flags mb-3">
        <img
alt="..."
className="pull-left mr-2"
src={require("assets/img/flagsb/bh.png").default}
></img>
        <p >Bahrain</p>
        </Col>
        <Col md="3" className="flags mb-3">
        <img
alt="..."
className="pull-left mr-2"
src={require("assets/img/flagsb/bd.png").default}
></img>
        <p >Bangladesh</p>
        </Col>
        <Col md="3" className="flags mb-3">
        <img
alt="..."
className="pull-left mr-2"
src={require("assets/img/flagsb/bj.png").default}
></img>
        <p >Benin</p>
        </Col>
        <Col md="3" className="flags mb-3">
        <img
alt="..."
className="pull-left mr-2"
src={require("assets/img/flagsb/br.png").default}
></img>
        <p >Brazil</p>
        </Col>
        <Col md="3" className="flags mb-3">
        <img
alt="..."
className="pull-left mr-2"
src={require("assets/img/flagsb/kh.png").default}
></img>
        <p >Cambodia</p>
        </Col>
        <Col md="3" className="flags mb-3">
        <img
alt="..."
className="pull-left mr-2"
src={require("assets/img/flagsb/ca.png").default}
></img>
        <p >Canada</p>
        </Col>
        <Col md="3" className="flags mb-3">
        <img
alt="..."
className="pull-left mr-2"
src={require("assets/img/flagsb/co.png").default}
></img>
        <p >Colombia</p>
        </Col>
        <Col md="3" className="flags mb-3">
        <img
alt="..."
className="pull-left mr-2"
src={require("assets/img/flagsb/eg.png").default}
></img>
        <p >Egypt</p>
        </Col>
      </Row>
    
    </div>
  </Container>
</div>
<TopCarousel />


      
    </>
  );
}

export default VisiteVisaStep;

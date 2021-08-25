import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import DefaultFooter from "../components/Footers/DefaultFooter.js";
import IndexHeader from "../components/Headers/IndexHeader.js";
import VisiteVisaStep from "./sectionsBlock/VisiteStep.js";



function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />

        <VisiteVisaStep />

        <DefaultFooter />
      </div>
    </>
  );
}

export default Index;

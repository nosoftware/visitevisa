import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

// core components
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
      Card,
       CardTitle,
      //  CardBody,
        CardText,
         CardImg,
          CardImgOverlay 
} from "reactstrap";



function RequrementSlider() {

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      responsive: [
      
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]







  };
  
  return (
    <>
    
    <Slider {...settings} >
      

      <div className="p-2">
      <Card inverse className="shadow-none base_holder">
        <CardImg width="100%" src={require("assets/img/bg1.jpg").default} alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle tag="h5">A valid passport</CardTitle>
          <CardText>
          <p>All applicants need to have a valid passport to apply online. In most cases, it is advised that the passport validity exceeds at least 6 months ahead from the planned date of arrival in the country of destination.
                    ice.</p>
            <button
                 className="btn-round border-none"
                  color="white" 
                   to="/landing-page"                
                   tag={Link}
                 >read more</button>
          </CardText>
        </CardImgOverlay>
      </Card>
      </div>
      <div className="p-2">
      <Card inverse className="shadow-none base_holder">
        <CardImg width="100%" src={require("assets/img/bg1.jpg").default} alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle tag="h5">A valid passport</CardTitle>
          <CardText>
          <p>All applicants need to have a valid passport to apply online. In most cases, it is advised that the passport validity exceeds at least 6 months ahead from the planned date of arrival in the country of destination.
                    ice.</p>
            <button
                 className="btn-round border-none"
                  color="white" 
                   to="/landing-page"                
                   tag={Link}
                 >read more</button>
          </CardText>
        </CardImgOverlay>
      </Card>
      </div>
      <div className="p-2">
      <Card inverse className="shadow-none base_holder">
        <CardImg width="100%" src={require("assets/img/bg1.jpg").default} alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle tag="h5">A valid passport</CardTitle>
          <CardText>
          <p>All applicants need to have a valid passport to apply online. In most cases, it is advised that the passport validity exceeds at least 6 months ahead from the planned date of arrival in the country of destination.
                    ice.</p>
            <button
                 className="btn-round border-none"
                  color="white" 
                   to="/landing-page"                
                   tag={Link}
                 >read more</button>
          </CardText>
        </CardImgOverlay>
      </Card>
      </div>
      <div className="p-2">
      <Card inverse className="shadow-none base_holder">
        <CardImg width="100%" src={require("assets/img/bg1.jpg").default} alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle tag="h5">A valid passport</CardTitle>
          <CardText>
          <p>All applicants need to have a valid passport to apply online. In most cases, it is advised that the passport validity exceeds at least 6 months ahead from the planned date of arrival in the country of destination.
                    ice.</p>
            <button
                 className="btn-round border-none"
                  color="white" 
                   to="/landing-page"                
                   tag={Link}
                 >read more</button>
          </CardText>
        </CardImgOverlay>
      </Card>
      </div>




     
    </Slider>


    </>
  );
}

export default RequrementSlider;

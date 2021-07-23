import React from "react";
import Slider from "react-slick";
 import { Link } from "react-router-dom";

// core components
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
      Card,
      CardTitle,
      CardBody,
       CardText,
        CardImg,
        //  CardImgOverlay, 
         CardFooter

 } from "reactstrap";



function SimpleSlider() {

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
      speed: 2000,
      autoplaySpeed: 10000,
      cssEase: "linear",
      responsive: [
      
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
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
    <div className="top_most_slider_holder" >
<h3 className="title text-center">Top 10 most requested visas</h3>
    
    <Slider {...settings} >

   

      <div className="p-2">
      <Card  className="shadow-sm base_holder"
      to="/landing-page"                
      tag={Link}
      >
        <CardImg width="100%" src={require("assets/img/bg1.jpg").default} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">India Visa</CardTitle>
          <CardText>
          From : $200
          </CardText>
        </CardBody>
        <CardFooter>
        2-3 business days 
        </CardFooter>
      </Card>
      </div>
      <div className="p-2">
      <Card  className="shadow-sm base_holder"
      to="/landing-page"                
      tag={Link}
      >
        <CardImg width="100%" src={require("assets/img/bg4.jpg").default} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">India Visa</CardTitle>
          <CardText>
          From : $200
          </CardText>
        </CardBody>
        <CardFooter>
        2-3 business days 
        </CardFooter>
      </Card>
      </div>
      <div className="p-2">
      <Card  className="shadow-sm base_holder"
      to="/landing-page"                
      tag={Link}
      >
        <CardImg width="100%" src={require("assets/img/bg3.jpg").default} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">India Visa</CardTitle>
          <CardText>
          From : $200
          </CardText>
        </CardBody>
        <CardFooter>
        2-3 business days 
        </CardFooter>
      </Card>
      </div>
      <div className="p-2">
      <Card  className="shadow-sm base_holder"
      to="/landing-page"                
      tag={Link}
      >
        <CardImg width="100%" src={require("assets/img/bg4.jpg").default} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">India Visa</CardTitle>
          <CardText>
          From : $200
          </CardText>
        </CardBody>
        <CardFooter>
        2-3 business days 
        </CardFooter>
      </Card>
      </div>
      <div className="p-2">
      <Card  className="shadow-sm base_holder"
      to="/landing-page"                
      tag={Link}
      >
        <CardImg width="100%" src={require("assets/img/bg5.jpg").default} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">India Visa</CardTitle>
          <CardText>
          From : $200
          </CardText>
        </CardBody>
        <CardFooter>
        2-3 business days 
        </CardFooter>
      </Card>
      </div>
      <div className="p-2">
      <Card  className="shadow-sm base_holder"
      to="/landing-page"                
      tag={Link}
      >
        <CardImg width="100%" src={require("assets/img/bg6.jpg").default} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">India Visa</CardTitle>
          <CardText>
          From : $200
          </CardText>
        </CardBody>
        <CardFooter>
        2-3 business days 
        </CardFooter>
      </Card>
      </div>
      <div className="p-2">
      <Card  className="shadow-sm base_holder"
      to="/landing-page"                
      tag={Link}
      >
        <CardImg width="100%" src={require("assets/img/bg7.jpg").default} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">India Visa</CardTitle>
          <CardText>
          From : $200
          </CardText>
        </CardBody>
        <CardFooter>
        2-3 business days 
        </CardFooter>
      </Card>
      </div>









    </Slider>
</div>

    </>
  );
}

export default SimpleSlider;

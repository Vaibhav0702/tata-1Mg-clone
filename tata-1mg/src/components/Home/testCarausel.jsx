import React from "react";
import Slider from "react-slick";
import "./cara.css";
import image from "../Pictures/cr1.PNG";
import image1 from "../Pictures/cr2.PNG";
import image2 from "../Pictures/cr3.PNG";
import image3 from "../Pictures/cr4.PNG";
import image4 from "../Pictures/cr5.PNG";
import image5 from "../Pictures/cr6.PNG";
import image6 from "../Pictures/cr7.PNG";
const Test = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  return (
    <div className="Maindiv">
      <Slider {...settings}>
        <div id="Igmdiv2">
          <img src={image} alt="" />
        </div>
        <div id="Igmdiv2">
          <img src={image1} alt="" />
        </div>
        <div id="Igmdiv2">
          <img src={image2} alt="" />
        </div>
        <div id="Igmdiv2">
          <img src={image3} alt="" />
        </div>
        <div id="Igmdiv2">
          <img src={image4} alt="" />
        </div>
        <div id="Igmdiv2">
          <img src={image5} alt="" />
        </div>
        <div id="Igmdiv2">
          <img src={image6} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Test;

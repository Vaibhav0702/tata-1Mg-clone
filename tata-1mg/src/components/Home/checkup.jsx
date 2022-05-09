import React from "react";
import Slider from "react-slick";
import "./cara.css";
import image from "../Pictures/1mg.png";
import image1 from "../Pictures/C2.PNG";
import image2 from "../Pictures/C3.PNG";
import image3 from "../Pictures/C4.PNG";
import image4 from "../Pictures/C5.PNG";
import image5 from "../Pictures/C6.PNG";
const Health = () => {
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
      </Slider>
    </div>
  );
};

export default Health;

import React from "react";
import Slider from "react-slick";
import "./cara.css";
import axios from "axios";
import { useEffect, useState } from "react";
// import rate from "../Pictures/rate.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        // backgroundColor: "white",
        // color: "black",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        backgroundColor: "white",
      }}
      onClick={onClick}
    />
  );
}

function Ayurveda(url) {
  const [Product, setProduct] = useState([]);
  // let content = null;

  useEffect(() => {
    axios.get(url.url).then((response) => {
      setProduct(response.data);
    });
  }, [url]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="Ayurveda">
        <Slider {...settings}>
          {Product.map((data) => (
            <div id="ayurdiv" key={data.id}>
              <div className="ayurimg">
                <img className="ayuimg" src={data.Image} alt="" />
              </div>
              <span className="imgtitle">{data.Titel}</span>
              <span className="imgtitle">{data.Discription}</span>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Ayurveda;

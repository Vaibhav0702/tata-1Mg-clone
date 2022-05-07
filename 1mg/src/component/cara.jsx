import React from "react";
import Slider from "react-slick";
import "./cara.css";
import axios from "axios";
import { useEffect, useState } from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function Cara(url) {
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
      <div className="Maindiv">
        <Slider {...settings}>
          {Product.map((data) => (
            <div id="Imgdiv" key={data.id}>
              <img
                style={{ width: "150", height: "150px" }}
                src={data.Image}
                alt=""
              />

              <span className="imgtitle">{data.Titel}</span>
              <span className="imgtitle">{data.Discription}</span>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Cara;

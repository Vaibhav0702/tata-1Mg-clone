import "./zandu.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Fillter from "../../Filtter/Fillter"
export default function Zandu() {
  // set zandu data in variable
  const [zanduData, setZanduData] = useState([]);

  // ! get data from Api
  const getZanduData = () => {
    // fatch Api
    axios.get(" http://localhost:8080/zandu").then((data) => {
      // set data in zanduData
      setZanduData(data.data);
    });
  };

  useEffect(() => {
    getZanduData();
  }, []);

  return (
    <div className="Zandu-Fillter-page">
    <Fillter />
      <div className="Zandu-page">
        {zanduData.map((data) => (
          <div className="Zandu-main-contaner" key={data.id}>
            <div className="Zandu-upper-contaner">
              <img src={data.img} alt="img" srcset="" className="img" />
            </div>
            <div className="Zandu-middle-contaner">
              <p className="title">{data.title}</p>
              <p className="product-info">
                <span>{data.paking}</span> of{" "}
                <span>
                  {data.quintity} {data.unit}{" "}
                </span>
                <span>{data.type}</span>
              </p>
              {data.start !== "" ? (
                <p className="star-rating">
                  <span className="star">
                    {data.start} <span class="fa fa-star checked"></span>
                  </span>
                  &nbsp;&nbsp;{data.rating} rating
                </p>
              ) : null}
            </div>
            <div className="Zandu-bottom-contaner">
              <p className="mrp-discount">
                {" "}
                MRP <span className="mrp"> {data.mrp}</span>&nbsp; &nbsp; &nbsp;
                <span className="discount"> {data.discount}% OFF</span>
              </p>
              <div className="paymant-btn">
                <p className="paymant">₹{data.payment}</p>
                <button className="btn">ADD</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

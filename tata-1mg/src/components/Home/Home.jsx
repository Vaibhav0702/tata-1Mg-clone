import React from "react";
import "./home.css";
import { Carousel } from "react-bootstrap";
import "./cara.css";
import Test from "./testCarausel";
import Cara from "./cara";
import Health from "./checkup";
import Ayurveda from "./Ayurveda";

export const Home = () => {

return (
    <div className="home">

      <div className="home_container">
        <div className="carrousel">
          <div>
            <Carousel
              variant="dark"
              className="c1"
              indicators={false}
              controls={false}
            >
              <Carousel.Item>
                <img
                  className="d-block"
                  src="https://onemg.gumlet.io/image/upload/w_899,h_200,,a_ignore,q_auto,f_auto/v1651427483/hxgf3veswgz1scecefwc.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src="https://onemg.gumlet.io/image/upload/w_899,h_200,,a_ignore,q_auto,f_auto/v1651469437/zkm0v49j2nsuuo3vnlyw.png"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src="https://onemg.gumlet.io/image/upload/w_899,h_200,,a_ignore,q_auto,f_auto/v1651561452/x7zr33pjnj4gcpqktn3q.png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="c2">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://onemg.gumlet.io/image/upload/w_480,h_200,,a_ignore,q_auto,f_auto/v1651558002/v6hr3rqq82elrplswcmb.png"
              alt=""
            />
          </div>
        </div>
        <div className="quote">
          <h1>
            Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
          </h1>
        </div>
        <div className="poster">
          <a href="https://www.1mg.com/subscription-plan/subscriptions?utm_source=cpsales&utm_medium=allcampaigns&utm_campaign=homepage_bottom_scroller&referer=mini_care_plan_home_page">
            <img
              style={{ width: "100%" }}
              src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="full_body">
        <div className="health_check">
          <div className="head">
            <span>Full body health Checkups</span>
            <button className="btn1">See all</button>
          </div>
          <div>
            <Health />
          </div>
        </div>
        <div className="product">
          <div className="head">
            Featured brands
            <button className="btn1">See all</button>
          </div>
          <a href="/zandu">
          <Cara url={"https://tata-1-mg-backend.vercel.app/brands"} />
          </a>
          
        </div>
      </div>
      <div>
        <div className="head">
          <span>Popular categories</span>
        </div>
        <Cara url={"https://tata-1-mg-backend.vercel.app/categories"} />
      </div>
      <div>
        <div className="head">
          <span>Tata 1mg health products</span>
        </div>
        <Cara url={"https://tata-1-mg-backend.vercel.app/tata1Mg"} />
      </div>
      <div>
        <div className="head">
          <span>Shop by Health Concerns</span>
        </div>
        <Cara url={"https://tata-1-mg-backend.vercel.app/healthCon"} />
      </div>
      <div>
        <div className="head">
          <span>Trending now</span>
        </div>
        <div>
          <Cara url={"https://tata-1-mg-backend.vercel.app/trending"} />
        </div>
      </div>
      <div>
        <div>
          <div>
            <div className="head">
              <span>Pathology Tests | Up to 70% off</span>
            </div>
            <Test />
          </div>
        </div>
        <div className="head">
          <span>healthy food</span>
        </div>
        <Cara url={"https://tata-1-mg-backend.vercel.app/healthFood"} />
      </div>
      <div>
        <div className="head">
          <span>Popular Combo Deals</span>
        </div>
        <Cara url={"https://tata-1-mg-backend.vercel.app/combos"} />
      </div>
      <div>
        <div className="head">
          <span>Energy Drink</span>
        </div>
        <Cara url={"https://tata-1-mg-backend.vercel.app/energydrink"} />
      </div>
      <div>
        <div className="head">
          <span>Ayurveda</span>
        </div>
        <Ayurveda url={"https://tata-1-mg-backend.vercel.app/ayurveda"} />
      </div>
    </div>
  );


}
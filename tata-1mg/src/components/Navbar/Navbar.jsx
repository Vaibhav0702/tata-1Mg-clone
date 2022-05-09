import "./navbar.css";
import { setItemAction, getItemAction } from "../../redux/action/itemAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SignUpLogin } from "./signUpLogin";

export const Navbar = () => {

  // -----------

  const dispatch = useDispatch();
  const itemReducer = useSelector((state) => state.itemReducer);
  const CardItem = itemReducer.items.length;

  useEffect(() => {
    dispatch(getItemAction());
  }, [dispatch]);

  return (
    <div className="header">
      {/* ---------------------------1st line---------------------------------------------- */}

      <div className="header_first_row">
        <div className="header_first_row_first_section">
          <div className="logo">
            <Link className="logo_image" to="/">
              <img
                className="logo_image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/TATA_1mg_Logo.svg/2560px-TATA_1mg_Logo.svg.png"
                alt="Logo_img"
              />
            </Link>
          </div>

          <div className="text_inside_first_header_row">MEDICINES</div>

          <div className="text_inside_first_header_row">LAB TESTS</div>

          <div className="text_inside_first_header_row">ASK DOCTOR</div>

          <div className="text_inside_first_header_row">COVID19</div>

          <div className="text_inside_first_header_row">AYURVEDA</div>

          <div className="text_inside_first_header_row">CARE PLAN</div>
        </div>

        {/* -------------------------------------------------- */}

        <div className="header_first_row_second_section">
          <div className="login_signup">
            <SignUpLogin />
          </div>

          <div className="offers">Offers</div>

          <div className="cart_icon" id="cart_icon">
            {CardItem > 0 ? <spna id="CartItem">{CardItem}</spna> : null}
          </div>

          <div className="help">Need Help?</div>
        </div>
      </div>

      {/*-----------------------------------2nd line-------------------------------------------  */}

      <div className="header_second_row">
        <div className="header_second_row_first_section">
          <div className="city_list">
            <div className="navigation_icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>

            <input
              type="text"
              className="cities_input"
              placeholder="Enter your city"
            />

            <div className="locator_icon"></div>
          </div>

          <div className="search_box">
            <input
              type="text"
              className="search_input"
              placeholder="Search for Medicines and Health Products"
              id="search_input"
            />

            <span className="navigation_icon">
              <i className="fa fa-search"></i>
            </span>
          </div>
        </div>

        {/* ------------------------------------------- */}

        <div className="header_second_row_second_section">
          <div className="discount_icon">
            <img
              src="https://res.cloudinary.com/du8msdgbj/image/upload/v1570695364/quick_buy_rebrand_lqpnce.svg"
              alt="discount-Icon"
            />
          </div>

          <div className="discount_tag">
            QUICK BUY! Flat 25% off on medicines*
          </div>

          <button className="upload">Upload</button>

          <div></div>
        </div>
      </div>

      {/* -----------------------------------3rd line------------------------------------------------- */}

      <div className="header_third_row">
        {/* -------------------- */}
        <div className="drop_down">
          All Medicines <i className="fa fa-angle-down" aria-hidden="true"></i>
          <div className="drop_down_content">
            <ul className="dropdown_first_heading">
              Medicine by theropatic className
            </ul>
          </div>
        </div>

        {/* ----------------------- */}

        <div className="drop_down">
          Winter care <i className="fa fa-angle-down" aria-hidden="true"></i>
          <div className="drop_down_content">
            <ul className="dropdown_first_heading">Body & Skin Care</ul>
            <ul className="dropdown_first_heading">Hair & Scalp Care</ul>
            <ul className="dropdown_first_heading">Cough & Cold</ul>
            <ul className="dropdown_first_heading">Fever & Headache</ul>
            <ul className="dropdown_first_heading">Vaporizer & Nebulizer</ul>
            <ul className="dropdown_first_heading">Heating Aid</ul>
            <ul className="dropdown_first_heading">Winter Combos</ul>
          </div>
        </div>

        {/* ----------------- */}

        <div className="drop_down">
          Featured <i className="fa fa-angle-down" aria-hidden="true"></i>
          <div className="drop_down_content">
            <h3> Tata 1mg Health Products</h3>

            <ul className="dropdown_first_heading">Trending Products</ul>

            <ul className="dropdown_first_heading">Expoler Somethig New</ul>

            <ul className="dropdown_first_heading">Buy More, Save More</ul>

            <ul className="dropdown_first_heading">Vaccations</ul>

            <ul className="dropdown_first_heading">Min 33% Off</ul>

            <ul className="dropdown_first_heading">Combos</ul>

            <ul className="dropdown_first_heading">Deal Of The Day</ul>

            <ul className="dropdown_first_heading">
              <h3>Top Brands</h3>

              <li className="dropdown_second_heading">GOQii</li>

              <li className="dropdown_second_heading">Organic India</li>

              <li className="dropdown_second_heading">Accu-check</li>

              <li className="dropdown_second_heading">Dr. Morepen</li>

              <li className="dropdown_second_heading">Himalaya Products</li>

              <li className="dropdown_second_heading">Abbott Nutrition</li>
            </ul>
          </div>
        </div>

        {/* --------------------- */}

        <div className="drop_down">
          Covin Essentials{" "}
          <i className="fa fa-angle-down" aria-hidden="true"></i>
          <div className="drop_down_content">
            <ul className="dropdown_first_heading">Boost Your Imunity</ul>
            <ul className="dropdown_first_heading">Chyawanprash</ul>
            <ul className="dropdown_first_heading">Sanitizer & Hand Wash</ul>
            <ul className="dropdown_first_heading">Mask</ul>
            <ul className="dropdown_first_heading">Thermometer</ul>
          </div>
        </div>

        {/* ------------------------- */}

        <div className="drop_down">
          Fitness & Supplements{" "}
          <i className="fa fa-angle-down" aria-hidden="true"></i>
          <div className="drop_down_content">
            <ul className="dropdown_first_heading">
              Vitamins & Supplements
              <li
                className="dropdown_second_heading"
                onclick="window.location.href = 'multivitamins.html'"
              >
                Multivitamins
              </li>
              <li
                className="dropdown_second_heading"
                onclick="window.location.href = 'vitamins_A-Z.html'"
              >
                Vitamins A-Z
              </li>
              <li
                className="dropdown_second_heading"
                onclick="window.location.href = 'MineralSupplements.html'"
              >
                Mineral Supplements
              </li>
            </ul>
            <ul className="dropdown_first_heading">
              Nutritonal Drinks
              <li className="dropdown_second_heading">Adult Daily Nutrition</li>
              <li className="dropdown_second_heading">Kid Nutrition</li>
              <li className="dropdown_second_heading">For Women</li>
            </ul>
            <ul className="dropdown_first_heading">
              Health food & Drinks
              <li className="dropdown_second_heading">
                Green Tea & Herbal Tea
              </li>
            </ul>
            <ul className="dropdown_first_heading">
              Protien Supplements
              <li className="dropdown_second_heading">Whey Protien</li>
              <li className="dropdown_second_heading">Amino Acid</li>
              <li className="dropdown_second_heading">Mass Gainer</li>
              <li className="dropdown_second_heading">Workout Essential</li>
              <li className="dropdown_second_heading">Fat Burner</li>
            </ul>
            <ul className="dropdown_first_heading">
              Omega & Fish oil
              <li className="dropdown_second_heading">Fish Oil</li>
              <li className="dropdown_second_heading">Cod Liver Oil</li>
              <li className="dropdown_second_heading">Flax Seed Oil</li>
            </ul>
            <ul className="dropdown_first_heading">
              Speciality Supplements
              <li className="dropdown_second_heading">Green Supplements</li>
              <li className="dropdown_second_heading">Beauty supplements</li>
              <li className="dropdown_second_heading">Pre & Probiotics</li>
              <li className="dropdown_second_heading">Glucosamina</li>
              <li className="dropdown_second_heading">Collagen</li>
              <li className="dropdown_second_heading">Antioxidents</li>
              <li className="dropdown_second_heading">Biotin</li>
            </ul>
            <ul className="dropdown_first_heading">
              Weigth Management
              <li className="dropdown_second_heading">
                Weigth Management Herbs
              </li>
            </ul>
          </div>
        </div>

        {/* ------------------------ */}

        <div className="drop_down">
          Diabetes <i className="fa fa-angle-down" aria-hidden="true"></i>
          <div className="drop_down_content">
            <ul className="dropdown_first_heading">
              Device
              <li className="dropdown_second_heading">Blood Glucose Moniter</li>
              <li className="dropdown_second_heading">Test Strip & Lancets</li>
              <li className="dropdown_second_heading">Syrings & Pens</li>
            </ul>
            <ul className="dropdown_first_heading">
              Diabitic Medicines
              <li className="dropdown_second_heading">
                Vitamins,Minerals & Antioxidents
              </li>
              <li className="dropdown_second_heading">Homeopathy Medicines</li>
              <li className="dropdown_second_heading">Ayurvedic Medicines</li>
            </ul>
            <ul className="dropdown_first_heading">Sugar Subsitutes</ul>
            <ul className="dropdown_first_heading">
              Diabetic Diet
              <li className="dropdown_second_heading">Juices & vinegars</li>
              <li className="dropdown_second_heading">SuperFoods</li>
            </ul>
            <ul className="dropdown_first_heading">Diabetic Foot Health</ul>
          </div>
        </div>
        {/* ------------------------------ */}

        <div className="drop_down">
          Healthcare Device{" "}
          <i className="fa fa-angle-down" aria-hidden="true"></i>
          <div className="drop_down_content">
            <ul className="dropdown_first_heading">
              Masks(N95, Surgical & More)
            </ul>

            <ul className="dropdown_first_heading">BP Monitors</ul>

            <ul className="dropdown_first_heading"> Nebulizers & Vaporizers</ul>

            <ul></ul>

            <ul></ul>
          </div>
        </div>

        {/* ------------------------------ */}

        <div className="drop_down">
          Personal Care <i className="fa fa-angle-down" aria-hidden="true"></i>
        </div>

        <div className="drop_down">
          Health Condition{" "}
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        </div>

        <div className="drop_down">
          Ayurveda Products{" "}
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        </div>

        <div className="drop_down">
          Homeopathy <i className="fa fa-angle-down" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

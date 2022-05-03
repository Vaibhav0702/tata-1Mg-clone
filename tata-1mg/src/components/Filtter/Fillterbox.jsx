import "./filter.css";
import { useState } from "react";
export default function Fillterbox() {
  const [brand, setBrand] = useState(["abhi",  "kay", "say", "maj" ,"adfa","asdfa","fdadf","adfa","asdfa","fdadf","adfa","asdfa","fdadf"]);
  return (
    <div className="filter-box">
      <h4 className="filter-brands">BRANDS</h4>
      <input
        type="text"
        className="filter-input"
        placeholder="Search Brand"
        onChange={(e) => console.log(e.target.value)}
      />
      {brand.map((e, i) => (
        <p className="filter-sub-box">
          {" "}
          <input type="checkbox" />{" "}
          <span className="name-quintity">
            <span>abhishek</span>
            <span className="filter-quinty">i</span>
          </span>
        </p>
      ))}
    </div>
  );
}

import "./filter.css";
export default function Fillterbox({ API, title }) {
  console.log(API,"apiapiapi")

  return title==="DISCOUNT"?(
    <div className="filter-box">
    <p className="filter-brands">{title}</p>
    <p className="filter-sub-box">
          {" "}
          <input type="checkbox" />{" "}
          <span className="name-quintity">
            <span>Less then 10%</span>
            <span className="filter-quinty">17</span>
          </span>
        </p>
        <p className="filter-sub-box">
          {" "}
          <input type="checkbox" />{" "}
          <span className="name-quintity">
            <span>10% and above</span>
            <span className="filter-quinty">96</span>
          </span>
        </p>
        <p className="filter-sub-box">
          {" "}
          <input type="checkbox" />{" "}
          <span className="name-quintity">
            <span>20% and above</span>
            <span className="filter-quinty">61</span>
          </span>
        </p>
        <p className="filter-sub-box">
          {" "}
          <input type="checkbox" />{" "}
          <span className="name-quintity">
            <span>30% and above</span>
            <span className="filter-quinty">11</span>
          </span>
        </p>
    </div>
  ):(
    <div className="filter-box">
      <p className="filter-brands">{title}</p>
      <input
        type="text"
        className="filter-input"
        placeholder="Search Brand"
        onChange={(event) => console.log(event.target.value)}
      />
      {API.map((d, i) => (
        <p className="filter-sub-box">
          {" "}
          <input type="checkbox" />{" "}
          <span className="name-quintity">
            <span>{d.product}</span>
            <span className="filter-quinty">{d.quintity}</span>
          </span>
        </p>
      ))}
    </div>
  );

}

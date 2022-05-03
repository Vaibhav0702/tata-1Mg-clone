import "./filter.css"
import Fillterbox from "./Fillterbox"

export default function Fillter() {
  return (
    <div className="filter-page">
      <div className="filter-title">
          <h4 className="filter-Name">FILTERS</h4>
      </div>
      <Fillterbox />
      <Fillterbox />
      <Fillterbox />
    </div>
  )
}

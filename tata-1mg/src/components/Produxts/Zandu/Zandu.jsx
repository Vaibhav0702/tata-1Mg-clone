import "./zandu.css";
// import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductAction } from "../../../redux/action/productAction";
import { setItemAction, getItemAction } from "../../../redux/action/itemAction";
import Fillter from "../../Filtter/Fillter";
import ReactPaginate from "react-paginate";
import { useNavigate } from 'react-router';

const Per_Page = 16;

export default function Zandu() {
  const dispatch = useDispatch();
  const productReducer = useSelector((state) => state.productReducer);
  const itemReducer = useSelector((state) => state.itemReducer);

  let navigate = useNavigate();

  // items length
  console.log(
    itemReducer.items.length,
    "jafljladsjfljalfjkdajfaj",
    itemReducer
  );
  // set zandu data in variable
  var { products, error } = productReducer;
  console.log(products, "products aara h", error);

  useEffect(() => {
    // getZanduData();
    dispatch(ProductAction());
    dispatch(getItemAction());
  }, [dispatch]);

  // function AddItem (data) {
  //   console.log(data,"data")
  //   console.log("hiiiiiiii")
  // }

  //! pagination

  const [currentPage, setCurrentPage] = useState(0);

  function handlePageClick({ selected: selectePage }) {
    setCurrentPage(selectePage);
  }

  // 0, 10, 20, 30
  const offset = currentPage * Per_Page;

  const onset = offset + Per_Page;

  const pageCount = Math.ceil(products.length / Per_Page);

  products = products.slice(offset, onset);




  return (
    <>
    <div className="Zandu-Fillter-page">
      <Fillter />
      <div className="Zandu-page">
        {products.map((data) => (
          <div className="Zandu-main-contaner" key={()=>{

          }}>
            <div className="Zandu-upper-contaner" onClick={()=>{
              navigate(`/zandu/${data._id}`)
            }}>
              <img src={data.img} alt="img" srcset="" className="imag"/>
            </div>
            <div className="Zandu-middle-contaner">
              <p className="title">{data.title}</p>
              <p className="product-info">
                <span>{data.form}</span> of{" "}
                <span>
                  {data.quintity} {data.unit}{" "}
                </span>
                <span>{data.type}</span>
              </p>
              {data.star !== "" ? (
                <p className="star-rating">
                  <span className="star">
                    {data.star} <span class="fa fa-star checked"></span>
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
                <button
                  className="btan"
                  onClick={() => {
                    dispatch(setItemAction(data));
                  }}
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <ReactPaginate
      className="paginate"
        previousLabel={" Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination_link"}
        nextLinkClassName={"pagination_link"}
        disabledClassName={"pagination_link--disabled"}
        activeClassName={"pagination_link--active"}
      />
    </>
  );
}

// .then(dispatch(gitItemAction()))

{
  /* <ReactPaginate
previousLabel = {"<- Previous"}
nextLabel = {"Next ->"}
pageCount={pageCount}
onPageChange={handlePageClick}
containerClassName={"pagination"}
previousLinkClassName={"pagination_link"}
nextLinkClassName={"pagination_link"}
disabledClassName={"pagination_link--disabled"}
activeClassName={"pagination_link--active"}
/> */
}

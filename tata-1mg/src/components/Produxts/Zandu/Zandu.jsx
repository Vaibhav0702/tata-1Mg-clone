import "./zandu.css";
// import axios from "axios";
import {useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import {ProductAction} from "../../../redux/action/productAction"
import {setItemAction,getItemAction} from "../../../redux/action/itemAction"
import Fillter from "../../Filtter/Fillter"
export default function Zandu() {

  const dispatch = useDispatch()
  const productReducer  = useSelector(state=>state.productReducer)
  const itemReducer = useSelector(state=>state.itemReducer)

  // items length
  console.log(itemReducer.items.length,"jafljladsjfljalfjkdajfaj",itemReducer)
  // set zandu data in variable
  const {products,error} = productReducer
  console.log(products,"products aara h",error)

  useEffect(() => {
    // getZanduData();
    dispatch(ProductAction())
    dispatch(getItemAction())
    console.log("fkajlfkjlkadsjfkljalfjlkdj")
  }, [dispatch]);


  // function AddItem (data) {
  //   console.log(data,"data")
  //   console.log("hiiiiiiii")
  // }

  return (
    <div className="Zandu-Fillter-page">
    <Fillter />
      <div className="Zandu-page">
        {products.map((data) => (

          <div className="Zandu-main-contaner" key={data.id}>
            <div className="Zandu-upper-contaner">
              <img src={data.img} alt="img" srcset="" className="img" />
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
              <div className="paymant-btn" >
                <p className="paymant" >₹{data.payment}</p>
                <button className="btn" onClick={()=>{dispatch(setItemAction(data))}}>ADD</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}


// .then(dispatch(gitItemAction()))
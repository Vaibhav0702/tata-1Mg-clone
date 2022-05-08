import "./filter.css"
import Fillterbox from "./Fillterbox"
import Sort from "./Sort"
import {useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import {BrandAction} from "../../redux/action/brandAction"
import {ProductFormAction} from "../../redux/action/productFormAction"
import {UsesAction} from "../../redux/action/useAction"

export default function Fillter() {

  const dispatch = useDispatch();

  const brandsReducer = useSelector(state=>state.brandsReducer)
  const {brands} = brandsReducer

  const productFormReducer = useSelector(state=>state.productFormReducer)
  const {forms} = productFormReducer

  const usesReducer = useSelector(state=>state.usesReducer)
  const {uses} = usesReducer



  console.log("brands aara h bhut ",brands,uses,forms)
  useEffect(()=>{
    dispatch(BrandAction())
    dispatch(ProductFormAction())
    dispatch(UsesAction())

  },[dispatch])
  return (
    <>
    <Sort />
    <div className="filter-page">
      <div className="filter-title">
          <h4 className="filter-Name">FILTERS</h4>
      </div>
      <Fillterbox API={brands} title="BRANDS"/>
      <Fillterbox API={brands} title="DISCOUNT"/>
      <Fillterbox  API={forms} title="PRODUCT FORM"/>
      <Fillterbox API={uses}title="USES"/>
    </div>
    </>
  )
}

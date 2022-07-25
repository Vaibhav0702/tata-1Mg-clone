import React from 'react'
import "./filter.css"
import {RatingSortAction,LowToHigh,HighToLow,Discount} from "../../redux/action/productAction"
import {useDispatch} from "react-redux"
export default function Sort() {

    const dispatch = useDispatch()
    function Sorting (e)
    {
        console.log(e.target.value)
        if(e.target.value === "rating")
        {
            dispatch(RatingSortAction("rating"))

        }else if(e.target.value === "lowtohigh")
        {
            dispatch(LowToHigh())
        }
        else if(e.target.value === "hightolow")
        {
            dispatch(HighToLow())
        }else if(e.target.value === "discount")
        {
            dispatch(Discount())
        }
    }
    return(
        <>
    <span className='sortBy'>Sort by</span>
    <select className="form-select" id='form-sort' aria-label="Default select example" onChange={Sorting}>
    <option selected>Relavence</option>
    <option value="rating">Average Customer Rating</option>
    <option value="lowtohigh">Price : Low to High</option>
    <option value="hightolow">Price : High to Low</option>
    <option value="discount">Discount</option>
    </select>
    </>
    )

}









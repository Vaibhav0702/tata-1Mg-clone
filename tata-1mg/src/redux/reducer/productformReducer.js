
import {
    GET_PRODUCTFORM_REQUEST,
    GET_PRODUCTFORM_SECCESS,
    GET_PRODUCTFORM_FAIL,
  } from "../constants/productConstants";

export const productFormReducer = (state={
    forms:[]
},action) =>
{
    switch(action.type)
    {
        case GET_PRODUCTFORM_REQUEST:
            return {
                ...state,
                forms:[]
            }
        case GET_PRODUCTFORM_SECCESS:
            return{
                ...state,
                forms:action.payload
            }
        case GET_PRODUCTFORM_FAIL:
           return {
                ...state,
                error:action.payload
            }
        default:
            return state
    }
}
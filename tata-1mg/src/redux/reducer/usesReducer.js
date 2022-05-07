import {
    GET_USES_REQUEST,
    GET_USES_SECCESS,
    GET_USES_FAIL,
  } from "../constants/productConstants";
export const usesReducer = (state={
    uses:[]
},action) =>
{
    switch(action.type)
    {
        case GET_USES_REQUEST:
            return {
                ...state,
                uses:[]
            }
        case GET_USES_SECCESS:
            return{
                ...state,
                uses:action.payload
            }
        case GET_USES_FAIL:
           return {
                ...state,
                error:action.payload
            }
        default:
            return state
    }
}
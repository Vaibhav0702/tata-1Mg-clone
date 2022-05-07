import { GET_BRAND_REQUEST,GET_BRAND_SECCESS,GET_BRAND_FAIL } from "../constants/productConstants"
export const brandsReducer = (state={
    brands:[]
},action) =>
{
    switch(action.type)
    {
        case GET_BRAND_REQUEST:
            return {
                ...state,
                brands:[]
            }
        case GET_BRAND_SECCESS:
            console.log(state,"brands")
            return{
                ...state,
                brands:action.payload
            }
        case GET_BRAND_FAIL:
           return {
                ...state,
                error:action.payload
            }
        default:
            return state
    }
}
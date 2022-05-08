import {ADD_ITEMS_REQUEST,GET_ITEMS_REQUEST,GET_ITEMS_SECCESS,GET_ITEMS_FAIL} from "../constants/productConstants"


export const itemReducer =(state={
    items:[]
},action)=>{
    switch(action.type)
    {
        case ADD_ITEMS_REQUEST:
            return {
                ...state,
                items:[...state.items,action.payload]
            }
            case GET_ITEMS_REQUEST:
                return {
                    ...state,
                    items:[]
                }
            case GET_ITEMS_SECCESS:
                return{
                    ...state,
                    items:action.payload
                }
            case GET_ITEMS_FAIL:
               return {
                    ...state,
                    error:action.payload
                }
            default:
                return state
    }
}
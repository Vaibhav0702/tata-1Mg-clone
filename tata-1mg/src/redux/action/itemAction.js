
import {ADD_ITEMS_REQUEST,GET_ITEMS_REQUEST,GET_ITEMS_SECCESS,GET_ITEMS_FAIL} from "../constants/productConstants"
import axios from "axios"

export const setItemAction = (paylad)=>async(dispatch)=>
{
        axios.post("http://localhost:8085/Items",paylad).then(({data}) =>{
            console.log(data)
                dispatch({
                    type:ADD_ITEMS_REQUEST,
                    payload:data
                })
        })
}

export const getItemAction = () => async (dispatch) => {
    try {
      dispatch({ type: GET_ITEMS_REQUEST});
      const { data } = await axios.get("http://localhost:8085/Items");
      console.log(data,"ddddddddddddddddddddddddddddddddddddd")    
      dispatch({ type: GET_ITEMS_SECCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_ITEMS_FAIL,
        payload:
          error.data && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };




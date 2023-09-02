import {
    GET_USES_REQUEST,
    GET_USES_SECCESS,
    GET_USES_FAIL,
  } from "../constants/productConstants";
  import axios from "axios";


  
export const UsesAction =()=> async (dispatch) => {
    try {
      dispatch({ type: GET_USES_REQUEST });
      const { data } = await axios.get("https://tata-1-mg-backend.vercel.app/uses");
      dispatch({ type: GET_USES_SECCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_USES_FAIL,
        payload:
          error.data && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
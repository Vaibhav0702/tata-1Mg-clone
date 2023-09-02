
import {
    GET_PRODUCTFORM_REQUEST,
    GET_PRODUCTFORM_SECCESS,
    GET_PRODUCTFORM_FAIL,
  } from "../constants/productConstants";
  import axios from "axios";


export const ProductFormAction =()=> async (dispatch) => {
    try {
      dispatch({ type: GET_PRODUCTFORM_REQUEST });
      const { data } = await axios.get("https://tata-1-mg-backend.vercel.app/productForm");
      console.log(data,"data action brands se aara h")
      dispatch({ type: GET_PRODUCTFORM_SECCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_PRODUCTFORM_FAIL,
        payload:
          error.data && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
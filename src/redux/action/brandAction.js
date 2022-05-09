import {
  GET_BRAND_REQUEST,
  GET_BRAND_SECCESS,
  GET_BRAND_FAIL,
} from "../constants/productConstants";

import axios from "axios";

export const BrandAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BRAND_REQUEST });
    const { data } = await axios.get("http://localhost:8080/BRANDS");
    console.log(data, "data action brands se aara h");
    dispatch({ type: GET_BRAND_SECCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_BRAND_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

import {
  GET_BRAND_REQUEST,
  GET_BRAND_SECCESS,
  GET_BRAND_FAIL,
} from "../constants/productConstants";

import axios from "axios";

export const BrandAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BRAND_REQUEST });
    // const { data } = await axios.get("http://localhost:5000/mybrand");
    const { data } = await axios.get("https://tata-1-mg-backend.vercel.app/mybrand");

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

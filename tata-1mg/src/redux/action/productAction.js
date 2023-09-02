import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SECCESS,
  GET_PRODUCT_FAIL,
  GET_AVERAGERATING,
  GET_LOWTOHIGH,
  GET_HIGHTOLOW,
  DISCOUNT,
} from "../constants/productConstants";
import axios from "axios";

export const ProductAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_REQUEST });
    const { data } = await axios.get("https://tata-1-mg-backend.vercel.app/zandu");
    // console.log(data,"data action se aara h")
    dispatch({ type: GET_PRODUCT_SECCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const RatingSortAction = (rating) => {
  return {
    type: GET_AVERAGERATING,
    payload: rating,
  };
};

export const LowToHigh = () => {
  return {
    type: GET_LOWTOHIGH,
  };
};

export const HighToLow = () => {
  return {
    type: GET_HIGHTOLOW,
  };
};

export const Discount = () => {
  return {
    type: DISCOUNT,
  };
};

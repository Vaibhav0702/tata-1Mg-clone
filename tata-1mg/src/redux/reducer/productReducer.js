import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SECCESS,
  GET_PRODUCT_FAIL,
  GET_AVERAGERATING,
  GET_LOWTOHIGH,
  GET_HIGHTOLOW,
  DISCOUNT,
} from "../constants/productConstants";
export const productReducer = (
  state = {
    products: [],
  },
  action
) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        products: [],
      };
    case GET_PRODUCT_SECCESS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCT_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_AVERAGERATING:
    //   console.log(
    //     [...state.products].filter(
    //       (e) => Number(e.star) < 5 && Number(e.star) >= 4
    //     ),
    //     "star"
    //   );
      return {
        ...state,
        products: [...state.products].filter(
          (e) => Number(e.star) < 5 && Number(e.star) >= 4
        ),
      };
    case GET_LOWTOHIGH:
        return{

            ...state,
            products: [...state.products].sort(
              (a,b) =>{
                  return Number(a.payment) - Number(b.payment)
              }
            ),
        }
    case GET_HIGHTOLOW:
        return{
            ...state,
            products: [...state.products].sort(
              (a,b) =>{
                  return Number(b.payment) - Number(a.payment)
              }
            ),
        }
    case DISCOUNT:
        return{
            ...state,
            products: [...state.products].sort(
              (a,b) =>{
                  return Number(a.discount) - Number(b.discount)
              }
            ),
        }
    default:
      return state;
  }
};

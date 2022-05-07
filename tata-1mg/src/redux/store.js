import { combineReducers, createStore } from "redux";
import cartReducer from "./cartRedux";




const rootReducer = combineReducers({ cart: cartReducer });



export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
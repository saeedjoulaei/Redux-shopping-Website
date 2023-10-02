import { combineReducers } from "redux";
import productsReducer from "./products/productsReducer";
import cartReducer from "./cart/cartReducer";

const rootreducer = combineReducers({
  productsState: productsReducer,
  cartsState: cartReducer,
});

export default rootreducer;

import { createStore } from "redux";
import { combineReducers } from "redux";
import products from "../productSlice";
import cart from "../cartSlice";

const root = combineReducers({
    products: products,
    cart: cart
})

export const store = createStore(root)
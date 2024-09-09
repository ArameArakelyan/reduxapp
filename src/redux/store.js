import { combineReducers, createStore } from "redux";
import photos from "./PhotoSlice";

const root = combineReducers({
    photos:photos
})
const store = createStore(root)

export default store
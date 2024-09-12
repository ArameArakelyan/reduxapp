import { combineReducers, createStore } from "redux";
import likes from "./FavSlice";


const root = combineReducers({
  likes:likes
})
const store = createStore(root)

export default store
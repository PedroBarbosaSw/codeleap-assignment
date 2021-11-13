import { combineReducers } from "redux";
import postReducer from "./redux/reducers/postReducer";

const rootReducer = combineReducers({
   posts: postReducer
})

export default rootReducer
import { combineReducers } from "redux";
import searchQuerySlice from "./searchQuerySlice";

const rootReducer = combineReducers({
    search: searchQuerySlice,
});

export default rootReducer;

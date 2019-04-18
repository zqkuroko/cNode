import { combineReducers } from "redux";
import { reducer as listReducer } from "./list";
import { reducer as detailsReducer } from "./details";
import { reducer as userReducer } from "./user";

const reducer = combineReducers({
    list: listReducer,
    details: detailsReducer,
    user: userReducer
});

export default reducer;
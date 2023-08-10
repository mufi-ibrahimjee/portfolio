import { combineReducers } from "redux";
import branchDataReducer from "./branchData/branchDataReducer";
import phoneNumberReducer from "./phoneNumber/phoneNumberReducer";

const reducer = combineReducers({
  branchData: branchDataReducer,
  phone: phoneNumberReducer,
});

export default reducer;

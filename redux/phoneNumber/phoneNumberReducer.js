import { SET_PHONE_NUMBER } from "./phoneNumberTypes";

const initialState = {
  phone: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHONE_NUMBER:
      return {
        phone: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

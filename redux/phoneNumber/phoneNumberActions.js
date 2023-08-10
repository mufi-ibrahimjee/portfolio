import { SET_PHONE_NUMBER } from "./phoneNumberTypes";

export const setPhoneNumber = (phone) => {
  return {
    type: SET_PHONE_NUMBER,
    payload: phone,
  };
};

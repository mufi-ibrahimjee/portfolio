import * as yup from "yup";

const phoneUtil =
  require("google-libphonenumber").PhoneNumberUtil.getInstance();

export const phoneNumberForm = (country) => {
  return yup.object().shape({
    phone: yup
      .string()
      .test("phoneNumber", "kindly enter a valid contact number", (val) => {
        if (val === undefined || val === null || val === "") {
          return false;
        }
        try {
          const number = phoneUtil.parseAndKeepRawInput(val, country);
          return phoneUtil.isValidNumberForRegion(number, country);
        } catch (err) {
          return false;
        }
      })
      .required("kindly enter a valid contact number"),
  });
};

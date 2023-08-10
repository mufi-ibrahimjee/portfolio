import { telephoneCodes } from "./data";

export const getTelephoneCountryCode = (country) => {
  const code = telephoneCodes.find((obj) => obj.value === country);
  return code;
};

export const getTelephoneCountryKey = (country) => {
  const code = telephoneCodes.find((obj) => obj.value === country);
  console.log(code);
  return code.key;
};

export const getObjectKey = (obj, value) => {
  const givenObj = obj.find((o) => o.value === value);
  return givenObj.key;
};

export const allowedCountries = {
  params: {
    country: "ke",
  },
};

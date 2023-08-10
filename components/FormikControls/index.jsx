import React from "react";
import PropTypes from "prop-types";
import FormikCustomInput from "../../atoms/FormikCustomInput";
import FormikAutoComplete from "../../atoms/FormikAutoComplete";

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <FormikCustomInput {...rest} />;
    case "autocomplete":
      return <FormikAutoComplete {...rest} />;
    case "select":
      return <FormikCustomInput {...rest} />;
    default:
      return null;
  }
};

FormikControl.propTypes = {
  control: PropTypes.string.isRequired,
};

export default FormikControl;

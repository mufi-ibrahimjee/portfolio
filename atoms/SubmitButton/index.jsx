import PropTypes from "prop-types";

import { Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import * as styles from "./styles";

const SubmitButton = ({ loading, text }) => {
  return (
    <LoadingButton
      loading={loading}
      variant="contained"
      type="submit"
      size="large"
      sx={styles.submitButton}
    >
      <Typography variant="subtitle6">{text}</Typography>
    </LoadingButton>
  );
};

SubmitButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default SubmitButton;

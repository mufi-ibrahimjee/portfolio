import { useState, useEffect } from "react";

import PropTypes from "prop-types";

import { Alert, Box, Slide } from "@mui/material";

import * as styles from "./styles";

const MuiAlert = ({ variant, message }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  return (
    <Box sx={styles.AlertContainer}>
      <Slide direction="left" in={show} mountOnEnter unmountOnExit>
        <Alert variant="filled" severity={variant}>
          {message}
        </Alert>
      </Slide>
    </Box>
  );
};

MuiAlert.defaultProps = {
  variant: "info",
};

MuiAlert.propTypes = {
  variant: PropTypes.string,
  message: PropTypes.string.isRequired,
};

export default MuiAlert;

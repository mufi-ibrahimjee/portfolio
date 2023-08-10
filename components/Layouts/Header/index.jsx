import { useRouter } from "next/router";

import PropTypes from "prop-types";

import { Stack } from "@mui/material";

import * as styles from "./styles";

const Header = ({ children }) => {
  const router = useRouter();
  const { country } = router.query;

  return (
    <Stack direction="column">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={styles.headerContainer}
      >
        <img
          src={country === "ke" ? "/logo/ipay.svg" : "/logo/elipa.svg"}
          alt="logo"
          width={80}
          height={50}
        />
      </Stack>
      {children}
    </Stack>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;

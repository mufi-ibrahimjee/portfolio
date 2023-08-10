import { useRouter } from "next/router";
import { Typography, Stack } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

import * as styles from "./styles";

const Footer = () => {
  const router = useRouter();
  const { country } = router.query;

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={20}
      sx={{ width: "100%", pb: 5 }}
    >
      <Stack
        sx={styles.secureContainer}
        direction="row"
        alignItems="center"
        justifyContent="center"
        // onClick={() =>
        //   window.open(
        //     country === "ke"
        //       ? "https://www.ipayafrica.com"
        //       : "https://elipa.global",
        //     "_blank"
        //   )
        // }
      >
        <Typography variant="subtitle8" sx={{ cursor: "pointer" }}>
          Secured by {country === "ke" ? "iPay" : "eLipa"}{" "}
        </Typography>

        <LockIcon sx={{ fontSize: "12px" }} />
      </Stack>
    </Stack>
  );
};

export default Footer;

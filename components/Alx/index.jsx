import React from "react";

import { Stack, Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

export default function Alx() {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack spacing={2} alignItems="center">
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ cursor: "pointer", border: "2px", borderColor: "black" }}
      >
        <a
          href="https://docs.google.com/presentation/d/1Ym9ZKqf49XNl3fusW3_dVBvAXr4VWDPH/edit#slide=id.p1"
          target="_blank"
          rel="noreferrer"
        >
          <Typography
            variant="title7"
            color="textSecondary"
            sx={{ fontSize: "30px" }}
          >
            Intellidrop (ALX Pitchdeck)
          </Typography>
        </a>
        <LinkIcon sx={{ fontSize: "30px" }} />
      </Stack>

      <Box
        sx={!mdDown ? { width: 500, height: 300 } : { width: 300, height: 200 }}
      >
        <iframe
          src="https://www.youtube.com/embed/0SJyrpwlViU"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </Box>
    </Stack>
  );
}

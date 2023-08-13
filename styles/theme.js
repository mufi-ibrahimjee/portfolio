import { createTheme } from "@mui/material/styles";
import { black, deepOrange, grey } from "@mui/material/colors";
import colors from "./colors";
import data from "../utils/data.json";

import MuiTypography from "./MuiTypography";
import MuiButton from "./MuiButton";

const { theme } = data;

export const lightTheme = createTheme({
  palette: {
    mode: "light",

    // palette values for dark mode
    // primary: deepOrange,
    // divider: deepOrange[700],
    // background: {
    //   default: grey[500],
    //   paper: deepOrange[900],
    // },
    // text: {
    //   primary: "#212121",
    //   secondary: grey[500],
    // },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "open-sans",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ].join(","), // to be discussed
  },
  colors,
  components: {
    MuiTypography,
    MuiButton,
  },
  spacing: 4,
  f1: "24px",
  f2: "20px",
  f3: "16px",
  f4: "12px",
  bold5: 500,
});

export const darkTheme = createTheme({
  palette: {
    type: "dark",
    background: {
      paper: "#303030",
      default: "#212121",
    },
    text: {
      primary: grey[50],
      secondary: grey[50],
    },
  },
});

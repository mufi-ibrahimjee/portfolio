import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  amountText: {
    color: theme.colors.orange,
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: 700,
    letterSpacing: "0.4px",
  },
}));

export default useStyles;

export const headerContainer = {
  ml: 5,
  mr: 5,
  mt: 5,
};

export const emailContainer = {
  textAlign: "right",
  color: (theme) => theme.colors.mono13,
};

export const languageSelectorContainer = {
  background: (theme) => theme.colors.blue,
  height: "27px",
  width: "100vw",
};

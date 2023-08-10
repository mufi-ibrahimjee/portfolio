import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  tooltip: {
    padding: 0,
  },
  input: {
    borderRadius: 3,
    height: "50px",
    border: "0.1px",
    fontSize: 12,
  },
  multiline: {
    borderRadius: 7,
    height: "100px",
    border: "0.1px",
    fontSize: 12,
  },
  inputLabelNoShrink: {
    transform: "translate(14px, 12px) scale(1)",
  },
  inputLabelMultilineNoShrink: {
    transform: "translate(14px, 36px) scale(1)",
  },
  placeholder: {
    "& input::placeholder": {
      fontSize: "12px",
      fontWeight: 400,
    },
  },
}));

export default useStyles;

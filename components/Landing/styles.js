import { makeStyles } from "@mui/styles";
import { iobj } from "./index";

const useStyles = makeStyles((theme) => ({
  cont: {
    minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
    paddingBottom: theme.spacing(10),
  },
  subtitle: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
  },
  avatar: {
    height: theme.spacing(8),
    width: theme.spacing(8),
    padding: theme.spacing(2),
  },
  ...iobj,
}));

export default useStyles;

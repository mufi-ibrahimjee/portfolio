import {
  Avatar,
  Fade,
  Grid,
  Box,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
  Zoom,
} from "@mui/material";

import ReactTyped from "react-typed";
import clsx from "clsx";
import Cancel from "@mui/icons-material/Cancel";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import data from "../../utils/data.json";
import { iconify } from "../../utils/iconify";

import useStyles from "./styles";

const { landing } = data;

const getIcons = (name) => {
  let giveIcon = <Cancel color="white" fontSize={36} />;
  switch (name) {
    case "linkedin":
      giveIcon = <LinkedInIcon sx={{ fontSize: "60px" }} />;
      break;
    case "github":
      giveIcon = <GitHubIcon sx={{ fontSize: "60px" }} />;
      break;
    case "gmail":
      giveIcon = <EmailIcon sx={{ fontSize: "60px" }} />;
      break;
    default:
      giveIcon = <Cancel color="white" fontSize={36} />;
  }
  return giveIcon;
};

const professionalDetails = landing.professionalDetails.map(
  ({ alt, icon, link }) => {
    const ico = iconify(icon);
    const ic = getIcons(ico);
    return {
      alt,
      backgroundColor: `#${ic.hex}`,
      icon: ic,
      link,
    };
  }
);

export const iobj = {};

console.log(professionalDetails);
professionalDetails.forEach(({ alt, backgroundColor }) => {
  iobj[alt] = { backgroundColor };
});

export default function Landing() {
  const classes = useStyles();
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.cont}
    >
      <Grid item xs={12} lg={6}>
        <Typography variant={mdDown ? "h2" : "h1"}>{landing.title}</Typography>
        <Typography
          variant={mdDown ? "h5" : "h4"}
          component="h2"
          className={classes.subtitle}
        >
          <ReactTyped
            strings={landing.subtitles}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </Typography>
        <Grid container direction="row" spacing={2}>
          {professionalDetails.map(({ alt, icon, link }, i) => (
            <Grid item key={i}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Zoom in style={{ transitionDelay: `${100 * i}ms` }}>
                  <Tooltip title={alt} placement="top">
                    <Avatar
                      variant="rounded"
                      className={clsx([classes.avatar, classes[alt]])}
                    >
                      {icon}
                    </Avatar>
                  </Tooltip>
                </Zoom>
              </a>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {!mdDown && (
        <Fade in style={{ transitionDelay: "100ms" }}>
          <Grid item lg={6}>
            <img
              src="/logo/landing.svg"
              alt="Landing"
              width="500"
              height="600"
            />
          </Grid>
        </Fade>
      )}
    </Grid>
  );
}

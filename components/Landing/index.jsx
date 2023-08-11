import {
  Avatar,
  Fade,
  Grid,
  Hidden,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
  Zoom,
} from "@mui/material";

import ReactTyped from "react-typed";
import clsx from "clsx";
import Image from "next/image";
import data from "../../utils/data.json";
import Cancel from "@mui/icons-material/Cancel";

import useStyles from "./styles";
const { landing } = data;

const professionalDetails = landing.professionalDetails.map(
  ({ alt, icon, link }) => {
    const ic = {
      hex: "424242",
      component: <Cancel color="white" fontSize={36} />,
    };
    return {
      alt,
      backgroundColor: "#" + ic.hex,
      icon: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          height="100%"
          width="100%"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>{icon}</title>
          <path d={ic.path} fill="white" />
        </svg>
      ),
      link,
    };
  }
);

export let iobj = {};

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
                <Zoom in={true} style={{ transitionDelay: `${100 * i}ms` }}>
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
        <Fade in={true} style={{ transitionDelay: "100ms" }}>
          <Grid item lg={6}>
            <Image
              src="/logo/landing.svg"
              alt="Landing"
              width="900.94"
              height="787"
            />
          </Grid>
        </Fade>
      )}
    </Grid>
  );
}

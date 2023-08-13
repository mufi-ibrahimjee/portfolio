import React, { useCallback } from "react";

import PropTypes from "prop-types";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useScrollTrigger,
  useTheme,
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import Brightness4 from "@mui/icons-material/Brightness4";
import Brightness7 from "@mui/icons-material/Brightness7";
import Landing from "../components/Landing";
import Skills from "../components/Skills";
// import Projects from "../components/Projects";
// import Experience from "../components/Experience";
// import About from "../components/About";
import data from "../utils/data.json";
import { darkTheme, lightTheme } from "../styles/theme";

const { name, projects } = data;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: "none",
  },
}));

const Home = ({ setTheme }) => {
  const classes = useStyles();

  const trigger = useScrollTrigger({ disableHysteresis: true });

  const theme = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme((theme) =>
      theme.palette.type === "dark" ? lightTheme : darkTheme
    );
  }, [setTheme]);

  return (
    <div className={classes.root}>
      <AppBar
        color={!trigger ? "transparent" : "inherit"}
        className={classes.appBar}
        position="fixed"
        sx={{ pl: 5, pr: 5 }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.root}>
            {name}
          </Typography>
          <IconButton edge="end" color="inherit" onClick={toggleTheme}>
            {theme.palette.type === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolbar} />
      <Container>
        <Landing />
        <Skills />
        {/* <Projects data={projects} />
        <Experience />
        <About /> */}
      </Container>
    </div>
  );
};

Home.propTypes = {
  setTheme: PropTypes.func.isRequired,
};

export default Home;

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
  Box,
  Stack,
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import Brightness4 from "@mui/icons-material/Brightness4";
import Brightness7 from "@mui/icons-material/Brightness7";
import Landing from "../components/Landing";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Alx from "../components/Alx";
import Experience from "../components/Experience";
import About from "../components/About";
import data from "../utils/data.json";
import { darkTheme, lightTheme } from "../styles/theme";
import ElevatorPitch from "../components/ElevatorPitch";

const { name, projects } = data;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: "none",
  },
}));

const Home = ({ projects1, setTheme }) => {
  const classes = useStyles();

  const trigger = useScrollTrigger({ disableHysteresis: true });

  const theme = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme((theme1) =>
      theme1.palette.type === "dark" ? lightTheme : darkTheme
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
        <Stack alignItems="center">
          <Box sx={{ mb: 10 }}>
            <Landing />
          </Box>
          <Box sx={{ mb: 10 }}>
            <ElevatorPitch />
          </Box>
          <Box sx={{ mb: 10 }}>
            <Skills />
          </Box>
          <Box sx={{ mb: 10 }}>
            <Projects data={projects1} />
          </Box>
          <Box sx={{ mb: 10 }}>
            <Alx />
          </Box>
          <Box sx={{ mb: 10 }}>
            <Experience />
          </Box>
          <Box sx={{ pb: 10 }}>
            <About />
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export async function getStaticProps() {
  const { baseURI } = projects;
  const repos = projects.repositories;
  const reqInit = {
    headers: {
      Authorization: `token ${process.env.NEXT_PUBLIC_PAT}`,
    },
  };
  const fullRepoData = await Promise.allSettled(
    repos.map(async (name1) => {
      const repo = await fetch(baseURI + name1, reqInit).then((res) =>
        res.json()
      );
      const langs = await fetch(`${baseURI + name1}/languages`, reqInit).then(
        (res) => res.json()
      );
      return {
        ...repo,
        languages: Object.getOwnPropertyNames(langs),
      };
    })
  );

  return {
    props: {
      projects1: fullRepoData,
    },
    revalidate: 60,
  };
}

Home.propTypes = {
  setTheme: PropTypes.func.isRequired,
  projects1: PropTypes.arrayOf({}).isRequired,
};

export default Home;

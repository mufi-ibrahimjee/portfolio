import React from "react";

import { Stack, Typography } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";

export default function ElevatorPitch() {
  return (
    <Stack spacing={3} alignItems="center">
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ cursor: "pointer", border: "2px", borderColor: "black" }}
      >
        <Typography
          variant="title7"
          color="textSecondary"
          sx={{ fontSize: "40px" }}
        >
          Elevator Pitch
        </Typography>

        <ShowChartIcon sx={{ fontSize: "40px" }} />
      </Stack>

      <Typography
        variant="title7"
        color="textSecondary"
        sx={{
          fontSize: "16px",
          textAlign: "justify",
          textJustify: "inter-word",
        }}
      >
        Hello, my name is Mufaddal Mohamedali, and I am a seasoned software
        engineer with 3 years of experience building innovative software
        products. <br />
        <br />
        1. Expert in full-stack development, adept at creating seamless user
        experiences that drive customer satisfaction and engagement. <br />
        2. Skilled in Agile methodologies, consistently delivering high-quality
        software within tight deadlines and exceeding project expectations.
        <br />
        3. Proficient in problem-solving and troubleshooting, utilizing
        cutting-edge technologies to optimize performance and scalability.
        <br />
        <br />
        As the best person to offer these skills, I stand out due to my passion
        for staying updated with the latest industry trends and my commitment to
        continuous learning, ensuring I always bring the most efficient and
        effective solutions to the table. <br />
        <br />
        My contribution to employers/clients will make their jobs and lives
        easier by delivering robust and user-friendly software products. I will
        streamline processes, enhance productivity, and provide them with a
        competitive edge in their respective markets.
        <br />
        <br />
        For any businesses or individuals seeking a dedicated and skilled
        software engineer to elevate their projects to new heights, I ask you to
        consider collaborating with me. Let&apos;s build a brighter future
        together.
        <br /> <br />
        In conclusion, with my proven track record and dedication to excellence,
        I am confident that I will bring significant value and success to any
        team or project I am a part of. Thank you for considering my skills and
        experience.
      </Typography>
    </Stack>
  );
}

import { Typography, Stack } from "@mui/material";

const NotFound = () => {
  return (
    <Stack justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
      <Typography sx={{ fontWeight: 800, fontSize: "50px" }}>
        404 NOT FOUND
      </Typography>
    </Stack>
  );
};

export default NotFound;

export async function getStaticProps() {
  return {
    props: {},
  };
}

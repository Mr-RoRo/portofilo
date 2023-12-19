import { Container, Stack, Typography } from "@mui/material";
import { useState } from "react";

const NavBar = () => {
  const [ScrollY, setScrollY] = useState(Number);
  window.addEventListener("scroll", () => {
    setScrollY(scrollY);
  });
  return (
    <Stack
      bgcolor="white"
      position="fixed"
      width="100%"
      boxShadow={ScrollY > 100 ? 1 : ""}
      sx={{
        transition: "box-shadow 0.2s ease-in-out",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          my: "15px",
        }}
      >
        <Typography variant="h2">
          <Typography variant="h2" color="primary" component="span">
            DAN
          </Typography>
          IAL
        </Typography>
        <Stack flexDirection="row" gap="20px">
          <Typography variant="h3">Home</Typography>
          <Typography variant="h3">About</Typography>
          <Typography variant="h3">Skills</Typography>
          <Typography variant="h3">Works</Typography>
        </Stack>
      </Container>
    </Stack>
  );
};

export default NavBar;

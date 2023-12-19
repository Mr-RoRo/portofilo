import { Container, Stack, Typography } from "@mui/material";
import { useState } from "react";

const NavBar = () => {
  const [ScrollY, setScrollY] = useState(Number);
  const [selectedSec, setSelectedSec] = useState("");
  const navInfo = [
    { id: 1, title: "Home", Y: 0 },
    { id: 2, title: "About", Y: 400 },
    { id: 3, title: "Skills", Y: 1080 },
    { id: 4, title: "Works", Y: 2000 },
  ];
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
      zIndex={10}
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
          {navInfo.map((item) => (
            <Typography
              key={item.id}
              onClick={() => {
                scrollTo({
                  top: item.Y,
                  behavior: "smooth",
                });
                setSelectedSec(item.title);
              }}
              sx={{ cursor: "pointer", transition: "color 0.2s ease-in-out" }}
              variant="h3"
              color={selectedSec == item.title ? "primary" : "text.primary"}
            >
              {item.title}
            </Typography>
          ))}
        </Stack>
      </Container>
    </Stack>
  );
};

export default NavBar;

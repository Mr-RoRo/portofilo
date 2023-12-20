import {
  Container,
  Drawer,
  IconButton,
  Stack,
  Switch,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { keyframes } from "@emotion/react";
import MenuIcon from "@mui/icons-material/Menu";
import { useThemeContext } from "../ThemeRegistry/ThemeContextProvider";

const NavBar = () => {
  const { mode, toggleColorMode } = useThemeContext();
  const [ScrollY, setScrollY] = useState(Number);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSec, setSelectedSec] = useState("");
  const theme = useTheme();
  const TabletAndMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navInfo = [
    { id: 1, title: "Home", Y: 0 },
    { id: 2, title: "About", Y: 400 },
    { id: 3, title: "Skills", Y: 1080 },
    { id: 4, title: "Works", Y: 2000 },
  ];
  const DarkToLight = keyframes`
  from {
    transform: translateX(22px);
  }
  to {
    transform: translateX(6px);
  }
`;
  const LightToDark = keyframes`
  from {
    transform: translateX(6px);
  }
  to {
    transform: translateX(22px);
  }
`;
  window.addEventListener("scroll", () => {
    setScrollY(scrollY);
  });
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      animation: `${mode === "dark" ? DarkToLight : LightToDark} 0.3s ease`,
      transform: mode === "dark" ? "translateX(6px)" : "translateX(22px)",
      "&.Mui-checked": {
        color: "#fff",
        animation: `${mode === "dark" ? LightToDark : DarkToLight} 0.3s ease`,
        transform: mode === "dark" ? "translateX(22px)" : "translateX(6px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage:
            mode !== "dark"
              ? `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                  "#fff"
                )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`
              : `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                  "#fff"
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage:
          mode !== "dark"
            ? `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                "#fff"
              )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`
            : `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                "#fff"
              )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));
  const navBarContent = (
    <Stack
      flexDirection={TabletAndMobile ? "column" : "row"}
      gap="20px"
      alignItems="center"
      width={TabletAndMobile ? "250px" : "auto"}
      pt={TabletAndMobile ? "20px" : "0"}
    >
      {navInfo.map((item) => (
        <Typography
          key={item.id}
          borderBottom={TabletAndMobile ? "1px solid" : "none"}
          borderColor="background.default"
          width="100%"
          textAlign="center"
          pb={TabletAndMobile ? "25px" : "0"}
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
      <MaterialUISwitch onClick={toggleColorMode} defaultChecked />
    </Stack>
  );
  return (
    <Stack
      bgcolor="background.default"
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
        {!TabletAndMobile && navBarContent}
        {TabletAndMobile && (
          <>
            <IconButton onClick={() => setModalOpen(true)}>
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="right"
              open={modalOpen}
              onClose={() => setModalOpen(false)}
            >
              {navBarContent}
            </Drawer>
          </>
        )}
      </Container>
    </Stack>
  );
};

export default NavBar;

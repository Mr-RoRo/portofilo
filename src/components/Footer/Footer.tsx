import {
  Container,
  Fab,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
const Icons = [
  { id: 1, link: "https://github.com/mR-RoRo", icon: <GitHubIcon /> },
  {
    id: 2,
    link: "https://www.instagram.com/mr.ro.ro/",
    icon: <InstagramIcon />,
  },
  { id: 3, link: "https://t.me/MrRoRo", icon: <TelegramIcon /> },
];

const Footer = () => {
  const theme = useTheme();
  const TabletAndMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack width="100%" position="relative">
      <Container
        sx={{
          py: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Stack flexDirection="row" color="primary.main" gap="10px">
          {Icons.map((icon) => (
            <IconButton
              key={icon.id}
              sx={{
                p: "6px 8px",
                bgcolor: "white",
                borderRadius: "12px",
                boxShadow: 3,
              }}
              href={icon.link}
              target="_blank"
              color="inherit"
            >
              {icon.icon}
            </IconButton>
          ))}
        </Stack>
        <Typography>©2023 | All Rights Reserved</Typography>
      </Container>
      <Fab
        size={TabletAndMobile ? "small" : "medium"}
        color="primary"
        sx={{ position: "absolute", right: "10px", bottom: "10px" }}
        onClick={() => {
          scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <ArrowCircleUpIcon />
      </Fab>
    </Stack>
  );
};

export default Footer;

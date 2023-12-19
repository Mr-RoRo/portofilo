import {
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import profile from "../../assets/profile.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import TitleShape from "../TitleShape/TitleShape";
const AboutInfo = [
  { id: 1, title: "Name", content: "Danial Abbaszadeh" },
  { id: 2, title: "Age", content: "18" },
  { id: 3, title: "E-mail", content: "fsoocity@gmail.com" },
  { id: 4, title: "Location", content: "qom" },
];
const Icons = [
  { link: "https://github.com/mR-RoRo", icon: <GitHubIcon /> },
  { link: "https://www.instagram.com/mr.ro.ro/", icon: <InstagramIcon /> },
  { link: "https://t.me/MrRoRo", icon: <TelegramIcon /> },
];
const AboutMe = () => {
  const theme = useTheme();
  const large = useMediaQuery(theme.breakpoints.up("xl"));
  const TabletAndMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack width="100%" bgcolor="background.paper" position="relative">
      <Container
        sx={{
          py: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: TabletAndMobile ? "40px" : "50px",
          flexDirection: TabletAndMobile ? "column" : "row",
        }}
      >
        <Stack
          component="img"
          src={profile}
          borderRadius="20px"
          border="10px solid white"
          width="270px"
          height="250px"
        />
        <Stack
          alignItems={TabletAndMobile ? "center" : "flex-start"}
          width={TabletAndMobile ? "auto" : "800px"}
        >
          <TitleShape title="About Me" />
          <Stack>
            {AboutInfo.map((info) => (
              <Stack flexDirection="row" alignItems="center">
                <Typography
                  width={TabletAndMobile ? "90px" : "100px"}
                  variant="body1"
                  color="secondary"
                >
                  {info.title}
                </Typography>
                <Typography
                  width={TabletAndMobile ? "20px" : "40px"}
                  fontWeight="bold"
                  fontSize="18px"
                  component="span"
                  color="primary.main"
                >
                  :
                </Typography>
                <Typography variant="body1" color="secondary">
                  {info.content}
                </Typography>
              </Stack>
            ))}
          </Stack>
          <Stack
            mt="25px"
            gap="25px"
            alignItems={TabletAndMobile ? "center" : "flex-start"}
            textAlign={TabletAndMobile ? "center" : "left"}
          >
            <Typography variant="h2">
              I am Danial Abbaszadeh, Web Developer
            </Typography>
            <Typography variant="body1" color="secondary">
              Hello I’m a self-taught front-end developer based in Qom, Iran. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </Typography>
            <Stack gap="10px">
              <Typography variant="body2">Find Me on Social Media:</Typography>
              <Stack
                flexDirection="row"
                color="primary.main"
                justifyContent="center"
                gap="10px"
              >
                {Icons.map((icon) => (
                  <IconButton
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
            </Stack>
          </Stack>
        </Stack>
      </Container>
      {large && (
        <Typography
          sx={{ transform: "rotate(-90deg)" }}
          top="40%"
          right="0"
          position="absolute"
          fontSize="85px"
          color="#e4eef8"
        >
          H T M L
        </Typography>
      )}
    </Stack>
  );
};

export default AboutMe;

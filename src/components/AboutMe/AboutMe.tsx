import {
  Container,
  Divider,
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
const AboutInfo = [
  { id: 1, title: "Name", content: "Danial Abbaszadeh" },
  { id: 2, title: "Age", content: "18" },
  { id: 3, title: "E-mail", content: "fsoocity@gmail.com" },
  { id: 4, title: "Location", content: "qom" },
];
const Icons = [<GitHubIcon />, <InstagramIcon />, <TelegramIcon />];
const AboutMe = () => {
  const theme = useTheme();
  const large = useMediaQuery(theme.breakpoints.up("xl"));
  return (
    <Stack width="100%" bgcolor="primary.light" position="relative">
      <Container
        sx={{
          py: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "70px",
          flexDirection: "row",
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
        <Stack width="900px">
          <Typography display="flex" gap="15px" variant="h2" mb="25px">
            About Me
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                width: "60px",
                height: "2px",
                border: "2px solid",
                borderColor: "primary.main",
                borderRadius: "8px",
                my: "auto",
              }}
            />
          </Typography>
          {AboutInfo.map((info) => (
            <Stack flexDirection="row" alignItems="center">
              <Typography width="190px" variant="body1">
                {info.title}
              </Typography>
              <Typography
                width="40px"
                fontWeight="bold"
                fontSize="18px"
                component="span"
                color="primary.main"
              >
                :
              </Typography>
              <Typography variant="body1">{info.content}</Typography>
            </Stack>
          ))}
          <Stack mt="25px" gap="25px">
            <Typography variant="h2">
              I am Danial Abbaszadeh, Web Developer
            </Typography>
            <Typography variant="body1">
              Hello I’m a self-taught front-end developer based in Qom, Iran. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </Typography>
            <Stack gap="8px">
              <Typography variant="body2">Find Me on Social Media:</Typography>
              <Stack flexDirection="row" color="primary.main" gap="10px">
                {Icons.map((icon) => (
                  <IconButton
                    sx={{
                      p: "6px 8px",
                      bgcolor: "white",
                      borderRadius: "12px",
                      boxShadow: 3,
                    }}
                    color="inherit"
                  >
                    {icon}
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
          HTML
        </Typography>
      )}
    </Stack>
  );
};

export default AboutMe;

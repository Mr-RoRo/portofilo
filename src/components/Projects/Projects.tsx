import {
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import proImg1 from "../../assets/moviePicker.webp";
import proImg2 from "../../assets/movazee.webp";
import TitleShape from "../TitleShape/TitleShape";
const projects = [
  {
    id: 1,
    name: "Movie Picker",
    description: "یک سایت ریسپانسیو ساخته شده با react , tailwind , daisyui",
    image: proImg1,
    link: "https://moviepicker-one.vercel.app/",
  },
  {
    id: 2,
    name: "Movazee",
    description: "یک سایت ساخته شده با next js , react , mui",
    image: proImg2,
    link: "https://movazee.ir/",
  },
];
const Projects = () => {
  const theme = useTheme();
  const TabletAndMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack id="Projects" width="100%" bgcolor="background.paper">
      <Container
        sx={{
          py: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TitleShape title="چی خلق کردم" />
        <Grid
          container
          xl={13}
          justifyContent="center"
          spacing={TabletAndMobile ? 2 : 4}
          pt="15px"
        >
          {projects.map((item) => (
            <Grid key={item.id} item>
              <Stack
                boxShadow={3}
                width={TabletAndMobile ? "270px" : "300px"}
                borderRadius="8px"
                bgcolor="background.default"
                component="a"
                href={item.link}
                sx={{
                  ":before": {
                    content: '""',
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderRadius: "8px",
                    backgroundImage: `url(${item.image})`,
                  },
                  ":hover": {
                    transform: "scale(1.05)",
                  },
                  position: "relative",
                  zIndex: 1,
                  transition: "transform 0.2s ease-in-out",
                  height: "180px",
                }}
              >
                <Stack
                  component="span"
                  borderRadius="8px"
                  height="180px"
                  sx={{
                    ":hover": {
                      opacity: 0.7,
                    },
                    transition: "opacity 0.2s ease-in-out",
                    background:
                      "linear-gradient(to right bottom, #111, #202020)",
                    opacity: 0,
                    position: "absolute",
                    left: 0,
                    right: 0,
                    p: "8px 12px",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography textAlign="left" color="white">
                    {item.name}
                  </Typography>
                  <Typography textAlign="center" color="white">
                    {item.description}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default Projects;

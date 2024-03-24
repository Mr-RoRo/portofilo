import {
  Button,
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
    link: "https://moviepicker-eight.vercel.app/",
    sourceLink: "https://github.com/Mr-RoRo/Movie_Picker",
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
                height="360px"
                borderRadius="8px"
                bgcolor="background.default"
                sx={{
                  transition: "transform 0.2s ease-in-out",
                  ":hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Stack
                  component="img"
                  borderRadius="8px 8px 0 0"
                  src={item.image}
                  height="180px"
                />
                <Stack
                  justifyContent="space-between"
                  height="170px"
                  p="10px 15px 5px 15px"
                >
                  <Typography variant="body2">{item.name}</Typography>
                  <Typography variant="body1">{item.description}</Typography>
                  <Stack flexDirection="row" gap="8px">
                    <Button
                      variant="outlined"
                      fullWidth
                      href={item.link}
                      target="_blank"
                    >
                      دمو
                    </Button>
                    {item.sourceLink && (
                      <Button
                        variant="outlined"
                        fullWidth
                        href={item.sourceLink}
                        target="_blank"
                      >
                        سورس کد
                      </Button>
                    )}
                  </Stack>
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

import {
  Button,
  Container,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import proImg2 from "../../assets/movazee.webp";
import proImg1 from "../../assets/moviePicker.webp";
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
        <Grid container xs={12} justifyContent="center" spacing={4} pt="15px">
          {projects.map((item) => (
            <Grid xs={12} sm={6} md={4} lg={3} key={item.id} item>
              <Stack
                boxShadow={3}
                height="100%"
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
                  p="10px 15px 10px 15px"
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

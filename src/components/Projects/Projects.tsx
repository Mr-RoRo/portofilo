import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import TitleShape from "../TitleShape/TitleShape";
import proImg1 from "../../assets/DShop.png";
import proImg2 from "../../assets/filmgard.png";
import proImg3 from "../../assets/movazee.png";
const projects = [
  {
    id: 1,
    name: "ّFilmGard",
    content: "a responsive site with react and mui about movies info",
    image: proImg2,
    link: "http://film-gard.vercel.app/",
    sourceLink: "https://github.com/Mr-RoRo/FilmGard",
  },
  {
    id: 2,
    name: "DShop",
    content: "a responsive online shop with react and mui",
    image: proImg1,
    link: "",
    sourceLink: "https://github.com/Mr-RoRo/dshop",
  },
  {
    id: 3,
    name: "Movazee",
    content:
      "a responsive site with react , nextjs and mui about learning programing",
    image: proImg3,
    link: "https://movazee.ir/",
    sourceLink: "",
  },
];
const Projects = () => {
  return (
    <Stack width="100%" bgcolor="primary.light">
      <Container
        sx={{
          py: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TitleShape title="Personal Project" />
        <Grid container xl={13} justifyContent="center" spacing={4} pt="15px">
          {projects.map((item) => (
            <Grid key={item.id} item>
              <Stack
                boxShadow={3}
                width="300px"
                height="350px"
                borderRadius="12px"
                bgcolor="white"
                sx={{
                  transition: "transform 0.2s ease-in-out",
                  ":hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Stack
                  component="img"
                  borderRadius="12px"
                  src={item.image}
                  height="180px"
                />
                <Stack
                  justifyContent="space-between"
                  height="150px"
                  p="5px 15px"
                >
                  <Typography variant="body2">{item.name}</Typography>
                  <Typography variant="body1">{item.content}</Typography>
                  <Stack flexDirection="row" gap="8px">
                    <Button
                      variant="outlined"
                      fullWidth
                      href={item.link}
                      target="_blank"
                    >
                      Live Demo
                    </Button>
                    {item.sourceLink && (
                      <Button
                        variant="outlined"
                        fullWidth
                        href={item.sourceLink}
                        target="_blank"
                      >
                        Source Code
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

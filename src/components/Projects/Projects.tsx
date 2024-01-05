import {
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TitleShape from "../TitleShape/TitleShape";
import proImg1 from "../../assets/DShop.png";
import proImg2 from "../../assets/filmgard.png";
import proImg3 from "../../assets/movazee.png";
const projects = [
  {
    id: 1,
    name: "ّFilmGard",
    content: "یک سایت واکنش گرا درباره فیلم ها با react و mui",
    image: proImg2,
    link: "http://film-gard.vercel.app/",
    sourceLink: "https://github.com/Mr-RoRo/FilmGard",
  },
  {
    id: 2,
    name: "DShop",
    content: "صفحه اصلی یک سایت فروشگاهی بصورت واکنش گرا ساخته شده با react و mui",
    image: proImg1,
    link: "",
    sourceLink: "https://github.com/Mr-RoRo/dshop",
  },
  {
    id: 3,
    name: "Movazee",
    content:
      "یک سایت واکنش گرا درباره آموزش برنامه نویسی ساخته شده با react و nextjs و mui",
    image: proImg3,
    link: "https://movazee.ir/",
    sourceLink: "",
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
        <TitleShape title="نمونه کارها" />
        <Grid container xl={13} justifyContent="center" spacing={TabletAndMobile ? 2 : 4} pt="15px">
          {projects.map((item) => (
            <Grid key={item.id} item>
              <Stack
                boxShadow={3}
                width={TabletAndMobile ? "270px" : "300px"}
                height="360px"
                borderRadius="12px"
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
                  borderRadius="12px"
                  src={item.image}
                  height="180px"
                />
                <Stack
                  justifyContent="space-between"
                  height="170px"
                  p="10px 15px 5px 15px"
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

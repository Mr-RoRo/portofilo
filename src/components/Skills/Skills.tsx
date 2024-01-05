import {
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TitleShape from "../TitleShape/TitleShape";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const skillsInfo = [
  {
    id: 1,
    title: "مهارت های کدزنی",
    listItem: [
      "HTML / CSS / Js / Typescript",
      "React",
      "MaterialUI",
      "TailWind",
      "MySql",
      "Next Js",
    ],
  },
  {
    id: 2,
    title: "ابزار و تکنولوژی ها",
    listItem: [
      "Visual Studio Code",
      "Git & Github",
      "Adobe Photoshop",
      "Figma",
      "Prisma",
    ],
  },
  {
    id: 3,
    title: "دانش صعنت",
    listItem: ["توسعه وب", "طراحی وب واکنش گرا"],
  },
  {
    id: 4,
    title: "مهارت های دیگر",
    listItem: ["مقدماتی کامپیوتر", "سخت افزار کامپیوتر"],
  },
  { id: 5, title: "زبان", listItem: ["انگلیسی"] },
  {
    id: 6,
    title: "علاقمندی ها",
    listItem: ["کد زدن", "یادگیری چیزهای جدید", "قهوه", "بازی", "موزیک"],
  },
];
const Skills = () => {
  const theme = useTheme();
  const TabletAndMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack id="Skills">
      <Container
        sx={{
          py: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TitleShape title="مهارت های من" />
        <Grid
          container
          xl={16}
          justifyContent="center"
          spacing={TabletAndMobile ? 2 : 4}
          pt="15px"
        >
          {skillsInfo.map((item) => (
            <Grid key={item.id} item>
              <Stack
                p="20px"
                boxShadow={3}
                width={TabletAndMobile ? "270px" : "350px"}
                height={TabletAndMobile ? "380px" : "340px"}
                borderRadius="12px"
                bgcolor="background.paper"
                sx={{
                  transition: "transform 0.2s ease-in-out",
                  ":hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Typography variant="h3">{item.title}</Typography>
                <Divider
                  sx={{
                    mt: "5px",
                    mb: "25px",
                    width: "60px",
                    border: "2px solid",
                    borderColor: "primary.main",
                    borderRadius: "8px",
                  }}
                />
                <Stack gap="20px">
                  {item.listItem.map((thing) => (
                    <Stack key={thing} flexDirection="row" gap="5px">
                      <RadioButtonCheckedIcon
                        color="primary"
                        fontSize="small"
                      />{" "}
                      <Typography variant="body1" color="secondary">
                        {thing}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default Skills;

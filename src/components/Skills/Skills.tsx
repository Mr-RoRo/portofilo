import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import TitleShape from "../TitleShape/TitleShape";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
const skillsInfo = [
  {
    id: 1,
    title: "Coding Skills",
    listItem: ["HTML / CSS / Js / Typescript", "React", "MaterialUI", "Access"],
  },
  {
    id: 2,
    title: "Tools & Technologies",
    listItem: [
      "Visual Studio Code",
      "Git & Github",
      "Adobe Photoshop",
      "Figma",
    ],
  },
  {
    id: 3,
    title: "Industry Knowledge",
    listItem: ["Web Development", "Responsive Web Design", "React Website"],
  },
  {
    id: 4,
    title: "Other Skills",
    listItem: ["Basic Computer", "Computer Hardware"],
  },
  { id: 5, title: "Language Skills", listItem: ["English"] },
  {
    id: 6,
    title: "Interests",
    listItem: [
      "Coding",
      "Learn New Things",
      "Coffee",
      "Black Color",
      "Dark Mode",
    ],
  },
];
const Skills = () => {
  return (
    <Stack>
      <Container
        sx={{
          py: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TitleShape title="My Skills" />
        <Grid container xl={16} justifyContent="center" spacing={4} pt="15px">
          {skillsInfo.map((item) => (
            <Grid key={item.id} item>
              <Stack
                p="20px"
                boxShadow={3}
                width="350px"
                height="300px"
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
                    <Stack
                      key={thing}
                      flexDirection="row"
                      alignItems="center"
                      gap="5px"
                    >
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

import {
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import profile from "../../assets/profile.png";
const Hero = () => {
  const theme = useTheme();
  const TabletAndMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack
      width="100%"
      mt={TabletAndMobile ? "100px" : "200px"}
      mb={TabletAndMobile ? "100px" : "150px"}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: TabletAndMobile ? "40px" : "80px",
          flexDirection: TabletAndMobile ? "column-reverse" : "row",
          textAlign: TabletAndMobile ? "center" : "left",
        }}
      >
        <Stack>
          <Typography variant="h1" color="primary">
            I'M Danial Abbaszadeh
          </Typography>
          <Typography variant="h3" mt="10px" mb="20px">
            Front End Developer
          </Typography>
          <Typography color="secondary" lineHeight={1.6} variant="body1">
            Hello I’m a self-taught front-end developer based in Qom, Iran. I
            can develop responsive websites from scratch and raise them into
            modern user-friendly web experiences.
          </Typography>
          <Typography color="secondary" lineHeight={1.6} variant="body1">
            I have been studying computer for more than a year and I have been
            working in the web field for 8 months and I enjoy creating different
            sites and it is my way of enjoying my life.
          </Typography>
        </Stack>
        <Stack
          component="img"
          src={profile}
          borderRadius="100%"
          width="250px"
          height="250px"
        />
      </Container>
    </Stack>
  );
};

export default Hero;
